// appwrite has many services like database, auth, upload download file

// Servies are classes 
// It is the same in other languages also like java, javascript 
// We export method from services and pass the required params and use it, no one care about the method, method may connect talk to appwrite, firebase or our own server
// Application does not care about, it just let you use the method and let me know what data is required
// so we will create Service and use appwirte through our services 

// we have to check appwrite documentation for making our service side by side 
// we will go and check authentication in appwrite documentaion

// we may see some basic code in appwrite documentation of getting started of authentication 

// we will need it. in that code we can see below sections 
// creation of client which required endpoint and project id which we can take from .env file 

// after creating client we have to create account, we can create account if we have client, client is required for account 
// we can call method on account which is created 
// for example create which will create account for us which accepts id, email and password as parameter 
// we need to think about encryption, appwrite will take care of it automatically 

// keeping all above authentication in mind we will creat our own services 
// as we are creating appwrite related services we can create a folder called appwrite in src folder 
// and the first file which we have to create is auth.js or it can also be called as auth.service.js
// we will name it auth.js here

// we can this file for any other project as well
// it is future proof code
// you can add other method too, whenever needed

// as we will need project id, database id and we have kept in conf file and we can import it here 
import conf from "../conf/conf";

// we need the first line from authentication and then "Email and Password" section from appwrite documentaion here, which is as below 
import { Client, Account, ID } from "appwrite";

// we can add the remaining line of authentication below which will do the expected work fine 
// but the reason of creating our own service for it that the method will be exposed in front end, while mixing UI and buseniss logic can create problem sometime

// So we can write it our own way which we called it code improvement or Quality code 

export class AuthService {
    client = new Client()
    account;
    // we will not create an account now, as we need client for it. and we need endpoint and project id for creating a client 
    // hence we will keep it as account variable only 
    // we can directly pass endpoint and project id to Clienet above to create a client, but it is waste of resources (As it will create that passed client by default)
    
    // As an object of the AuthService class get created first and then the client shoult get created for it, and then we should have access to account
    // when an object get created, the method which get called automatically is Constructor, hence we can keep creating client and account functionality there
    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    // in above constructor we have done exactly the same thing which was done in appwrite documentation for creating client and account, but in a better way 
    // here we have combined both appwrite documentation knowledge and javascript knowledge
    // when ever an object gets created from AuthService the constructor gets call automatically and client and account gets created

    // we are going to create account now 
    // for creating an account we have called create method as account.create('[user-id]', 'email@example.com') from appwrite documentaion
    // but we dont want to be dependent to appwrite, so while switching to firebase or our own server we should not required much change 
    // so we will create our own method for creating account in AuthService class
    // inside that method we will call appwrite services 
    // hence we have created a wraper, we can use appwrite, firebase or our own server inside it 

    // we will async await, because we want to finish this task first and then move farward 
    // createAccount is wraper inside whihc we can call appwrite, firbase or our own server services
    // we have distructured the parameter passed to the createAccount 
    // whomever uses createAccount method for creating account will pass an object which includes email, password and name as below 
    async createAccount({email, password, name}) {
        // as createAccount method may get fail sometime hence we have to put it inside try catch (fail safe) block 
        try {
            // access of account is in current context, and it is used in constructor as well, hence we can access it with this key here as well 
            // as we have unique id, email and password, hence we have to pass them in the same order to the create method
            // as we have ID from appwrite, we can create a uniqe Id by using ID.uniqe as bellow
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                // call another mothod, this method will login the user
                return this.login({email, password})
            } else {
                return userAccount;
                // userAccount may have null value which will be handled
                // when we switching from appwrite to firebase or our own server, we can make change inside the createAccount
                // and inside the constructor of AuthService class to the funcionality of firebase or our own server
                // the method of createAccount of AuthService class remain the same
            }
        } catch (error) {
            throw error;
        }
    }

    // we will create login method now 
    async login({email, password}){
        try {
            // we will get the createEmailSession from appwrite doucmentation and use it for user to login and direclty return it
            // how it is handled we will see it in frontend
            // and use this login method inside createAccount 
            return await this.client.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    // we have to check whether the user is logged in or not, when he try to go to home page
    // hence we have to create getCurrentUser method 
    async getCurrentUser(){
        // we have get method on account in appwrite documentataion
        // get method will give us true if account is available otherwise it will return false 
        try {
            return await this.account.get()
        } catch (error) {
            // throw error;
            // if you don't want to throw error, you can use console log as below
            console.log("Appwrite service :: getCurrentUser :: error ", error)
        }
        // we can return null in both cases if we did not get any value for the account or any error happen we return null as bellow 
        // we can also use if else in try section 
        return null
    }

    // we will create logout method
    // delete session is actully logout in appwrite documentaion 
    async logout() {
        // we will add try catch first 
        try {
            // await this.account.deleteSession('current')
            // we can also use the deleteSessions method to delete all session as below
            await this.account.deleteSessions()
            
        } catch (error) {
            console.log("Appwrite Service :: logout :: error", error)
        }
    }

}

// we have created a class and export it 
// for using a class method we have to create an object of calass and use it's method 
// So why not create an object of class here and export it, so that we could access all it's methods from it's Object 

// below we have created an object by the name of authService and export it
const authService = new AuthService();

export default authService

// As we can see in the documentaion of appwrite we have to create a client and then create an accoount of client 
// And all the methods are available on client 

// Now we have to create two properties (client and account from the appwrite which is imported) here in AuthService class above

