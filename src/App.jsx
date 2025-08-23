import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ProjectsPage from "./pages/ProjectsPage.jsx"
import SkillsPage from "./pages/SkillsPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App
