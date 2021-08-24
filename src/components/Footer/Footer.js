import React,{useContext} from 'react'
import Theme from '../Theme/Theme';
import './footer.css';


function Footer() {
    const theme = useContext(Theme)
    const background = theme === 'dark' ? '#190237' : '#F9F9F9';

    return (
        <footer style={{background: `${background}`}}>
            
        </footer>
    )
}

export default Footer
