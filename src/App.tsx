import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import {ColorPalette} from "./components/colours"
import { Components } from "./components/components"
import { H1, H2, H3, H4, Paragraph, LargeText, SmallText, LeadText, MutedText, ListText, Quote, Link } from "./components/typography"
function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
    <div className="flex flex-col min-h-screen p-4 max-w-3xl mx-auto">
    <ModeToggle/>
      <div className="min-h-screen flex flex-col space-y-4 max-w-3xl mx-auto pt-4">
        <H1>H1: Hi👋🏽, I'm Benjamin</H1>
        <H2>H2: Product Designer</H2>
        <H3>H3: Building value through simple design</H3> 

        <Paragraph>
          <span>
          I champion hypothesis-driven ways of working; I believe a team that learns together grows together. I continually work with my team to balance the prioritisation of user needs, technical limitations, and business goals.
          </span>
        </Paragraph>
        <LargeText >LargeText: Design Philosophy" </LargeText>
        <SmallText>SmallText: Note: This font weight may be too heavy.</SmallText> 
        <Quote quote="think visually, validate regularly, and pivot when necessary" author="benjamiz"/>
        <LeadText> LeadText: Latest Blog Posts</LeadText>
        <MutedText>MutedText: Stay updated with my latest thoughts on design trends and agile approaches.</MutedText> 
        <Paragraph><span>
          Click here to <Link link="https://medium.com/@benjamin.mizrany">read my medium article.</Link></span></Paragraph>
        <H4>H4: Influencers</H4>
        <ListText items={["ListText:","Marty Cagan", "Teresa Torres", "James Coplien"]} />
      </div>

    <ColorPalette />
    <Components/>
    </div>
    </ThemeProvider>
  )
}

export default App
