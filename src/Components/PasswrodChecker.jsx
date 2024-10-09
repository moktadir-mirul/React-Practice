import { useState } from "react";



export const PasswordCheker = () => {

    const [unHide, setUnHide] = useState(false);

    const passHandler = () => {
        setUnHide(!unHide);
    }

    return(
        <div>
            <div style={{marginTop: "50px"}}></div>
            <form>
                <label htmlFor="pass">Password: </label>
                <input type={unHide ? "text" : "password"} className="text" id="pass" /> <br />
                <input type="checkbox" className="checkbox" id="check" onChange={passHandler} />
                <label htmlFor="check">Show Password</label>
            </form>
        </div>
    )
}