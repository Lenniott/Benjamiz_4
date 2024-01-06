
import { motion } from 'framer-motion';
import MediumRenderer from '../components/features/MediumRenderer';
import TestMediumJSON from '../../src/assets/data/Article_1.json'//'../../src/assets/data/test.json'

import { PageHeader } from '../components/molicules/BackPage';
export function ExperiencePage() {

    return (
        <div className='grid grid-cols-1 gap-4 mt-4'>
            <PageHeader {...{title: 'Article'}} backButton={true}/>
            <motion.div className='flex flex-col sm:flex-row gap-4 sm:gap-8 border border-card-border rounded-md p-4 sm:p-8 bg-card'
                                initial={{ x: -200, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}>
                    <MediumRenderer articleJson={TestMediumJSON}/>
            </motion.div>
        </div>
    );
};
