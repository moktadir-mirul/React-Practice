import { createContext, useReducer } from "react";
import { ShopReducer } from "../Reducer/ShopReducer";



export const ShopContext = createContext();

function ShopProvider (props) {
    const [cart, dispatch] = useReducer(ShopReducer, [])
    return (
        <ShopContext.Provider value={{cart, dispatch}}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopProvider;