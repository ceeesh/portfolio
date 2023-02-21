import Header from "./components/layouts/Header"
import Navs from "./components/layouts/Navs"
import Main from "./components/sections/Main"

function App() {
  
  return (
    <div className="bg-mainBg w-full text-secondaryTxt">
      <Header />
      <Main />
       <Navs/>
    </div>
  )
}

export default App
