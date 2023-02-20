import Footer from "./components/layouts/Footer"
import Header from "./components/layouts/Header"
import Main from "./components/sections/Main"

function App() {
  return (
    <div className="bg-mainBg w-full text-secondaryTxt">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
