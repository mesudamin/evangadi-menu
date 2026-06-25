import  "./commonResource/style.css"
import Header from "./Components/Header/Header.jsx"
import MenuF from "./Components/MenuF/MenuF.jsx"
import MenuS from "./Components/MenuS/MenuS.jsx"
import MenuTH from "./Components/MenuTH/MenuTH.jsx"
function App() {
  

  return (
    <>
     <div class="all-container">
       <Header/>
       <div class="foods-container">
  
   <MenuF/> 
   <MenuS/> 
   <MenuTH/>
   </div>
   </div>
    </>
  )
}

export default App
