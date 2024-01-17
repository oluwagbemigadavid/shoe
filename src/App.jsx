
import { Search, ShoppingBasket, UserRound } from 'lucide-react';
function App() {
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
        </div> 
      </div>
    </div>
  )
}

export default App
