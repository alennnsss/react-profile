import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png'

export default function Links() {
    return (
        <aside className="aside">
            <button className='em-b'>
                <img src={email} alt="email" className='link-photo'/>
                <h3 className='links'>Email</h3>
            </button>
            <button className='li-b'>
                <img src={linkedin} alt="linkedin" className='link-photo' />
                <h3 className='links'>LinkedIn</h3>
            </button>
        </aside>
    )
}