// below we have imported conf from conf and Client, ID, Databases, Storage, Query from appwrite
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

// below we have created a class and create an object from it and export default the created object
// It is very similar to the auth.js service
export class Service{
    // declaring variable as client, databases, bucket (storage)
    client = new Client()
    databases;
    bucket;

    // Account should get created when the constructor is called
    // inside the constructor we create database and bucket (storage) base on client
    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    // below we create post 
    // we get title, slug, content, featuredImage, status, userId from user 
    // we will create a separate method for storing featuredImage
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, // database ID
                conf.appwriteCollectionId, // Collection ID
                slug, // document ID, we can use ID.unique() too, but we are using slug as document id here
                // and we are passing post details as in Object below, we can add other information as well when required
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error ", error);
        }
    }

    // below we are going to create the update post method
    // we are going to update base on the slug, hence we have taken slug separalty then the post which is going to be updated
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // as we are updating document and we have given slug as unique id, we are going to update base on slug
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error ", error)
        }
    }

    // below is the method for deleting a post 
    // we will delete base on the slug which is uniqe id
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            // and return true if the post gets deleted, we will handle the frontend base on return value (true)
            return true
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error ", error)
            // and return false if the post gets error while deleting it, we will handle the frontend base on return value (false)
            return false
        }
    }

    // below we are trying to get single post, base on slug which is unique id
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwirte Service :: getPost :: error", error);
            return false
        }
    }

    // below is the method to get all the posts 
    // as we want to get only active posts, hence we have to Query to get active post only 
    // we have to use default query in the parameter of getPosts method to get active posts only, and store it in queries variable
    // if we wnat to write multiple query, we can write them all in an array 
    async getPosts(queries= [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                // we could write the query below or write it above and use it's variable as blow 
                // [
                //     queries
                // ]
                queries
                // we can pagination, created at and more , we can find more about it in appwrite documentation
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error ", error);
            return false            
        }
    }

    // file upload service, we can write it in separat file as well
    // we should pass the file blob (actual file) instead of file name, just passing file name will give us error
    async uploadFile(file){
        try {
            // for uploading file we use createFile from appwrite documentation
            // we pass bucket id, unique id, and file name to the createfile
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false            
        }
    }

    // delete file method
    // for deleting file we have to pass file id 
    // while storing featuredImage in a post we pass file id  
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error ", error);
            return false
            
        }
    }

    // to preview file we use below method
    // we can use asycn for this method, as it is very fast we can write withou async
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()

export default service

// reviewing some topic multiple time will eventually go to your memory