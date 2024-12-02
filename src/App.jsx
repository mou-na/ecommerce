import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "use-shopping-cart";

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Menu from './components/Menu';
import Listearticle from './components/articles/Listearticle';
import Insertarticle from './components/articles/Insertarticle';
import Editarticle from './components/articles/Editarticle';
import Viewarticle from './components/articles/Viewarticle';

import Listcategorie from './components/categories/Listcategorie';
import Insertcategorie from './components/categories/Insertcategorie';
import Editcategorie from './components/categories/Editcategorie';
import Viewcategorie from './components/categories/Viewcategorie';

import Listescategorie from './components/scategories/Listescategorie';
import Insertscategorie from './components/scategories/Insertscategorie';
import Editscategorie from './components/scategories/Editscategorie';
import Viewscategorie from './components/scategories/Viewscategorie';

import Listarticlescard from './components/client/Listarticlescard';
import Cart from './components/client/Cart';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" element={<Listearticle/>}/>
        <Route path="/articles/add" element={<Insertarticle/>}/>
        <Route path="/articles/edit/:id" element={<Editarticle/>}/>
        <Route path="/articles/view/:id" element={<Viewarticle/>}/>

        <Route path="/categories" element={<Listcategorie/>}/>
        <Route path="/categorie/add" element={<Insertcategorie/>}/>
        <Route path="/categorie/edit/:id" element={<Editcategorie/>}/>
        <Route path="/categorie/view/:id" element={<Viewcategorie/>}/>

        <Route path="/scategorie" element={<Listescategorie/>}/>
        <Route path="/scategorie/add" element={<Insertscategorie/>}/>
        <Route path="/scategorie/edit/:id" element={<Editscategorie/>}/>
        <Route path="/scategorie/view/:id" element={<Viewscategorie/>}/>

        <Route path="/client" element={<Listarticlescard/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App
