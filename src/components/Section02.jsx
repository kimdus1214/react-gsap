import React,{useEffect, useRef} from "react";
import './css/main.css'
import AOS from "aos";
import { gsap } from 'gsap';

function Section02(){
    const parallax = useRef();
    const mouse = {x: 0, y: 0, moved: false};

    useEffect(()=>{
        AOS.init();
        window.addEventListener("mousemove", yScrollEvent);
        // eslint-disable-next-line
    },[]);


    const yScrollEvent = (e) => {
        let rect = parallax.current.getBoundingClientRect();
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        //console.log(mouse.x);

        gsap.ticker.add(function(){
            if (mouse.moved){    
              parallaxIt(".circle-img", -100);
            }
            mouse.moved = false;
          });
          
          function parallaxIt(target, movement) {
            gsap.to(target, 0.5, {
              x: (mouse.x - rect.width / 2) / rect.width * movement,
              y: (mouse.y - rect.height / 2) / rect.height * movement
            });
          }

        //   window.on('resize scroll', function(){
        //     rect = parallax.current.getBoundingClientRect();
        //   })
    };
    
        

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

            <div className="parallax-wrap" ref={parallax}>
                <div className="circle_img circle-img"></div>
                <div className="circle_big circle-img"></div>
                <div className="circle_small circle-img"></div>
            </div>
        </section>
    );
}

export default Section02;