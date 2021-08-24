import React , { useContext , useState , useEffect } from 'react';
import { MdDashboard } from 'react-icons/md';
import Theme from '../Theme/Theme';
import './sidebar.css';


function Sidebar({menubar}) {
    const theme = useContext(Theme)
    let background = theme.background;
    let text = theme.text;
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function menuFunc() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize' , menuFunc);
        return () => window.removeEventListener("resize" , menuFunc);
    }, [width]);


    (width > 1300 && menubar===false) ? menubar = true : menubar = menubar;

    return (
        <div style={{background: `${background}` , left: `${menubar ? '0%' : '-100%'}`}} className="sidebar">
            <div style={{color:`${text}`}} className="dash_box flex">
            <MdDashboard className="dashboard" />
            <p className="dashboard_text">Dashboard</p>
            </div>
        </div>
    )
}

export default Sidebar
