import React, { ReactNode } from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<MainLayoutProps> = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Layout;
