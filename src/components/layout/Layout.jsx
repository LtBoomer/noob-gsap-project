import { useEffect, useState } from "react";
import Header from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const Layout = (props) => {
  const { children } = props;
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  return (
    <>
      {deviceWidth >= 500 ? <Header /> : <MobileMenu />}
      <div style={{ zIndex: 0 }}>{children}</div>
    </>
  );
};

export default Layout;
