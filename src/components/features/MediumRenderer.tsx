    //./src/components/features/MediumRenderer.tsx

    import React from 'react';
    import { Link as RouterLink } from 'react-router-dom';
    import { Container } from '../container';
    import Image from '../molicules/Image';

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
        case 'subtitle':
            return <h2 className='h5 text-muted-foreground'>{renderElement(item.content)}</h2>;
        case 'h3':
            return <h2 className='h4 mt-2 mb-1 '>{renderElement(item.content)}</h2>;
        case 'h4':
            return <h3 className='h5 text-muted-foreground'>{renderElement(item.content)}</h3>;
        case 'p':
            return <p className='text-base sm:text-lg py-2 font-light'>{renderElement(item.content)}</p>;
        case 'strong':
            return <strong><p>{renderElement(item.content)}</p></strong>;
        case 'em':
            return <em className='font-light indent-8'><p>{renderElement(item.content)}</p></em>;
        case 'blockquote':
            const quoteText = Array.isArray(item.content) ? item.content.join(' ') : item.content;
            return <i className='flex flex-grow justify-center m-8 text-center text-lg sm:text-xl italic font-serif font-light '>{quoteText}</i>;
        case 'ul':
            return <ul className=' ml-8 list-disc gap-4 mb-4 flex flex-col text-base sm:text-lg font-light '>{item.content.map((listItemContent: any, listItemIndex: number) => 
                <li key={listItemIndex}>
                {renderElement(listItemContent)}
                </li>
            )}</ul>;
            
        case 'ol':
            return <ol className='ml-8 list-decimal  gap-4 mb-4 flex flex-col text-base sm:text-lg font-light'>{item.content.map((listItemContent: any, listItemIndex: number) => 
                <li key={listItemIndex}>
                {renderElement(listItemContent)}
                </li>
            )}</ol>;
        case 'li':
            return item.content;
        case 'a':
            return <RouterLink to={item.attributes.href} className="link">
                    {renderElement(item.content)}
                    </RouterLink>;
        case 'figure':
            return <figure>{renderElement(item.content)}</figure>;
        case 'div':
            return <div className={item.attributes.class}>{renderElement(item.content)}</div>;
        case 'hr':
                return <hr className='border-card-border'/>
        case 'img':
            return <div className="flex flex-shrink-0 items-center justify-center my-2 sm-2 "><Image className="rounded-sm w-72" src={item.attributes.src} alt={item.attributes.alt || ''} description={item.attributes.alt || ''} /></div>;
        case 'figcaption':
        return <figcaption className='text-sm text-foreground py-1 flex items-center justify-center'>{renderElement(item.content)}</figcaption>;
        // Add more cases as needed
        default:
            return <div>{JSON.stringify(item)}</div>;
        }
    };

     // Get all keys
    const keys = Object.keys(content);

    // Last key
    const lastKey = keys[keys.length - 1];

    // Last value
    const lastValue = content[lastKey];



    return (
        <article className='grid grid-cols-1 grow gap-4'>
            <Container variant='solid'>
                <p className='small'>
                    Originally published in <RouterLink className='link' to={lastValue.content[2].attributes.href}>{renderElement(lastValue.content[2].content[0]).replace(/"/g, '')}</RouterLink>
                </p>

            </Container>
            <Container variant='solid'>
            <div className='grid grid-cols-1 grow gap-2'>

            <h1 className='h1 font-medium mb-2'>{articleJson.title}</h1>

            {content.map((item: any, index: number) => (
                <div>
                <React.Fragment key={index}>
                {renderContentByType(item)}
                </React.Fragment>
                </div>
            ))}
            </div> 
        </Container>
        </article>

    );
    };

    export default MediumRenderer;
