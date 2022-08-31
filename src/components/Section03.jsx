import React,{useEffect} from "react";
import './css/main.css'
import AOS from "aos";

function Section03(){

    useEffect(()=>{
        AOS.init();
    },[]);

    return(
        <section className="section03">
            <div className="section03__text">
                <h1 data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-out-cubic">달콤이 선사하는 다채로운 경험</h1>
                <p data-aos="fade-up" data-aos-delay="130" data-aos-easing="ease-out-cubic">
                    커피의 본질적인 것을 통한 커피의 전문성을 부각 시키는 컨텐츠와 함께 <br/>
                    비쥬얼, 맛, 건강함, 그리고 마시는 재미까지 함께 선사합니다.
                </p>
            </div>
            <div className="section03__menu-img" data-aos="fade-up" data-aos-delay="160" data-aos-easing="ease-out-cubic"></div>
        </section>
    );
}

export default Section03;