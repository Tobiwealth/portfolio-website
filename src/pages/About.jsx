import React from 'react';
import { motion } from "framer-motion";

const About = () => {

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
		},
		exit: {
			opacity:0
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
		},
		exit: {
			opacity:0
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
		},
		exit: {
			opacity:0
		}
	}

	return (
		<div 
		    
		    className="flex flex-col justify-center items-center p-8 lg:p-16 lg:pl-24 w-full h-screen"
		>
		    <motion.div 
		        variants={quickViewVariants}
		        initial="hidden"
		        animate="closed"
		        exit="exit"
		        className="font-tektur text-3xl md:text-6xl z-50 text-sky-white bg-cool-black font-bold text-center flex justify-center items-center w-full h-screen absolute top-16 bottom-0 right-0 left-0"
		    >About me</motion.div>
		    <motion.div 
		        variants={quickCloseVariants}
		        initial="hidden"
		        animate="closed"
		        exit="exit"
		        className="w-full h-screen bg-sky-white absolute top-16 bottom-0 right-0 left-0"
		    ></motion.div>
			<motion.div 
			    variants={containerVariants}
			    initial="hidden"
		        animate="visible"
		        exit="exit"
			    className="flex flex-col items-start text-sky-white w-full"
			>
				<h3 className="font-tektur font-semibold text-2xl md:text-4xl text-left w-full mb-10">About Me</h3>
				<p className="flex flex-col gap-4 font-montserrat text-base md:text-xl max-w-[1000px] text-left">
					<span className="">Hello there! I'm <span className="font-bold">Tobi Oloro</span>, 
					a passionate frontend web developer based in the vibrant city of Lagos. For a very long time, 
					I've been captivated by the art of web development, and over the years, 
					my passion has grown into a profession that allows me to bring creativity and functionality 
					to the digital world.</span>

					<span>With a sharp eye for design and a knack for problem-solving, 
					I thrive on crafting seamless and user-friendly experiences. 
					I find joy in translating ideas into reality, and there's nothing more satisfying than seeing a 
					website I've built come to life and make a positive impact.</span>
				</p>
				<div className="flex flex-col gap-2 mt-8">
					<p className="font-tektur font-semibold text-lg lg:text-2xl mb-2">I am proficient in the following tools and technologies</p>
					<ul className="font-montserrat text-base md:text-lg flex flex-row justify-start items-center max-w-[800px] flex-wrap gap-2">
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">HTML</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">CSS</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">JAVASCRIPT</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">TYPESCRIPT</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">TAILWIND CSS</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">REACT JS</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">REDUX TOOLKIT</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">CONTEXT API</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">FIREBASE</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">SUPABASE</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">STRAPI</li>
						<li className="border-2 border-sky-white pl-2 pr-2 w-fit">FRAMER MOTION</li>
					</ul>
				</div>
			</motion.div>
		</div>
	)
}

export default About;