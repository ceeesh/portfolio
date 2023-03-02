import { Route, Routes } from "react-router-dom"
import Header from "./components/layouts/Header"
import Navs from "./components/layouts/Navs"
import Main from "./components/sections/Main"
import AboutPage from "./pages/AboutPage"
import SkillsPage from "./pages/SkillsPage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"
import SubFooter from './components/sections/SubFooter'
import { useThemeMode } from 'react-theme-mode'

function App() {

  const [theme] = useThemeMode()

  return (
    <div className={` w-full ${theme === 'dark' ? `bg-mainBg text-secondaryTxt` : `bg-white text-gray-500`}`}>
        <Header>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Header>
        <Navs />
        <SubFooter />
    </div>
  )
}

export default App
