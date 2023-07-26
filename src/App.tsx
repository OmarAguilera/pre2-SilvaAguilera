import {NavBar} from "./components/NavBar"
import {ItemListContainer} from "./components/ItemListContainer"
import {ItemDetailContainer} from "./components/ItemDetailContainer"
import {Profile} from "./components/Profile"
import { BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <h1>SweetSite</h1>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer greeting="Empieza a comprar 😉"/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
