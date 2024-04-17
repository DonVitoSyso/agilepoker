import "../style/global.css"
//import { Navigation } from "lucide-react";
// import { AlertCircle } from "lucide-react";
import Nav from "./Nav";
import SimpleFast from "./SimpleFast";


function Header() {
    return(
        <>
            <Nav />
            <SimpleFast />
        </>
    )
}

export default Header;