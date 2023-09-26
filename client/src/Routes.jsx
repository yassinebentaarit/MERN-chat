import { useContext } from "react";
import Register from "./RegisterAndLoginForm";
import { UserContext } from "./UserContext";
import Chat from "./Chat";

export default function Routes(){
    const {username}= useContext(UserContext);

    if (username){
        return <Chat/>
    }
    return (
        <Register></Register>
    )
}