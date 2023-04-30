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
    <>
      <BrowserRouter>
        <div className='body'>
          <main>
            <nav>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link to="/" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    Inicio
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/productos" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    Productos
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    Acerca de
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contacts" class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
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
    </>
  );
}

export default App;