# react-gsap
### 달콤 사이트를 예시로 gsap구동시켜보기
<br/>

```javascript
import { gsap } from 'gsap';
//gsap import해오기

const parallax = useRef(); //gsap가 구현될 영역
const mouse = {x: 0, y: 0, moved: false}; //마우스 움직임 초기화

useEffect(()=>{
    AOS.init();
    window.addEventListener("mousemove", yScrollEvent);
    // eslint-disable-next-line
},[]);


const yScrollEvent = (e) => {
    let rect = parallax.current.getBoundingClientRect();//gsap가 구현될 영역의 위치알아내기
    mouse.moved = true;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    //clientX: 이벤트가 발생한 애플리케이션 viewport 내에 수평 좌표를 제공(페이지 내의 좌표와는 반대)
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
};
    
```

