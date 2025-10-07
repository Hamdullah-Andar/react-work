import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

const AllPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        // if we have any query we can pass it in getPosts array 
        // the result of getPosts from appwriteService is called posts, and we have got it in the callback of .then and set it using setPosts as below
        appwriteService.getPosts([])
        .then((postsResponse) => {
            if(postsResponse){
                setPosts(postsResponse.documents)
            }
        })
    }, [])
    console.log("This is all Posts : ", posts)
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (                            
                        <div key={post.$id} className='p-2 w-1'>
                            <PostCard post={post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
  )
}

export default AllPosts