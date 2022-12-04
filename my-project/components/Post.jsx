import React, { useState, useEffect} from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc} from 'firebase/firestore'
import { db } from '../firebase'
import  Moment  from 'react-moment'

import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { async } from '@firebase/util'

const Post = ({ id, username, userImg, img, caption}) => {

  
  const [user] = useAuthState(auth)
  const [ comment, setComment] = useState("");
  const [ comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked ] = useState(false);


  //useEffect for the likes

  useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'), snapshot => setLikes(snapshot.docs)), [db, id])

  //useEffect for likes, to check if there was a like from this user using the ID

  useEffect(() => {
    setHasLiked(
        likes.findIndex((like) => like.id === user?.uid) !== -1
    );
  },[likes])


  //useEffect for the comments

  useEffect(() => onSnapshot(query(collection(db, 'posts', id, "comments"), orderBy('timestamp', 'desc')), snapshot => setComments(snapshot.docs)), [db, id])

  //comment functionality

  const sendComment = async (e) => {
    e.preventDefault();
    
    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
        comment: commentToSend,
        username: user.displayName,
        userImage:  user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/6073/6073873.png",
        timestamp: serverTimestamp(), 
    });
  };

  //like functionality

  const likePost = async () => {
    if(hasLiked){
        await deleteDoc(doc(db, "posts", id, "likes", user.uid));    
    }else {
        await setDoc(doc(db, "posts", id, "likes", user.uid), {
            username: user.displayName,
        });
    }
  };


  return (
    <>
    { user && (
        <div className='bg-white my-7 px-5 mx-3 xl:mx-28 rounded-lg shadow-lg'>
        {/**header */}

        <div className='flex items-center p-5'>
            <img alt='pic' src={userImg} className="rounded-full h-10 w-10 object-contain  mr-3"/>
            <p className='flex-1 font-bold'>{username ? username : "Demo User"}</p>
            <DotsHorizontalIcon className='h-5' />
        </div>

        {/**imgage */}
        <img src={img} className='object-cover w-full rounded-lg my-5' />

        {/**buttons */}
       <div className='flex justify-between p-4'>
       <div className='flex space-x-4'>

          {/**like functionality */}

          {hasLiked ? (
            <HeartIconFilled onClick={likePost} className='btn text-red-500' />
          ) : (
            <HeartIcon onClick={likePost} className='btn'/>
          )}
        
            <ChatIcon className='btn'/>
            <PaperAirplaneIcon className='btn'/>
        </div>

        <BookmarkIcon className='btn' />
       </div>

        {/**caption */}
        <p className='p-5 truncate'>

            {/**number of likes */}
            {likes.length > 0 && (
                <p className='font-bold -mt-4 mb-4'>{likes.length} Likes</p>
            )}

            <span className='font-bold mr-1'>{user.displayName ? user.displayName : "Demo User"}</span>
            <span>{caption}</span>
        </p>
        {/**comments */}
         {comments.length > 0 && (
            <div className='ml-10 h-20 overflow-y-scroll'>
                {comments.map((comment) => (
                    <div key={comment.id} className="flex items-center space-x-2 mb-3">
                        <img
                        className='h-7 rounded-full'
                        src={comment.data().userImage}
                        alt="profile-img"
                        />
                      <p className='text-sm flex-1'> 
                        <span className='font-bold'>{comment.data().username ? username : "Demo User"}</span>{ " "}
                        {comment.data().comment}
                      </p>

                     <Moment fromNow className='pr-5 text-xs'>
                        {comment.data().serverTimestamp?.toDate()}
                     </Moment>
                    </div>
                ))}

            </div>
         )}

        {/**input box */}
        <form className='flex items-center p-4'>
            <EmojiHappyIcon className='h-7' />
            <input 
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder='Add a comment...'
             className='border-none flex-1 focus:ring-0 outline-none' />

            <button
            type='submit'
            disabled={!comment.trim()}
            onClick={sendComment}
             className='font-semibold text-blue-500'>
            Post</button>
        </form>
    </div>
    )}
    </>
  )
}

export default Post