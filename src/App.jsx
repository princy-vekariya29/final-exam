import { Route, Routes } from "react-router"
import Header from "./Componets/Header/Header.jsx"

import Home from "./Componets/Home/Home.jsx"
import AddProduct from "./Componets/ADD Product/AddProduct.jsx"
import EditProduct from "./Componets/Edit Product/Editproduct.jsx"







function App() {


  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/addproduct" element={<AddProduct/>}></Route>
      <Route path="/editproduct/:id" element={<EditProduct/>}></Route>


    </Routes>
     </>
     
  )
}

export default App
