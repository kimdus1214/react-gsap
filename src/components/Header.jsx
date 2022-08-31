import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './css/common.css';

function Header(){
    const [hiddenOpen, setHiddenOpen] = useState(false);
    const [ScrollPosition, setScrollPosition] = useState(window.pageYOffset);
    const [Visible, setVisible] = useState(true);
    console.log('ScrollPosition :' + ScrollPosition)

    useEffect(()=>{
        const handleScroll = ()=>{
            let moving = window.pageYOffset
            console.log('moving :' + moving)
            setVisible(ScrollPosition > moving);
            setScrollPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);
        return(()=>{
            window.removeEventListener("scroll", handleScroll);
        })
    })

    // const cls = Visible ? "visible" : "hidden";

    const mouseOver = ()=>{
        setHiddenOpen(true);
    }
    const mouseLeave = ()=>{
        setHiddenOpen(false);
    }

    return (
        <>
            {Visible
                ?<header className={hiddenOpen ? "open visible" : "visible"}>
                    <div className="header-wrap">
                        <h1><Link to="/"><img src={process.env.PUBLIC_URL + './assets/gnb/dalkomm.svg'} alt="dalkomm" /></Link></h1>
                        <ul className="gnb">
                            <li onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
                                <div className="depth-first"><Link to="/">Dal.komm</Link></div>
                                <ul className="depth-second">
                                    <li><Link to="/">브랜드 이야기</Link></li>
                                    <li><Link to="/">App 소개</Link></li>
                                </ul>
                            </li>
                            <li onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
                                <div className="depth-first"><Link to="/">메뉴·매장</Link></div>
                                <ul className="depth-second">
                                    <li><Link to="/">메뉴</Link></li>
                                    <li><Link to="/">매장찾기</Link></li>
                                    <li><Link to="/">글로벌 달콤</Link></li>                        
                                </ul>
                            </li>
                            <li onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
                                <div className="depth-first"><Link to="/">창업안내</Link></div>
                                <ul className="depth-second">
                                    <li><Link to="/">가맹점 개설 안내</Link></li>
                                    <li><Link to="/">창업 상담 신청</Link></li>
                                </ul>
                            </li>
                            <li onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
                                <div className="depth-first"><Link to="/">새로운 소식</Link></div>
                                <ul className="depth-second">
                                    <li><Link to="/">뉴스</Link></li>
                                    <li><Link to="/">공지사항</Link></li>
                                    <li><Link to="/">달콤 스토리</Link></li>                        
                                </ul>
                            </li>
                            <li>
                                <div className="depth-first"><Link to="/">SHOP</Link></div>                    
                            </li>
                        </ul>
                    </div>
                </header>
                :<header className={hiddenOpen ? "open hidden" : "hidden"}>
                <div className="header-wrap">
                    <h1><Link to="/"><img src={process.env.PUBLIC_URL + './assets/gnb/dalkomm.svg'} alt="dalkomm" /></Link></h1>
                    <ul className="gnb">
                        <li onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
                            <div className="depth-first"><Link to="/">Dal.komm</Link></div>
                            <ul className="depth-second">
                                <li><Link to="/">브랜드 이야기</Link></li>
                                <li><Link to="/">App 소개</Link></li>
                            </ul>
                        </li>
                        <li onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
                            <div className="depth-first"><Link to="/">메뉴·매장</Link></div>
                            <ul className="depth-second">
                                <li><Link to="/">메뉴</Link></li>
                                <li><Link to="/">매장찾기</Link></li>
                                <li><Link to="/">글로벌 달콤</Link></li>                        
                            </ul>
                        </li>
                        <li onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
                            <div className="depth-first"><Link to="/">창업안내</Link></div>
                            <ul className="depth-second">
                                <li><Link to="/">가맹점 개설 안내</Link></li>
                                <li><Link to="/">창업 상담 신청</Link></li>
                            </ul>
                        </li>
                        <li onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
                            <div className="depth-first"><Link to="/">새로운 소식</Link></div>
                            <ul className="depth-second">
                                <li><Link to="/">뉴스</Link></li>
                                <li><Link to="/">공지사항</Link></li>
                                <li><Link to="/">달콤 스토리</Link></li>                        
                            </ul>
                        </li>
                        <li>
                            <div className="depth-first"><Link to="/">SHOP</Link></div>                    
                        </li>
                    </ul>
                </div>
            </header>
            }            
        </>
    );
}
export default Header;