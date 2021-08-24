import React from 'react'
import './holders.css';
import bnb_logo from '../../Img/BNB_logo.svg';
import {numberWithCommas,TokenName,dividendTokenName} from '../../utils/helpers'


function Holders({totalDividendsDistributed,dividentTokenPrice}) {
    return (
        <section className="total_bnb">
        <section className="total_bnb_bg"></section>
            <div className="holders flex-center">
            <img src={bnb_logo} alt="bnb logo" />
            <h1 className="title">Total {dividendTokenName} to {TokenName} Holders</h1>
            <h1 className="Bnb"><span>{numberWithCommas(totalDividendsDistributed)|| 0}</span><span>{dividendTokenName}</span></h1>
            <h1 className="Dollar"><span>=</span><span>$</span><span>{
            numberWithCommas(parseFloat(totalDividendsDistributed*dividentTokenPrice).toFixed(0))||0}</span></h1>
            </div>
        </section>
    )
}

export default Holders
