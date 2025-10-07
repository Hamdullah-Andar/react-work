import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostForm = ({ post }) => {
  // useForm give us engough information
  // using watch from useFrom continuasly monitor a field
  // using setValue we can set value in react-form
  // using the conrol we can get control of RTE and other forms, we will pass control to RTE and we will get control of RTE
  // using getValues will give us form values

  // we can pass an object ot useForm, and we can give it any values we want, we will use defaultValues here
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        // we will use the title form the post passed to PostForm whiel editing or make it empty while creating
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) =>  state?.auth?.userData);
  console.log(userData, "this is user data");

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      // TODO: update the file as above to check it's availability first

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  // // we have to watch the title and create slug by converting space to underscore
  // // we have dependecy array in useCallBack also
  // const slugTransform = useCallback((value) => {
  //   if (value && typeof value === "string")
  //     // const slug = value.toLowerCase().replace(/ /g, '-')
  //     // setValue('slug', slug)
  //     // return slug
  //     // we can use above 3 commented line or below, we can remove the brackets of if in below syntax, but keep in above syntax

  //     // ^ is negate sign which will be ignored
  //     return value
  //       .trim()
  //       .toLowerCase()
  //       .replace(/^[a-zA-Z\d\s]+/g, "-")
  //       .replace(/\s/g, "-");

  //   return "";
  // }, []);
  
  // Above slugTransform was adding single - without any other value, but below slugTransform works fine
  const slugTransform = useCallback((value) => {
  if (!value || typeof value !== "string") return "";

  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")        // replace spaces with -
    .replace(/[^a-z0-9-]/g, "")  // remove non-alphanumeric except -
    .replace(/--+/g, "-");       // collapse multiple - into one
}, []);


  // when we run a method and store it in a variable as subscription, we can store it in any other variable too.
  // We get a return in useEffect, where we get a callback, and write subscription.unsubscribe(), which is used for memory management or useEffect optimization
  React.useEffect(() => {
    // we get a callback in watch too, as it come from react-hook-form
    // we get value and name in watch method
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        // we set the slug, the transformed value of slug
        // value is an object we will get tile out of it
        // we can vaildate it to as shouldValidate to true
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title: "
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug: "
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content: "
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image: "
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
