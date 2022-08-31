import React,{useEffect} from "react";
import './css/main.css'
import AOS from "aos";

function Section04(){
    useEffect(()=>{
        AOS.init();
    },[]);

    return(
        <section className="section04">
            <div className="section04__text">
                <h1 data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-out-cubic">새로워진 달콤을 만나보세요</h1>
                <p data-aos="fade-up" data-aos-delay="130" data-aos-easing="ease-out-cubic">
                    앱을 사용하는 고객님을 위한 달콤한 혜택이 준비되어 있습니다.
                </p>
            </div>
            <div className="section04__appShow">
                <ul>
                    <li data-aos="fade-right" data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + './assets/main/object_01.png'} alt="object_01" />
                    </li>
                    <li data-aos="fade-right" data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + './assets/main/object_02.png'} alt="object_02" />
                    </li>
                    <li data-aos="fade-right" data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + './assets/main/object_03.png'} alt="object_03" />
                    </li>
                    <li data-aos="fade-right" data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + './assets/main/object_04.png'} alt="object_04" />
                    </li>
                    <li data-aos="fade-left" data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + './assets/main/object_05.png'} alt="object_05" />
                    </li>
                    <li data-aos="fade-left" data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + './assets/main/object_06.png'} alt="object_06" />
                    </li>
                    <li data-aos="fade-left" data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + './assets/main/object_07.png'} alt="object_07" />
                    </li>
                    <li data-aos="fade-left" data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + './assets/main/object_08.png'} alt="object_08" />
                    </li>
                </ul>
                <div className="app-img">
                    <img src={process.env.PUBLIC_URL + './assets/main/object_phone_01.gif'} alt="object_phone_01" />
                </div>
            </div>
        </section>
    );
}

export default Section04;