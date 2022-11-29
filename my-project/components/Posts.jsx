import React from 'react'
import Post from './Post'

const Posts = () => {

 const posts = [ {
    id: "123",
    username: "sssanghe",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "subscribe",
 },
 {
    id: "1234",
    username: "sssanghe",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "subscribe",
 }
];

  return (
    <div>
        {/**post */}
        {posts.map((post) => (
           <Post 
           key={post.id}
           username={post.username}
           userImg={post.userImg}
           img={post.img}
           caption={post.caption}
           />
        ))}
    </div>
  )
}

export default Posts