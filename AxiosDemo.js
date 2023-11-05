import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosDemo() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err)); // You can log the actual error message by using `console.log(err)` instead of `console.log('err')`
  }, []);

  return (
    <div>
      <h1>Data Fetching</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}-{post.title}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AxiosDemo;
