/* eslint-disable react/prop-types */

import { Search, ShoppingBasket, UserRound, PlayCircle } from 'lucide-react';
import Mini from './components/Mini/Mini';
import { product } from './data';
import { useEffect, useState, Suspense, useRef, useLayoutEffect } from 'react';
import SplitType from 'split-type'
import gsap from 'gsap';


const VerticalText = ({ text, onClick }) => {
  return (
    <div className="vertical-text" onClick={() => onClick()}>
      {text.split('').reverse().map((letter, index) => (
        <p key={index}>{letter}</p>
      ))}
    </div>
  );
};
const Loading = () => {
  return (
    <h1> Loading ....</h1>
  )
}

function App() {

  const [currentView, setCurrentView] = useState(0)
  const carousel = useRef(null)
  const textRef = useRef(null)
  const [currentPercentage, setCurrentPercentage] = useState(0)


  const changeView = (val) => {
    setCurrentView(val)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentView((prevView) => (prevView === product[0].src.length - 1 ? 0 : prevView + 1));
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentView]);
  
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.product-desc')
    splitTypes.forEach((char, i) => {
     const text = new SplitType(char, {types: 'chars, words'})
     
     gsap.from(text.chars, {
       scrollTrigger: {
         trigger: char,
         start: 'top 100%',
         end: 'bottom 100%',
         scrub: false,
         once: true
       },
       stagger: 0.02,
       opacity: 0,
       duration: .1,
       ease: 'power2.out'
     })
    })

    const underlay = document.querySelectorAll('.underlay')
    underlay.forEach((char, i) => {
     const text = new SplitType(char, {types: 'chars'})
     
     gsap.from(text.chars, {
       scrollTrigger: {
         trigger: char,
         start: 'top 100%',
         end: 'bottom 100%',
         scrub: false,
         once: true
       },
       stagger: 0.02,
       width: 0,
       scale: 0,
       duration: 3,
     })
    })
  }, [product])
  


  console.log(currentPercentage)
  useLayoutEffect(() => {
    if(window.innerWidth > 700) {
        const section = document.querySelector('.hero__container')
    
        const Transform = () => {
          const offsetTop = section?.parentElement.offsetTop;
          const scrollSection = section?.querySelector('.carousel');
          let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
          const val = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
          setCurrentPercentage(val)
          scrollSection.style.transform =`translate3d(${-(val)}vw, 0, 0)`
        }
        window.addEventListener('scroll', Transform);
    
        return () => {
          window.removeEventListener('scroll', Transform);
        };
    }
  }, []);

  return (
    <Suspense fallback={<Loading />}>

    <div>
      <div className="hero">
        <div className="hero__container">

          <div className="hero__container__lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <section className="hero__container__top">
            <div className="hero__container__top__logo">zainoo&trade;</div>
            <div className="hero__container__top__icons">
               <Search />
               <ShoppingBasket />
               <UserRound />
            </div>
          </section>

          <section className="hero__container__contents">
            <div className="hero__container__contents__left">
              <Mini item={product[0]?.src} currentView={currentView} onChange={changeView} />
              <div className="extra-care">
                <div className="extra-care__text">
                  <p>Extra <br /> Care</p>
                  <p>Foot <br /> Tech</p>
                </div>

                <div className="extra-care__learn">
                  <span></span>
                  <p>learn more</p>
                </div>

                <h5>Scroll down</h5>
              </div>
              </div>

            <div className="hero__container__contents__mid">

              <div className="product">
                <div className="product__text">
                  <h5>{product[0].shortDesc}</h5>
                  <h1>{product[0].name}<sup> &reg;</sup></h1>
                  <p ref={textRef} className='product-desc'>{product[0].desc}</p>
                </div>
                <div className="product__cta">
                  <button><ShoppingBasket /> Add to cart</button>
                  <button><PlayCircle /> Watch intro</button>
                </div>
              </div>

              <div className="underlay">
                <p>{product[0].underlay}</p>
              </div>

              <div className="carousel variation-1" ref={carousel}>
                {product[0].src.map((src, i) => (
                  <div className="image-container"  key={i + '-img'} >
                    <img src={src.src} alt={`img-${i}`} className={`image img-${src.className}`} />
                  </div>
                ))}
              </div>

              <div className="tracker">
                0{currentView + 1 } / 0{product[0].src.length}
              </div>
            </div>

            <div className="hero__container__contents__right">
              <div className="hero__container__contents__right__top">
                <VerticalText text='team' />
                <VerticalText text='packaging' />
                <VerticalText text='manufacturing' />
              </div>
              <div className="hero__container__contents__right__bottom">
                <a href="">in</a>
                <a href="">tw</a>
                <a href="">fb</a>
              </div>
            </div>
          </section>
        </div> 
      </div>
    </div>
    </Suspense>
  )
}

export default App
