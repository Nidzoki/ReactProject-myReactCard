import profilePic from "../photos/nidzoki.jpg";

export default function Header(){
    return(
        <img src={profilePic} className="profilePic" alt="Profile"/>
    )
}