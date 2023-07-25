import React from 'react';

const Footer = () => {
	return (
		<div className="p-8 lg:p-16 bg-charcoal text-sky-white">
			<div className=" flex justify-center items-center gap-16 font-bold text-xl md:text-3xl ">
				<div className="">
				    <a target="_blank" rel="noreferrer" href=""><i className="fa-brands fa-github mr-2 scale-125"></i></a>
				</div>
				<div>
				    <a target="_blank" rel="noreferrer" href="https://twitter.com/i/flow/login?redirect_after_login=%2Fthetobiwealth%3Flang%3Den"><i className="fa-brands fa-twitter mr-2 scale-125"></i></a>
				</div>
				<div>
				    <a target="_blank" rel="noreferrer" href=""><i className="fa-brands fa-instagram mr-2 scale-125"></i></a>
				</div>
				<div>
				    <a target="_blank" rel="noreferrer" href="https://wa.link/if7es8"><i className="fab fa-whatsapp mr-2 scale-125"></i></a>
				</div>
			</div>
			<div className="text-center mt-8 text-base md:text-lg">&copy;Tobi Oloro</div>
		</div>
	)
}

export default Footer;