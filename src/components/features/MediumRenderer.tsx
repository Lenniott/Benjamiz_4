    //./src/components/features/MediumRenderer.tsx

    import React from 'react';
    import { H2, H3, H4, Link, ListText, Paragraph,Quote } from '../typography';
    import { ListItem } from '../typography/listItem';

    interface ContentProps {
        articleJson: any;
    }

    const MediumRenderer: React.FC<ContentProps> = ({ articleJson }) => {
    if (!articleJson) return null;
    const content = articleJson.content.content;
    const renderElement = (item: any) => {
        if (typeof item === 'string') {
        return item;
        } else if (Array.isArray(item)) {
        return item.map((nestedItem, nestedIndex) => (
            <React.Fragment key={nestedIndex}>
            {renderElement(nestedItem)}
            </React.Fragment>
        ));
        } else if (typeof item === 'object' && item !== null) {
        return renderContentByType(item);
        }
    };

    const renderContentByType = (item: any) => {
        switch (item.type) {
        case 'h3':
            return <H3>{renderElement(item.content)}</H3>;
        case 'h4':
            return <H4>{renderElement(item.content)}</H4>;
        case 'p':
            return <Paragraph>{renderElement(item.content)}</Paragraph>;
        case 'strong':
            return <strong><Paragraph>{renderElement(item.content)}</Paragraph></strong>;
        case 'em':
            return <em><Paragraph>{renderElement(item.content)}</Paragraph></em>;
        case 'blockquote':
            const quoteText = Array.isArray(item.content) ? item.content.join(' ') : item.content;
            return <Quote quote={quoteText}></Quote>;
            case 'ul':
                return <ListText isOrdered={false}>{item.content.map((listItemContent: any, listItemIndex: number) => 
                  <ListItem key={listItemIndex} isOrdered={false}>{renderElement(listItemContent)}</ListItem>
                )}</ListText>;
              
              case 'ol':
                return <ListText isOrdered={true}>{item.content.map((listItemContent: any, listItemIndex: number) => 
                  <ListItem key={listItemIndex} isOrdered={true} index={listItemIndex}>{renderElement(listItemContent)}</ListItem>
                )}</ListText>;
        case 'li':
            return item.content;
        case 'a':
            return <Link to={item.attributes.href} >{renderElement(item.content)}</Link>;
        case 'figure':
            return <figure>{renderElement(item.content)}</figure>;
        case 'hr':
                return <hr className='border-card-border'/>
        case 'img':
            return <div className="flex items-center justify-center my-1 sm-2 "><img src={item.attributes.src} alt={item.attributes.alt || ''} /></div>;
        case 'figcaption':
        return <figcaption className='text-xs font-normal text-foreground py-1 flex items-center justify-center'>{renderElement(item.content)}</figcaption>;
        // Add more cases as needed
        default:
            return <div>{JSON.stringify(item)}</div>;
        }
    };

    return (
        <article>
        <div className='grid grid-cols-1 grow gap-2'>
        <H2>{articleJson.title}</H2>
        {content.map((item: any, index: number) => (
            <div>
            <React.Fragment key={index}>
            {renderContentByType(item)}
            </React.Fragment>
            </div>
        ))}
        </div> 
        </article>

    );
    };

    export default MediumRenderer;
