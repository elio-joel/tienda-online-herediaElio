import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailsContainer from "./pages/ItemDetailsContainer/ItemDetailsContainer";
import RedesS from "./pages/RedesS/RedesS";


function App() {
  return (
   <BrowserRouter>
      <NavBar />
      <Routes>
         <Route path="/" element={<ItemListContainer />} />
         <Route path="*" element={
            <div>
               <h1>Esta pagina no existe</h1>
            </div>}/>
         <Route path="/category/:categoryId" element={<ItemListContainer />} />  
         <Route path="/item/:id" element={<ItemDetailsContainer />} />
         <Route path="/contacto" element={<RedesS/>} />

   </Routes>
   </BrowserRouter>
   );
}

export default App;
