import styled from "styled-components";
import React, {useState} from "react";

import LogoLight from "../images/글씨 (검정).png";
import LogoDark from "../images/글씨 (라이트그레이).png";
import SunLight from "../images/sun_colored.png";
import SunDark from "../images/sun_white.png";
import MoonLight from "../images/moon.png";
import MoonDark from "../images/moon_colored_white.png";
import MenuLight from "../images/menu_dark.png";
import MenuDark from "../images/menu_light.png"
import MenuCloseLight from "../images/close 1.png";
import MenuCloseDark from "../images/close 2.png"


const TopBarContainer = styled.div`
    width: 100%;
    //max-width: 1920px;
    height: 80px;
    padding: 0 1vw;
    background: ${({ darkMode }) => (darkMode ? "#000" : "#F0F0F0")};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`

const LogoImg = styled.img`
    width: 65px;
    aspect-ratio: 1 / 1;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`

const BgChangeBtn = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`

export const ToggleImg = styled.img`
    width: 30px;
    aspect-ratio: 1 / 1;
`

const MenuImg = styled.img`
    width: 45px;
`

const TopBar = ({darkMode, setDarkMode}) => {
    const [activeIcon, setActiveIcon] = useState(null);
    const toggleDarkMode = () => {
        if (!darkMode) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    };

    const toggleLightMode = () => {
        if (darkMode) {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    };

    const handleIconClick = (icon) => {
        if (activeIcon !== icon) {
            setActiveIcon(icon);
        }
    };

    return (
        <TopBarContainer darkMode={darkMode}>
            <LogoImg src={darkMode ? LogoDark : LogoLight} />
            <Right>
                <BgChangeBtn>
                    <ToggleImg
                        src={darkMode ? SunDark : SunLight}
                        onClick={darkMode ? toggleLightMode : null}
                    />
                    <ToggleImg
                        src={darkMode ? MoonDark : MoonLight}
                        onClick={!darkMode ? toggleDarkMode : null}
                    />
                </BgChangeBtn>
                <MenuImg
                    src={darkMode ? (activeIcon === "menu" ? MenuCloseDark : MenuDark) : (activeIcon === "menu" ? MenuCloseLight : MenuLight)}
                    onClick={() => handleIconClick("menu")}
                />
            </Right>
        </TopBarContainer>
    );
}

export default TopBar;