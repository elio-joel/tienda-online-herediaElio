import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailsContainer from "./pages/ItemDetailsContainer/ItemDetailsContainer";
import RedesS from "./pages/RedesS/RedesS";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
   return (
      <BrowserRouter>
         <CartProvider>
            <NavBar />
            <Routes>
               <Route path="/" element={<ItemListContainer />} />
               <Route path="*" element={
                  <div>
                     <h1>Esta pagina no existe</h1>
                  </div>} />
               <Route path="/category/:categoryId" element={<ItemListContainer />} />
               <Route path="/item/:id" element={<ItemDetailsContainer />} />
               <Route path="/contacto" element={<RedesS />} />
               <Route path="/cart" element={<Cart />} />

            </Routes>
         </CartProvider>
      </BrowserRouter>
   );
}

export default App;
