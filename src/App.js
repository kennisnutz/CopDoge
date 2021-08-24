import React, { useState, useEffect } from "react";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Theme, { themes } from "./components/Theme/Theme";
import { IoSettingsOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./Img/copdoge.jpg";
import "./Universal/Universal.css";
import "./components/Nav/nav.css";
import Footer from "./components/Footer/Footer";

import {
  TokenName,
} from "./utils/helpers";

function App() {
  const [menubar, setMenubar] = useState(false);
  const [theme, setTheme] = useState(themes.dark);
  const [address, setAddress] = useState(localStorage.getItem("address") || "");
  const [walletBalance, setWalletBalance] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [payout, setPayout] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalDividendsDistributed, setTotalDividendsDistributed] = useState(0);
  const [ethPrice, setEthPrice] = useState(0);
  const [lastPayoutTime, setLastPayoutTime] = useState(0);
  const [BNBRewardsfee, setBNBRewardsfee] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [dividentTokenPrice, setDividentTokenPrice] = useState(0);
  const handleChange = (event) => setAddress(event.target.value);

  //Menubar
  const MenuBar = () => (menubar ? setMenubar(false) : setMenubar(true));
  const toggleTheme = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  let background = theme.background;
  let text = theme.text;
  let border = theme.border;
  return (
    <Theme.Provider value={theme}>
      {/* Nav Part  */}
      <nav style={{ background: `${background}` }}>
        <div className="container flex-between">
          <div className="logo flex">
            <img src={logo} alt="logo" className="logo_img" />
            <div className="logo_text">{TokenName}</div>
          </div>
          <GiHamburgerMenu
            onClick={MenuBar}
            style={{ color: `${text}` }}
            className="menu"
          />

          <div
            style={{ borderColor: `${border}` }}
            className="address_box flex"
          >
            <FiFileText style={{ color: `${text}` }} className="copy_icon" />
            <input
              style={{ color: `${text}` }}
              placeholder="Paste address here"
              value={address !== "" ? address : ""}
              onChange={handleChange}
              type="text"
            />
          </div>

          <div style={{ color: `${text}` }} className="setting">
            <IoSettingsOutline onClick={toggleTheme} />
          </div>
        </div>
      </nav>
      {/* Nav Part  */}
      <Sidebar menubar={menubar} />
      <Content
        address={address}
        walletBalance={walletBalance}
        tokenBalance={tokenBalance}
        totalPaid={totalPaid}
        totalDividendsDistributed={totalDividendsDistributed}
        ethPrice={ethPrice}
        dividentTokenPrice={dividentTokenPrice}
        lastPayoutTime={lastPayoutTime}
        payout={payout}
        BNBRewardsfee={BNBRewardsfee}
        totalSupply={totalSupply}
      />
      <Footer />
    </Theme.Provider>
  );
}

export default App;
