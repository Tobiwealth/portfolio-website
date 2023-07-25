import React from 'react';
import profile from '../images/profile.jpg';
import { motion } from "framer-motion";

const Home = () => {
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
		<div className="p-12 lg:pl-24 flex justify-start items-center text-sky-white lg:mt-0 h-fit w-full lg:h-screen">
		    <motion.div 
		        variants={quickViewVariants}
		        initial="hidden"
		        animate="closed"
		        className="font-tektur text-3xl md:text-6xl text-sky-white bg-cool-black font-bold text-center flex justify-center items-center pb-20 w-full h-screen absolute top-16 bottom-0 right-0 left-0"
		    >welcome</motion.div>
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
			    className="flex flex-col lg:flex-row-reverse justify-start items-start gap-16 lg:gap-24 w-screen overflow-x-hidden"
			>
				<div className="ml-auto mr-auto">
					<img className="w-[15rem] h-[15rem] lg:w-[25rem] lg:h-[25rem] rounded-[50%]" src={profile} alt="profile"/>
				</div>
				<div className="flex flex-col items-start text-center gap-4 lg:gap-10">
					<h1
					    className="font-tektur font-bold text-left text-3xl md:text-5xl lg:text-6xl tracking-widest"
					><span className="flex flex-col lg:flex-row items-start text-lg md:text-2xl">Hey, I'm</span> <span>OLUWATOBI OLORO</span></h1>
					<h3 className="font-montserrat font-semibold text-lg md:text-xl lg:text-3xl tracking-wider">A Frontend Web Developer</h3>
					<h4 className="font-montserrat font-normal text-left text-lg md:2xl max-w-[600px]">I've spent the last 2 and half years helping business owners and companies build and manage websites for their bussiness. Let's connect!</h4>
					<p className="font-montserrat font-normal text-lg md:2xl"><i className="fas fa-map-marker-alt text-sky-white"></i><span className="ml-3 font-dmsans font-normal text-base md:text-lg tracking-wide">Lagos, Nigeria</span></p>
				</div>
			</motion.div>
		</div>
	)
}

export default Home;