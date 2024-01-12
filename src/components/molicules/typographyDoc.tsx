import { H1, H2, H3, H4, Paragraph, LargeText, SmallText, LeadText, MutedText, Quote, Link } from "../typography";
export function Typography() {


  return (

      <div>
        <H1>H1: Hi👋🏽, I'm Benjamin</H1>
        <H2>H2: Product Designer</H2>
        <H3>H3: Building value through simple design</H3> 
        <div>
        <H4>H4: Bio</H4>
        <Paragraph>
          I champion hypothesis-driven ways of working; I believe a team that learns together grows together. I continually work with my team to balance the prioritisation of user needs, technical limitations, and business goals.
        </Paragraph>
        </div>
        <LargeText >LargeText: Design Philosophy" </LargeText>
        <SmallText>SmallText: Note: This font weight may be too heavy.</SmallText> 
        <Quote quote="think visually, validate regularly, and pivot when necessary" author="benjamiz"/>
        <LeadText> LeadText: Latest Blog Posts</LeadText>
        <MutedText>MutedText: Stay updated with my latest thoughts on design trends and agile approaches.</MutedText> 
        <Paragraph><span>
          Click here to <Link to="https://medium.com/@benjamin.mizrany">read my medium article.</Link></span></Paragraph>
        
        {/* <ListText isOrdered={false} items={["ListText:","Marty Cagan", "Teresa Torres", "James Coplien"]} /> */}
      </div>
  )
}


