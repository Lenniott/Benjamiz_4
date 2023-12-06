import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import {ColorPalette} from "./components/colours"
import { H1, H2, H3, H4, Paragraph, LargeText, SmallText, LeadText, MutedText, ListText } from "./components/typography"
function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ModeToggle />
      <div className="min-h-screen flex flex-col space-y-4 max-w-3xl mx-auto">
        <H1 text="John Doe - Product Designer" />
        <H2 text="Creating Impactful User Experiences" />
        <H3 text="Featured Projects" />
        <H4 text="UI/UX Design for a Fintech Startup" />
        <Paragraph text="As a product designer with over 5 years of experience, I specialise in creating intuitive and engaging user interfaces. My approach is user-centered, ensuring that the end product not only looks great but also provides a seamless user experience." />
        <LargeText text="Design Philosophy" />
        <SmallText text="“Simplicity is the ultimate sophistication.” - Leonardo da Vinci" />
        <LeadText text="Latest Blog Posts" />
        <MutedText text="Stay updated with my latest thoughts on design trends and technologies." />
        <ListText items={["5 Essential Design Tools for 2023", "The Future of User Interface Design", "How to Conduct Effective User Research"]} />
      </div>

    <ColorPalette />
    </ThemeProvider>
  )
}

export default App
