import { ReactElement, useEffect } from "react";
import NavBar from "./nav-bar";
import { useTranslation } from "react-i18next";
import Footer from "./footer";

interface LayoutProps {
    children: ReactElement;
}
function Layout({ children }: LayoutProps) {
    // const { i18n } = useTranslation();
    // useEffect(() => {
    //     i18n.changeLanguage(localStorage.getItem("language") || "en");
    // }, [i18n]);

    return (
        <div dir={"ltr"} className=" bg-homeBackground bg-cover bg-no-repeat w-full h-screen">
            <NavBar />
            {children}
            <Footer />

        </div>
    );
}

export default Layout;