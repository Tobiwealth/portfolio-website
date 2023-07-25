import React from 'react';
import {motion} from 'framer-motion';

const Projects = () => {

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
			scale: 0.1,
			opacity: 0,
			rotateZ: 10
		},
		visible: {
			scale: 1,
			opacity:1,
			transition: {
				duration: 0.6,
				delay: 2.9,
				ease: 'easeInOut'
			}
		},
		hover: {
			opacity:0.85,
			//backdropFilter: 'blur(6px)',
			//background: 'transparent',
			backgroundBlendMode: 'luminosity',
		},
		scroll:{
			rotateZ: 0,
		}
	}

	const hoverVariants = {
		hidden: {
			opacity: 0
		},
		hover: {
			opacity: 1,
			scale:1,
			textShadow: "0px 0px 8px rgb(255,255,255)",
			transition: {
				duration: 0.3,
				delay: 0.1,
				ease: 'easeInOut'
			}
		}
	}
	return (
		<div className="flex justify-center items-center p-4 pt-10 pb-10 lg:p-16">
		    <motion.div 
		        variants={quickViewVariants}
		        initial="hidden"
		        animate="closed"
		        className="font-tektur text-3xl md:text-6xl text-sky-white bg-cool-black font-bold text-center flex justify-center items-center w-full h-screen absolute top-16 bottom-0 right-0 left-0"
		    >Projects</motion.div>
		    <motion.div 
		        variants={quickCloseVariants}
		        initial="hidden"
		        animate="closed"
		        className="w-full h-screen bg-sky-white absolute top-16 bottom-0 right-0 left-0"
		    ></motion.div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-999">
				<motion.div 
				    variants= {containerVariants}
				    initial="hidden"
				    animate="visible"
				    whileHover="hover"
				    whileInView="scroll"
				    className="text-center flex justify-center items-center text-center rounded-lg h-[300px] lg:h-[400px] w-[300px] lg:w-[500px] bg-ehya bg-center bg-no-repeat bg-cover"
				>
					<motion.div
					    variants={hoverVariants}
					    initial="hidden"
				        whileHover="hover"
				        className="p-4 w-full h-full grid place-items-center text-very-dark-grayish-bluee font-bold"
				        style={{backdropFilter: 'blur(10px)'}}
					>
					    <a target="_blank" rel="noreferrer" href="https://ehya-ecommerce.vercel.app/">
					        <h2 className="font-montserrat text-2xl md:text-3xl lg:text-5xl">Ehya Store</h2>
					        <p className="font-dmsans text-lg md:text-xl mt-2 ">An e-comerce website to purchase your digital wearables and other devices</p>
					    </a>
					</motion.div>
				</motion. div>
				<motion.div 
				    variants= {containerVariants}
				    initial="hidden"
				    animate="visible"
				    whileHover="hover"
				    whileInView="scroll"
				    className="text-center flex justify-center items-center text-center rounded-lg h-[300px] lg:h-[400px] w-[300px] lg:w-[500px] bg-fraudit bg-center bg-no-repeat bg-cover"
				>
					<motion.div
					    variants={hoverVariants}
					    initial="hidden"
				        whileHover="hover"
				        className="p-4 w-full h-full grid place-items-center text-very-dark-grayish-bluee font-bold"
				        style={{backdropFilter: 'blur(10px)'}}
					>
					    <a target="_blank" rel="noreferrer" href="https://resonant-hotteok-55fcc3.netlify.app/">
					        <h2 className="font-montserrat text-2xl md:text-3xl lg:text-5xl">Fraudit</h2>
					        <p className="font-dmsans text-lg md:text-xl mt-2 ">A website that Provides Security for business transactions.</p>
					    </a>
					</motion.div>
				</motion. div>
				<motion.div 
				    variants= {containerVariants}
				    initial="hidden"
				    animate="visible"
				    whileHover="hover"
				    whileInView="scroll"
				    className="text-center flex justify-center items-center text-center rounded-lg h-[300px] lg:h-[400px] w-[300px] lg:w-[500px] bg-todo bg-center bg-no-repeat bg-cover"
				>
					<motion.div
					    variants={hoverVariants}
					    initial="hidden"
				        whileHover="hover"
				        className="p-4 w-full h-full grid place-items-center text-very-dark-grayish-bluee font-bold"
				        style={{backdropFilter: 'blur(10px)'}}
					>
					    <a target="_blank" rel="noreferrer" href="https://web-todo-git-main-tobiwealth.vercel.app/">
					        <h2 className="font-montserrat text-2xl md:text-3xl lg:text-5xl">Todo App</h2>
					        <p className="font-dmsans text-lg md:text-xl mt-2 ">A web app to keep your todos, you will to login to create your todos</p>
					    </a>
					</motion.div>
				</motion. div>
				<motion.div 
				    variants= {containerVariants}
				    initial="hidden"
				    animate="visible"
				    whileHover="hover"
				    whileInView="scroll"
				    className="text-center flex justify-center items-center text-center rounded-lg h-[300px] lg:h-[400px] w-[300px] lg:w-[500px] bg-robofriend bg-center bg-no-repeat bg-cover"
				>
					<motion.div
					    variants={hoverVariants}
					    initial="hidden"
				        whileHover="hover"
				        className="p-4 w-full h-full grid place-items-center text-very-dark-grayish-bluee font-bold"
				        style={{backdropFilter: 'blur(10px)'}}
					>
					    <a target="_blank" rel="noreferrer" href="https://tobiwealth.github.io/Robot-generating-website/">
					        <h2 className="font-montserrat text-2xl md:text-3xl lg:text-5xl">Robofriends</h2>
					        <p className="font-dmsans text-lg md:text-xl mt-2 ">A website to look out for robotic avatars</p>
					    </a>
					</motion.div>
				</motion. div>
				<motion.div 
				    variants= {containerVariants}
				    initial="hidden"
				    animate="visible"
				    whileHover="hover"
				    whileInView="scroll"
				    className="text-center flex justify-center items-center text-center rounded-lg h-[300px] lg:h-[400px] w-[300px] lg:w-[500px] bg-burger bg-center bg-no-repeat bg-cover"
				>
					<motion.div
					    variants={hoverVariants}
					    initial="hidden"
				        whileHover="hover"
				        className="p-4 w-full h-full grid place-items-center text-very-dark-grayish-bluee font-bold"
				        style={{backdropFilter: 'blur(10px)'}}
					>
					    <a target="_blank" rel="noreferrer" href="https://fluffy-pie-0a4e51.netlify.app/" >
					        <h2 className="font-montserrat text-2xl md:text-3xl lg:text-5xl">Burger Store</h2>
					        <p className="font-dmsans text-lg md:text-xl mt-2 ">A online burger store to get your favorite burgers</p>
					    </a>
					</motion.div>
				</motion. div>
				<motion.div 
				    variants= {containerVariants}
				    initial="hidden"
				    animate="visible"
				    whileHover="hover"
				    whileInView="scroll"
				    className="text-center flex justify-center items-center text-center rounded-lg h-[300px] lg:h-[400px] w-[300px] lg:w-[500px] bg-weda bg-center bg-no-repeat bg-cover"
				>
					<motion.div
					    variants={hoverVariants}
					    initial="hidden"
				        whileHover="hover"
				        className="p-4 w-full h-full grid place-items-center text-very-dark-grayish-bluee font-bold"
				        style={{backdropFilter: 'blur(10px)'}}
					>
					    <a target="_blank" rel="noreferrer" href="https://62cc20f8d032a60a3642c676--vocal-licorice-eb7190.netlify.app/">
					        <h2 className="font-montserrat text-2xl md:text-3xl lg:text-5xl">Weda App</h2>
					        <p className="font-dmsans text-lg md:text-xl mt-2 ">A weather checking web app</p>
					    </a>
					</motion.div>
				</motion. div>
			</div>
		</div>
	)
}

export default Projects;