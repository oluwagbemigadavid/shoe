/* eslint-disable react/prop-types */

import { Search, ShoppingBasket, UserRound, PlayCircle } from 'lucide-react';
import Mini from './components/Mini/Mini';
import { product } from './data';
import { useEffect, useState, Suspense, useRef } from 'react';


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


  const changeView = (val) => {
    setCurrentView(val)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentView((prevView) => (prevView === product[0].src.length - 1 ? 0 : prevView + 1));
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentView]);



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
                  <p>{product[0].desc}</p>
                </div>
                <div className="product__cta">
                  <button><ShoppingBasket /> Add to cart</button>
                  <button><PlayCircle /> Watch intro</button>
                </div>
              </div>

              <div className="underlay">
                {product[0].underlay}
              </div>

              <div className="carousel variation-1" ref={carousel}>
                {product[0].src.map((src, i) => (
                  <img src={src.src} alt={`img-${i}`} key={i + '-img'} className={`image img-${src.className}`} />
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
