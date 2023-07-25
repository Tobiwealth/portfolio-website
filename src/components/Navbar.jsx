import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { motion } from "framer-motion";



const Navbar = () => {
	const [closeMobile, setCloseMobile] = useState(false);
	const variants = {
		open: { 
			opacity: 1, 
			x: 0,
			transition: {
				duration: 0.4,
				delay: 0.01,
				ease: "easeInOut"
			}
		},
		closed: { 
			opacity: 0, 
			x: "100%",
			transition: {
				duration: 0.4,
				delay: 0.01,
				ease: "easeInOut"
			}
		},
	}

	const navLinkStyles = ({isActive}) => {
		return{
			borderBottom: isActive? "4px solid white" : "",
			color: isActive? "white" : ""
		}
	}
	const navLinkStyles1 = ({isActive}) => {
		return{
			borderBottom: isActive? "4px solid #28231D" : "",
			color: isActive? "#28231D" : ""
		}
	}


	return (
		<div className="flex justify-center h-16 items-center z-50 text-sm font-tektur md:text-base p-6 md:p-16 lg:p-24 md:pt-6 md:pb-6 lg:pb-6 lg:pt-6 bg-cool-black text-sky-white sticky top-0">
			<div className="flex justify-between items-center w-full">
				<div> <NavLink to="/">&copy;coded by TobiWealth</NavLink></div>
				<div className="hidden lg:flex justify-around items-center gap-8">
					<NavLink style={navLinkStyles} to="/about">About Me</NavLink>
					<NavLink style={navLinkStyles} to="/projects">Projects</NavLink>
					<NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
				</div>
				<div className="lg:hidden ">
				    {
				    	closeMobile ? 
						    <div onClick={() => setCloseMobile(false)} ><i className="fas fa-times cursor-pointer" style={{fontSize:'27px'}}></i></div> 
						        : <div onClick={() => setCloseMobile(true)}><i className="fa-solid fa-bars cursor-pointer" style={{fontSize:'27px'}}></i></div>
				    }
                    <motion.ul 
                        variants={variants}
                        animate={closeMobile ? "open" : "closed"}
	                    className="w-1/2 absolute top-16 right-0 h-screen bg-sky-white text-cool-black flex flex-col gap-12 p-8"
                    >
						<NavLink className="w-fit" onClick={()=>setCloseMobile(false)} style={navLinkStyles1} to="/about">About Me</NavLink>
						<NavLink className="w-fit" onClick={()=>setCloseMobile(false)} style={navLinkStyles1} to="/projects">Projects</NavLink>
						<NavLink className="w-fit" onClick={()=>setCloseMobile(false)} style={navLinkStyles1} to="/contact">Contact</NavLink>
					</motion.ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar;