import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import { Container } from "../../components/container"

interface AccordionModalsProps {
    header: React.ReactNode;
    content: React.ReactNode;
    delay?: number;
    animateFromEnd?: boolean;
}
export function AccordionModals({header,delay=0,content,animateFromEnd=false}:AccordionModalsProps) {
    return (
    <>
      <Container variant="solid" delay={delay} animateFromEnd={animateFromEnd}>
        <Accordion type="single" collapsible className="flex grow">
          <AccordionItem value="item-1" >

            <AccordionTrigger className="p-0 pb-1">
                {header}
            </AccordionTrigger>

            <AccordionContent>
                {content}
            </AccordionContent>

          </AccordionItem>
        </Accordion>
      </Container>
    </>
    )
}