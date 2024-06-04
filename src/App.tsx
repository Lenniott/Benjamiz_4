import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider"
import { ScrollToTop } from "./components/scrollToTheTop";
import { NewNav } from "./components/molicules/NewNav";
import {HomePage}  from "./pages/homePage";
import { ExperiencePage } from "./pages/experience";
import { YourDesignArticle, BicycleExercise } from "./pages/articles";
import { CaseStudyOne } from "./pages/caseStudies/caseStudyOne";
import { WorksPage } from "./pages/WorksPage";
import { AboutMePage } from "./pages/aboutMe";
import { SnippetsPage } from "./pages/SnippetsPage";
import TimeLine from "./pages/snippets/TimeLine";
import BodySelector from "./pages/snippets/bodySelector";
import Slider from "./pages/snippets/slider";
import TwitterMessageLink from "../src/components/molicules/TwitterMessageLink";
function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
    <div className="sm:max-w-3xl mx-auto" >
        <NewNav/>
    </div>

    <div className="min-h-screen p-4 max-w-sm sm:max-w-3xl mx-auto  mb-16 sm:mt-16" >
    <ScrollToTop/>

    <div className="flex flex-col items-center justify-center gap-4">
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/experience" element={<ExperiencePage/>} />
          <Route path="/about" element={<AboutMePage/>} />
          <Route path="/works" element={<WorksPage/>} />

          <Route path="/snippets" element={<SnippetsPage/>} />
          <Route path="/snippets/slider" element={<Slider/>} />
          <Route path="/snippets/timeline" element={<TimeLine/>} />
          <Route path="/snippets/body-selector" element={<BodySelector/>} />

          <Route path="/cs1" element={<CaseStudyOne/>} />

          <Route path="/works" element={<WorksPage/>} />
          <Route path="/works/your-designs-are-only-as-good-as-your-organisation-s-ability-to-problem-solve" element={<YourDesignArticle />} />
          <Route path="/works/bicycle-exercise" element={<BicycleExercise />} />
          <Route path="/cs1" element={<CaseStudyOne/>} />

      </Routes>
    </div>

    
    <div><TwitterMessageLink/></div>
    </div>
    </ThemeProvider>

  )
}

export default App
