import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PostTitle = () => {
    const [counter, setCounter] = useState(10)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data));
        console.log('i am re-rendered, this is to check if this re-rendred while getting  clicked. this is the side-effect we were talking about.')
    }, [counter])

    return(
        <div>
        {posts.map((post) => (
            <li key={post.id}>
                <span><Link to={`/posts/${post.id}`}>{post.title}</Link></span>
            </li>
        ))}
        <h3>The count is {counter}</h3>
        <button onClick={() => setCounter(counter + 5)}>Add by 5</button>
        </div>
    )
}