import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePostFetch } from "../CustomHook/usePostFetch";

export const PostName= () => {

    const { data: posts, isLoading, errorMessage} = usePostFetch([], 'http://localhost:3000/posts')

    
     return (
        
        <div>
            <h1 className="PostName">Famous Newspaper Headlines</h1>
            {isLoading && <h1  style={{color:"blue", textAlign:"center", fontSize:"25px", marginTop: '40px'}}>Data is Loading .......</h1>}
            {errorMessage && <h1 style={{color:"crimson", textAlign:"center", fontSize:"30px", marginTop: '40px'}}>!!!Warning: Data Loading has Failed!!!</h1>}
            <h2 style={{textAlign: 'center', fontFamily: 'sans-serif', fontSize: '25px', fontWeight:'600', margin: '20px', padding: '15px'}}>
                {posts?.map((post) => (
                    <li key={post.id}><Link to={`/PostName/${post.id}`}>{post?.title}</Link></li>
                ))}
            </h2>
        </div>
     )
}