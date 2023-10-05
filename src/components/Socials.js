import facebookLogo from "../socials/facebook.png"
import githubLogo from "../socials/github.png"
import instagramLogo from "../socials/instagram.png"
import twitterLogo from "../socials/twitter.png"


export default function Socials(){
    return(
        <div className="socials">
            <a href="https://www.facebook.com/nikola.vidovic.54379" target="_blank"><img src={facebookLogo} alt="Facebook"/></a>
            <a href="https://github.com/Nidzoki" target="_blank"><img src={githubLogo} alt="Github"/></a>
            <a href="https://www.instagram.com/nvidovi01/" target="_blank"><img src={instagramLogo} alt="Instagram"/></a>
            <a href="https://en.wikipedia.org/wiki/HTTP_404" target="_blank"><img src={twitterLogo} alt="Twitter"/></a>
        </div>
    )
}