import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import {ColorPalette} from "./components/colours"
import { Components } from "./components/components"
import { H1, H2, H3, H4, Paragraph, LargeText, SmallText, LeadText, MutedText, ListText, Quote, Link } from "./components/typography"
function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
    <div className="flex flex-col min-h-screen p-4 max-w-3xl mx-auto">
    <ModeToggle />
      <div className="min-h-screen flex flex-col space-y-4 max-w-3xl mx-auto">
        <H1>H1: John Doe - Product Designer</H1>
        <H2>H2: Creating Impactful User Experiences</H2>
        <H3>H3: Featured Projects</H3> 
        <H4>H4: UI/UX Design for a Fintech Startup</H4>
        <Paragraph>
          <span>
          Paragraph: As a product designer with over 5 years of experience, <Link link="www.benjamiz.com">I create user interfaces</Link> that specialise in creating intuitive "and engaging user interfaces. My approach is user-centered, ensuring that the end product not only looks great but also provides a seamless user experience.
          </span>
        </Paragraph>
        <LargeText >LargeText: Design Philosophy" </LargeText>
        <SmallText>text="SmallText: Note: some of this text is fake.</SmallText> 
        <Quote quote="Simplicity is the ultimate sophistication" author="Leonardo da Vinci"/>
        <LeadText> LeadText: Latest Blog Posts</LeadText>
        <MutedText>MutedText: Stay updated with my latest thoughts on design trends and technologies.</MutedText> 
        <ListText items={["ListText:","5 Essential Design Tools for 2023", "The Future of User Interface Design", "How to Conduct Effective User Research"]} />
      </div>

    <ColorPalette />
    <Components/>
    </div>
    </ThemeProvider>
  )
}

export default App
