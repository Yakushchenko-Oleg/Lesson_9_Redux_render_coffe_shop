// import React from 'react';
import { CiSearch, CiSliderHorizontal } from "react-icons/ci";
import "./App.scss";
import { useSelector } from "react-redux";
import { NavLink, Route, Routes } from 'react-router-dom';
import AllCofe from "./pages/AllCofe";
import Machiato from './pages/Machiato';
import Late from "./pages/Late";
import Americano from "./pages/Americano";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const products = useSelector(state => state.data)
  // console.log(products);
  return (
    <>
      <div className="page-mobile">
          <header className='header'>
              <div className='header__info'>
                  <span>Hello 🖐</span>
                  <h2>John Done</h2>
              </div>

              <div className='header__search'>
                  <div className='search'>
                    <input type="text" placeholder="Search coffee" className='search__input'/>
                    <CiSearch className='search__icon'/>
                  </div>

                  <button className='btn'><CiSliderHorizontal  className='btn-icon'/></button>
              </div>

              <div className="banner">
                  <img src="./images/banner.png" alt="" className='banner__image'/>
              </div>
          </header>

          <main className='content'>
              <div className="menu">
                <ul className="tab">
                  <li><NavLink to="/" className='tab__item tab__item-active'>All Coffee</NavLink></li>
                  <li><NavLink to="/machiato" className='tab__item'>Machiato</NavLink></li>
                  <li><NavLink to="/latte" className='tab__item'>Latte</NavLink></li>
                  <li><NavLink to="/americano" className='tab__item'>Americano</NavLink></li>
                </ul>
              </div>

              <div className="products">
                <Routes>
                  <Route path="/" element={<AllCofe products={products}/>}/>
                  <Route path="/machiato" element={<Machiato products={products}/>}/>
                  <Route path="/latte" element={<Late products={products}/>}/>
                  <Route path="/americano" element={<Americano products={products}/>}/>
                  <Route path="*" element={<ErrorPage/>}/>
                </Routes>
              </div>
          </main>
      </div>
    </>
  )
}

export default App


// Создайте отдельный reducer для tab, далее выводите их на главной странице, попробуйте реализовать переключение по табам.
              
// All Coffee              
// Machiato              
// Latte              
// Americano

// Для этого нужно подключить React Router.

