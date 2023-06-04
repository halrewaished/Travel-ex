import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { VscAccount } from "react-icons/vsc";


import { useState } from "react";
import { appRoutesObj } from "src/app.paths";
import { NavLink } from "react-router-dom";

interface IRoutes {
    routeTitle: string,
    pageRoute: string,
}
const routes: IRoutes[] = [
    {
        routeTitle: "nav.bar.home.page",
        pageRoute: appRoutesObj.getBasePath()
    },
    {
        routeTitle: "nav.bar.discover.page"
        ,
        pageRoute: appRoutesObj.getDiscoverPagePath()
    },
    {
        routeTitle: "nav.bar.photo.page"
        ,
        pageRoute: appRoutesObj.getPhotoPagePath()
    },
    {
        routeTitle: "nav.bar.contact.page"
        ,
        pageRoute: appRoutesObj.getContactPagePath()
    },
]
function NavBar() {
    const [open, setOpen] = useState<Boolean>(false)

    const { t } = useTranslation();
    return (
        <div className="flex justify-start items-start pt-[10px] sm:pt-3 sm:pb-3 sm:pl-3 shadow-md">
            <div className={`flex sm:flex-col sm:h-screen sm:bg-whiteColor sm:w-1/2 h-[72px] w-[1120px] items-center justify-between sm:justify-start sm:items-start sm:pt-[30px] ${open ? '' : 'sm:hidden'} sm:fixed z-20`}>
                <div className="flex justify-end items-end w-full 2xl:hidden xl:hidden lg:hidden md:hidden ">
                    <AiOutlineClose onClick={() => setOpen(false)} className="text-[30px] text-blackColor" />
                </div>
                <div className="flex justify-center items-center gap-[20px] sm:flex-col">
                    <div className="flex">
                        <img src="/assets/images/ic_baseline-mode-of-travel.png" alt="" />
                        <p className="text-orangeColor font-subTitle pt-[10px] pl-[20px]"> loremtravel.com </p>
                    </div>
                    <nav className="flex gap-[29px] sm:flex-col">
                        {
                            routes.map((items, index) => {
                                return <NavLink className={({ isActive }) => (isActive ? " text-orang" : "text-blackColor")} key={index} to={items.pageRoute}>
                                    <h4> {t(items.routeTitle)}</h4>
                                </NavLink>
                            })
                        }
                    </nav>
                </div>
                <div className="flex w-[490px] h-[32px] sm:pl-14 sm:pt-6">
                    <VscAccount size={25} />
                </div>
            </div>
            {
                open ? <div></div>
                    :
                    <GiHamburgerMenu onClick={() => setOpen(true)} className="text-[30px] text-black 2xl:hidden xl:hidden lg:hidden md:hidden" />
            }
        </div>
    );
}

export default NavBar;