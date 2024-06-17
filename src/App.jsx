import Header from "./Componentes/Header/Header";
import { Outlet } from "react-router-dom"
import Carrosel  from "./Componentes/Carrosel/Carrosel";

function App() {
  return (
    <>

      <Header/>
      <Carrosel/>
      <Outlet/>
    </>
  )
}
export default App;