import { createBrowserRouter } from "react-router-dom";
import { PostLayout } from "../Pages/Outlet";
import { Shop } from "../Pages/Shop";
import { Cart } from "../Pages/Cart";


export const ShopRouter = createBrowserRouter([
    {path:"/", element: <PostLayout />, children: [
        {path: "/", index: true, element: <Shop />},
        {path: "/Cart", element: <Cart />}
    ]}
])