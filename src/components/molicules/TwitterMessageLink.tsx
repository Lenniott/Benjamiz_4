import { Button } from "../ui/button";
import { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa6";
import { Container } from "../container";
import { Block } from "./blocks";
const TwitterMessageForm = () => {
    const [message, setMessage] = useState('');

    const openTwitterMessage = () => {
        const formattedMessage = encodeURIComponent(message);
        const twitterUrl = `https://twitter.com/messages/compose?recipient_id=1584832601503711232&text=${formattedMessage}`;
        window.open(twitterUrl, '_blank');
    };

    return (
      <div className="flex flex-col gap-4">
      <hr className="my-8 stroke-card-border"/>
      <Container horizontal={false} variant="linear" className="flex flex-col space-y-6">
            <h2 className="h5 font-light text-muted-foreground whitespace-normal">
               Get in touch
            </h2>
            <div className="flex flex-col space-y-2">
            <label className="text-sm text-muted-foreground">Message</label>
            <textarea
                className="border-2 border-card-border rounded-md p-2 text-foreground dark:placeholder:text-muted dark:text-black bg-white dark:bg-muted-foreground"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
            ></textarea>
            </div>
            <Button variant="default"
                className="flex gap-2 w-fit"
                onClick={openTwitterMessage}
                type="button" // Ensure this is explicitly set to avoid form submission behavior
            >
              <FaPaperPlane />
                Send via Twitter
            </Button>
        </Container>
            <div className="flex gap-4">
            <Block 
                    delay={0.3} 
                    icon='medium'/>
                <Block 
                    delay={0.4}
                    icon='linkedin'/>
                <Block 
                    delay={0.5} 
                    icon='twitter'/>
                <Block 
                    delay={0.6} 
                    icon='github'/>
            </div>





    </div>
    );
};

export default TwitterMessageForm;
