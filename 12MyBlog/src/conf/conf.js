const conf = {
    appwriteurl: String(import.meta.env.VITE_APPWRITE_URL)
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID)
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID)
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID)
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID)
}

export default conf


// Above is the production level way of using environment variable

// We can create a folder name conf and create a file name conf, config, envInfo inside it. 
// And create an object in conf file and store it in conf variable,
// And add all the env variable to that object and export it

// some time the environment variable may not get load, hence accessing it when .env is loaded crashes our application
// and finding it and fixting it become difficult sometime

// the environment variable may not have stored as string 
// or if it include all number then it may be treated as a number

// but environment variable should be in string format
// specially when you are working using typescript, we get more issues there

// inside the object we have to convert the import.meta.env.VITE_APPWRITE_URL to a string as String(import.meta.env.VITE_APPWRITE_URL)
// hence it is gareented that the value of import.meta.env.VITE_APPWRITE_URL will allway be string even if it is empty as well 
// and we can access it using the export as conf.appwriteurl

// this approach is followed in typescript as well 
// as accessing directly from .env file, we may required to used ! at the end of import.meta.env.VITE_APPWRITE_URL! to unwrap it

// Now we can use appwriteurl to access that env variable
// And now as we convert it to String, it is gareented that we will get it in string format 
// Hence our app will not crush if env was not availabe or added 

// next vedio (second vedio of myblog) we will study about appwrite and the we will study in a way where we don't lock depency to appwrite 
// for example if we are using appwrite now, and later we decide to switch to our own server or firbase we should do it smothly
// and we are not stuck to used appwrite forever which is called locking vendor

