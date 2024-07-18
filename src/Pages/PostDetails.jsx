import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
    const {postID} = useParams();

    const [post, setPost] = useState(null);
    
    useEffect(() => {
        fetch(`http://localhost:3000/posts/${postID}`)
        .then((res) => res.json())
        .then((data) => setPost(data))
    }, [])

    return(
        <div>
             <ul>
                <li>
                    <span>{post?.details}</span>
                    <p><li>{post?.body}</li></p>
                </li>
             </ul>
        </div>
    )
}

export default PostDetails;