import React from 'react'
import SectionLayout from '../../layout/SectionLayout'
import { certificationsData } from '../../data/certifications'
import CertificationCard from '../../components/CertificationCard'
import { motion } from 'motion/react'

function Certifications() {
    return (
        <SectionLayout id="certifications">
            <div className='w-full flex flex-col space-y-16 justify-center'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                    className='flex flex-col space-y-1 md:space-y-3 w-fit mx-auto'
                >
                    <h2 className='text-2xl md:text-4xl text-center uppercase tracking-widest font-bold'>Certifications</h2>
                    <div className='w-1/2 h-1 bg-primary mx-auto rounded-full' />
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
                    {certificationsData.map((cert) => (
                        <CertificationCard key={cert.id} certification={cert} />
                    ))}
                </div>
            </div>
        </SectionLayout>
    )
}

export default Certifications
