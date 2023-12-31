import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider"
import { ScrollToTop } from "./components/scrollToTheTop";
import { DesignSystem } from "./pages/designSystem";
import { NavBar } from "./components/molicules/navBar";
import {HomePage}  from "./pages/homePage";
import { ExperiencePage } from "./pages/experience";
import { YourDesignArticle } from "./pages/articles";
function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
          <div className="max-w-3xl mx-auto" >
          <NavBar/>
          </div>

    <div className="min-h-screen p-4 max-w-3xl mx-auto" >
    <ScrollToTop/>

    <div className="flex flex-col mt-16">
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/experience" element={<ExperiencePage/>} />
          <Route path="/about" element={"About"} />
          <Route path="/works" element={"works"} />
          <Route path="/designSystem" element={<DesignSystem/>} />
          <Route path="/works/article/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" element={<YourDesignArticle />} />
      </Routes>
    </div>


    </div>
    </ThemeProvider>

  )
}

export default App
