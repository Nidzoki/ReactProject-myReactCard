import eMailButton from "../buttons/eMailButton.png";
import linkedInButton from "../buttons/linkedInButton.png";


export default function Buttons(){
    return(
        <div className="buttons">
            <a href="mailto:nikolavidovic01@gmail.com" target="_blank"><img id="emailButton" src = {eMailButton} alt="Email"/></a>
            <a href="https://www.linkedin.com/in/nikola-vidovi%C4%87-5b81101b9" target="_blank"><img id="linkedInButton" src = {linkedInButton} alt="LinkedIn"/></a>

        </div>
    )
}