import Button from "../button/Button.jsx";
import MenuDrawer from "../menu-drawer/MenuDrawer";
import { COMPANY, FEATURES } from "../header/menuData.jsx";
import MenuItem from "./menu-item/MenuItem";
import NavMenu from "./nav-menu/NavMenu";
import { useState } from "react";

export default function Menu() {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <nav className="hidden xl:flex gap-6 ml-8 items-center">
                <MenuItem text="Feature" selected={selected} setSelected={setSelected}>
                    <NavMenu items={FEATURES} />
                </MenuItem>
                <MenuItem text="Company" selected={selected} setSelected={setSelected}>
                    <NavMenu items={COMPANY} />
                </MenuItem>
                <MenuItem text="Careers" selected={selected} setSelected={setSelected}/>
                <MenuItem text="About" selected={selected} setSelected={setSelected}/>
            </nav>
            <div className="hidden xl:flex ml-auto gap-5">
                <Button>Loggin</Button>
                <Button hasBorder={true}>Register</Button>
            </div>
            <MenuDrawer />
        </>
    )
}