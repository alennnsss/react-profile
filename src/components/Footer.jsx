import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
export default function Footer() {
    return (
        <footer>
            <a href="https://x.com/" target='blank'>
                <img src={twitter} className="social" alt="" />
            </a>   
            <a href="https://github.com/alennnsss" target='blank'> 
                <img src={facebook} className="social" alt="" />
            </a>  
            <a href="https://www.instagram.com/alennnssa/" target='blank'>
                <img src={instagram} className="social" alt="" />
            </a> 
            <a href="https://github.com/alennnsss" target='blank'>    
                <img src={github} className="social" alt="" />
            </a>
        </footer>
    )
}