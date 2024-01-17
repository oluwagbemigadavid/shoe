
import { Search, ShoppingBasket, UserRound } from 'lucide-react';
import Mini from './components/Mini/Mini';
import { product } from './data';
import { useEffect, useState } from 'react';


const VerticalText = ({ text, onClick }) => {
  return (
    <div className="vertical-text" onClick={() => onClick()}>
      {text.split('').reverse().map((letter, index) => (
        <p key={index}>{letter}</p>
      ))}
    </div>
  );
};

function App() {

  const [currentView, setCurrentView] = useState(0)


  const changeView = (val) => {
    setCurrentView(val)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentView((prevView) => (prevView === product[0].src.length - 1 ? 0 : prevView + 1));
      console.log(currentView)
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentView]);


  return (
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
            <div className="hero__container__contents__mid">baba</div>
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
  )
}

export default App
