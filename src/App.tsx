import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider"
import { ScrollToTop } from "./components/scrollToTheTop";
import { DesignSystem } from "./pages/designSystem";
import { Bar } from "./components/molicules/Bar";
import {HomePage}  from "./pages/homePage";
import { ExperiencePage } from "./pages/experience";
import { YourDesignArticle, BicycleExercise } from "./pages/articles";
import { CaseStudyOne } from "./pages/caseStudies/caseStudyOne";
import { WorksPage } from "./pages/WorksPage";
import { AboutMePage } from "./pages/aboutMe";
function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
    <div className="max-w-3xl mx-auto" >
        <Bar position="top"/>
    </div>

    <div className="min-h-screen p-4 max-w-3xl mx-auto" >
    <ScrollToTop/>

    <div className="flex flex-col items-center justify-center my-12">
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/experience" element={<ExperiencePage/>} />
          <Route path="/about" element={<AboutMePage/>} />
          <Route path="/works" element={<WorksPage/>} />
          <Route path="/designSystem" element={<DesignSystem/>} />
          <Route path="/works/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" element={<YourDesignArticle />} />
          <Route path="/works/bicycle-exercise" element={<BicycleExercise />} />
          <Route path="/cs1" element={<CaseStudyOne/>} />
      </Routes>
    </div>

    <Bar position="bottom"/>

    </div>
    </ThemeProvider>

  )
}

export default App
