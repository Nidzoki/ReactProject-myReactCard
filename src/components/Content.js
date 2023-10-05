import NameAndRole from "./NameAndRole";
import Buttons from "./Buttons";
import AbAndInt from "./AboutAndInterests";
import Socials from "./Socials";

export default function Content(){
    return(
        <div className="container">

        <NameAndRole/>
        <Buttons/>
        <AbAndInt/>
        <Socials/>
        </div>
    )
}