import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <main>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/about">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="/contacts">
                  Contactos
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/productos' element={<Products />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </main>
        <footer>
          <ul>
            <li>Agustin Gonzalez</li>
          </ul>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;