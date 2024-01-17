
import { Search, ShoppingBasket, UserRound } from 'lucide-react';
import Mini from './components/Mini/Mini';
import { product } from './data';
import { useState } from 'react';
function App() {

  const [currentView, setCurrentView] = useState(product[0]?.src.length || 0)

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
            <div className="hero__container__contents__left"><Mini item={product[0]?.src} currentView={currentView} /></div>
            <div className="hero__container__contents__mid">baba</div>
            <div className="hero__container__contents__right">saba</div>
          </section>
        </div> 
      </div>
    </div>
  )
}

export default App
