import { Outlet } from "react-router-dom";
import { Nav } from "../Components/Nav";
import { Nav2 } from "../Components/Nav2";

export const PostLayout= () => {
    return(
        <div>
            <Nav2 />
            <Outlet />
        </div>
    )
}