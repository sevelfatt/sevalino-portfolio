import React from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Award } from 'lucide-react'

function CertificationCard({ certification }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className='group relative flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_-10px_rgba(234,249,52,0.3)]'
        >
            {/* Top glass reflection effect */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            {/* Preview Section */}
            <div className='relative w-full aspect-4/3 bg-background flex items-center justify-center overflow-hidden border-b border-white/5'>
                {certification.image ? (
                    <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                        src={certification.image} 
                        alt={certification.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-text/20 space-y-4">
                        <Award size={64} className="opacity-20 group-hover:scale-110 transition-transform duration-500" />
                        <span className="text-sm font-medium">No Image Available</span>
                    </div>
                )}
                
                {/* Image Overlay/Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Content Section */}
            <div className='p-6 flex flex-col grow space-y-4'>
                <div className='space-y-1.5'>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <p className='text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em]'>{certification.issuer}</p>
                    </div>
                    <h3 className='text-lg md:text-xl font-bold text-text leading-tight group-hover:text-primary transition-colors duration-300'>{certification.title}</h3>
                </div>

                <div className='flex items-center justify-between mt-auto pt-4 border-t border-white/5'>
                    <span className='text-sm text-text/40 font-medium'>{certification.date}</span>
                    <a 
                        href={certification.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='group/btn flex items-center gap-2 px-4 py-2 text-sm font-bold bg-white/5 hover:bg-primary text-text hover:text-background rounded-lg border border-white/10 hover:border-primary transition-all duration-300'
                    >
                        View Full 
                        <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default CertificationCard
