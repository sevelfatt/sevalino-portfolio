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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
                    viewport={{ once: true }}
                    className='flex flex-col space-y-2 md:space-y-4 w-fit mx-auto relative z-10'
                >
                    <div className="flex items-center justify-center gap-4">
                        <div className="hidden md:block w-12 h-px bg-linear-to-r from-transparent to-primary" />
                        <h2 className='text-3xl md:text-5xl text-center uppercase tracking-[0.3em] font-black'>Certifications</h2>
                        <div className="hidden md:block w-12 h-px bg-linear-to-l from-transparent to-primary" />
                    </div>
                    <div className='w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent rounded-full opacity-50' />
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
