import React from 'react'
// we need to import appwrite to have the information, we need to take it from appwrite Service because we want to use a query here, and we don't have it in state
import appwriteService from '../appwrite/config'

import { Link } from 'react-router-dom'

// we have to pass below props to the PostCard component 
// id should be passed as $id, it is appwrite syntax
const PostCard = ({$id, title, featuredImage}) => {
  return (
    // to make the card clickable we put everything in Link as below
    // where it should go, after clicking a card will be added in to of the Link, it should open the details of that post
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {/* as we have getFilePreview which accept and id and give us a url, which we can use in src of below image  */}
                {/* $id is post id and featuredImage is image id  */}
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard