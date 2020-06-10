import React from 'react';

export async function getStaticProps(){
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  return {
    props: {
      posts: posts.data,
      test:123321
    }
  }
}

// @ts-ignore
const Blog = ({posts, test}) => {
  return (
    <ul>
      {test}
      {posts.map((post: any)=>{
        return <li>{post.title}</li>
      })}
    </ul>
  )
}

export default Blog
