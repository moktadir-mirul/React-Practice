import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import App2 from "../App2";
import { PostLayout } from "../Pages/Outlet";
import PostDetails from "../Pages/PostDetails";
import { PostTitle } from "../Pages/PostTitle";

export const PostRouter = createBrowserRouter([
    {path:'/', element: <PostLayout />, children: [
        {path:'/', index: true, element: <App2 />},
        {path:'/note', element: <App />},
        {path:'/Posts', element: <PostTitle /> },
        {path:'/posts/:postID', element: <PostDetails />},
    ]},
])