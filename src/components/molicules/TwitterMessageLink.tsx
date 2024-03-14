import { Button } from "../ui/button";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { Container } from "../container";
import { Block } from "./blocks";
import { motion } from "framer-motion";
const TwitterMessageForm = () => {
    const [message, setMessage] = useState('');

    const openTwitterMessage = () => {
        const formattedMessage = encodeURIComponent(message);
        const twitterUrl = `https://twitter.com/messages/compose?recipient_id=1584832601503711232&text=${formattedMessage}`;
        window.open(twitterUrl, '_blank');
    };

    

    return (
      <div className="flex flex-col gap-4">
      <hr className="mt-8 mb-12 stroke-card-border"/>
      <Container horizontal={false} variant="solid" className="flex flex-col space-y-6">
            <h2 className="h4 whitespace-normal">
               Get in touch
            </h2>
            <div className="flex flex-col space-y-2">
            <label className="text-sm text-muted-foreground">Message</label>
            <textarea
                className="border-2 border-card-border rounded-md p-2 text-foreground dark:placeholder:text-muted-foreground dark:text-foreground bg-white dark:bg-background"
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
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{delay: 0.4, duration: 0.2 }}
            className="flex gap-4 mr-auto">
            <Block 
                    icon='medium'/>
                <Block 
                    icon='linkedin'/>
                <Block 
                    icon='twitter'/>
                <Block 
                    icon='github'/>
                <Block 
                    icon='briefcase'/>
            </motion.div>





    </div>
    );
};

export default TwitterMessageForm;
