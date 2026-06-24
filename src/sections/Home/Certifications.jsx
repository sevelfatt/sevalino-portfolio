import React from 'react'
import SectionLayout from '../../layout/SectionLayout'
import { certificationsData } from '../../data/certifications'
import CertificationCard from '../../components/CertificationCard'
import { motion } from 'motion/react'

function Certifications() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    return (
        <SectionLayout id="certifications">
            <div className='relative w-full flex flex-col space-y-16 justify-center py-10'>
                {/* Decorative Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                    className='flex flex-col space-y-1 md:space-y-3 w-fit justify-start '>
                    <h2 className='text-2xl md:text-4xl '>My Certifications</h2>
                    <div className='w-1/3 h-1 bg-primary rounded-full' />
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative z-10'
                >
                    {certificationsData.map((cert) => (
                        <CertificationCard key={cert.id} certification={cert} />
                    ))}
                </motion.div>
            </div>
        </SectionLayout>
    )
}

export default Certifications
