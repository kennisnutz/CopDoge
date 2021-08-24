import React , {useContext} from 'react';
import Theme from '../Theme/Theme';
import './EarningsManager.css';

function MiniBox({icon , iconBg , title , value}) {
    const theme = useContext(Theme)
    let boxBackground = theme.boxBackground;
    let text = theme.text;
    let border = theme.border;
    return (
        <div style={{background: `${boxBackground}` , borderColor: `${border}`}} className="flex miniBox">
            <div style={{background:`${iconBg}`}} className=" icon_box flex-center">
            {icon}
            </div>
            <div>
                <p style={{color: `${text}`}}>{title}</p>
                <h1 style={{color: `${text}`}}>{value}</h1>
            </div>
        </div>
    )
}

export default MiniBox
