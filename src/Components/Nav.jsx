import { Link } from "react-router-dom";

export const Nav= () => {
    return(
        <ul id="ulID">
            <li className="link-id"><Link to={"/"}>Attendance App</Link></li>
            <li className="link-id"><Link to={"/note"}>Note App</Link></li>
            <li className="link-id"><Link to={"/Posts"}>Post Title</Link></li>
        </ul>
    )
}