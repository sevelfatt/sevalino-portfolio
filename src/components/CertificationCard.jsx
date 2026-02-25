import React from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Award } from 'lucide-react'

function CertificationCard({ certification }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className='flex flex-col bg-background-alt border border-text/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300'
        >
            {/* Preview Section */}
            <div className='relative w-full aspect-4/3 bg-background flex items-center justify-center overflow-hidden border-b border-text/5'>
                {certification.image ? (
                    <img 
                        src={certification.image} 
                        alt={certification.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-text/20 space-y-4">
                        <Award size={64} className="opacity-20" />
                        <span className="text-sm font-medium">No Image Available</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className='p-6 flex flex-col space-y-4'>
                <div className='space-y-1'>
                    <h3 className='text-xl font-bold text-text line-clamp-2'>{certification.title}</h3>
                    <p className='text-sm font-medium text-primary'>{certification.issuer}</p>
                </div>

                <div className='flex items-center justify-between mt-auto'>
                    <span className='text-sm text-text/60 font-medium'>{certification.date}</span>
                    <a 
                        href={certification.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='flex items-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-background rounded-xl hover:bg-primary/80 transition-all duration-300 transform active:scale-95'
                    >
                        View Full <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default CertificationCard
