import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { usePostFetch } from "../CustomHook/usePostFetch";


export const PostDescription =() => {

    const {PostDetails} = useParams();

    const {data:post, isLoading, errorMessage} = usePostFetch(null, `http://localhost:3000/posts/${PostDetails}` )

    return (
        <div style={{width: '60vw', height: 'auto', margin: '0 auto', border: '2px solid brown', padding: '5px'}}>
            {isLoading && <h1  style={{color:"blue", textAlign:"center", fontSize:"25px", marginTop: '40px'}}>Data is Loading .......</h1>}
            {errorMessage && <h1 style={{color:"crimson", textAlign:"center", fontSize:"30px", marginTop: '40px'}}>Data Loading Failed!!!</h1>}
            <h1 className="PostName">{post?.details}</h1>
            <p className="PostPara">{post?.body}</p>

            <h4 style={{textAlign: 'center', fontSize: '20px', marginTop: '10px', textDecoration: 'underline'}}><Link to={'/PostName'}>Go Back</Link></h4>
        </div>
    )
}