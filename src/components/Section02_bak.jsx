import React,{useEffect} from "react";
import AOS from "aos";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

function Section02(){
    useEffect(()=>{
        AOS.init();
    });

    return(
        <section className="section02">
            <div className="sub-inner" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-out-cubic">
                <span>달콤, 상상이 일상이 되는 곳</span>
                <h1>
                    Dal.Komm Life begins <br/>
                    with imagination
                </h1>
                <p>
                    가장 트랜디한 커피전문점, <br/>
                    그리고 다양한 음악과 문화를 소비하는 플랫폼으로서 맛과 식의 경험을 넘어 향유할 수 있는 공간이 되어 <br/>
                    여러분의 달콤한 상상, 행복한 상상을 응원하겠습니다.
                </p>
            </div>

            <MouseParallaxContainer className="parallax" containerStyles={{width: "100%",height:"100%",position:"absolute", top:0}} resetOnLeave>
                <MouseParallaxChild factorX={0.03} factorY={0.1} updateStyles={{width:"419px", height: "424px", position: "absolute", top: "-260px", right: "-142px"}}>
                   <img src={process.env.PUBLIC_URL + '/assets/main/circle_img.png'} alt="" className="circle_img circle-img"/>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.05} factorY={0.05} updateStyles={{width:"293px", height: "325px", position: "absolute", bottom: "90px", left: "-77px"}}>
                    <img src={process.env.PUBLIC_URL + '/assets/main/circle_big.svg'} alt="" className="circle_big circle-img"/>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.07} factorY={0.05} updateStyles={{width:"77px", height: "61px", position: "absolute", bottom: "114px", left: "216px"}}>
                    <img src={process.env.PUBLIC_URL + '/assets/main/circle_small.svg'} alt="" className="circle_small circle-img"/>
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </section>
    );
}

export default Section02;