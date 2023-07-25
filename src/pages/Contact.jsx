import React from 'react';
import { motion } from "framer-motion";


const Contact = () => {

	const quickViewVariants = {
		hidden: {
			opacity: 1,
		},
		closed: {
			opacity: 0,
			transition: {
				delay: 1,
				duration: 0.6,
				ease: 'easeInOut'
			}
		}
	}
	const quickCloseVariants = {
		hidden: {
			opacity: 0
		},
		closed: {
			y: "-100%",
			opacity: 1,
			transition: {
				delay: 1.6,
				duration: 1.2,
				ease: 'easeInOut'
			}
		}
	}
	const containerVariants = {
		hidden: {
			opacity: 0,
			scale: 0
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition:{
				delay:2.9,
				duration: 1,
				ease: 'easeInOut'
			}
		}
	}

	return (
		<div className="flex justify-center items-center p-8 pt-0 h-screen">
		    <motion.div 
		        variants={quickViewVariants}
		        initial="hidden"
		        animate="closed"
		        className="font-tektur text-3xl md:text-6xl text-sky-white bg-cool-black pb-20 font-bold text-center flex justify-center items-center w-full h-screen absolute top-16 bottom-0 right-0 left-0"
		    >Let's Connect</motion.div>
		    <motion.div 
		        variants={quickCloseVariants}
		        initial="hidden"
		        animate="closed"
		        className="w-full h-screen bg-sky-white absolute top-16 bottom-0 right-0 left-0"
		    ></motion.div>
			<motion.div 
			    variants={containerVariants}
			    initial="hidden"
		        animate="visible"
			    className="flex flex-col gap-12 items-start lg:pl-16 w-full text-sky-white"
			>
				<h1 className="font-tektur font-semibold text-3xl md:text-5xl lg:text-7xl mb-6">Let's Connect</h1>
				<p className='flex flex-col gap-2 text-dmsans text-xl md:text-2xl max-w-[800px]'>
				    <span>Hit me up if you need a web developer to help you with a creative and visually appealing websites.</span>
				    <span>I'm always open to a full time or remote junior web developer role, freelancing and collaboration on projects.</span>
				</p>
				<div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 font-dmsans text-base md:text-lg lg:text-xl">
					<a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/182SStgsx3_ZjkiJF1mu_fHtdY17YLeZJ/view?usp=sharing"><i className="fa-solid fa-file mr-2 scale-125"></i>Resume</a>
					<a target="_blank" rel="noreferrer" href="mailto:olorotobi@gmail.com"><i className="fa-solid fa-envelope mr-2 scale-125"></i>olorotob@gmail.com</a>
				</div>
				<div className="flex justify-start items-center gap-8 font-dmsans text-base md:text-lg lg:text-xl max-w-[800px] flex-wrap">
					<div className="">
					    <a target="_blank" rel="noreferrer" href="https://github.com/Tobiwealth"><i className="fa-brands fa-github mr-2 scale-125"></i>Tobiwealth</a>
					</div>
					<div>
					    <a target="_blank" rel="noreferrer" href="https://twitter.com/thetobiwealth"><i className="fa-brands fa-twitter mr-2 scale-125"></i>@thetobiwealth</a>
					</div>
					<div>
					    <a target="_blank" rel="noreferrer" href="https://instagram.com/tobiwealth"><i className="fa-brands fa-instagram mr-2 scale-125"></i>@thetobiwealth</a>
					</div>
					<div>
					    <a target="_blank" rel="noreferrer" href="https://wa.link/if7es8"><i className="fab fa-whatsapp mr-2 scale-125"></i>08142292457</a>
					</div>
					
				</div>
			</motion.div>
		</div>
	)
}

export default Contact;