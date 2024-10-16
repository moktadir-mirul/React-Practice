import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function PostsShown () {
    const [counter, setCounter] = useState(10)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts?_limit=3')
        .then((res) => res.json())
        .then((data) => setPosts(data));
        console.log('i am re-rendered, this is to check if this re-rendred while getting  clicked. this is the side-effect we were talking about.')
    }, [counter])

    return(
        <div>
        {posts.map((post) => (
            <li key={post.id}>
                <span><Link to={`/posts/${post.id}`}>{post.title}</Link></span>
                <p>{post.body}</p>
            </li>
        ))}
        <h3>The count is {counter}</h3>
        <button onClick={() => setCounter(counter + 5)}>Add by 5</button>
        </div>
    )
}

export default PostsShown;
