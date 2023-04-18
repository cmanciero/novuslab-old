import './Hero.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

import brainstorm from '../../../../assets/images/brainstorming.png';
import logo_full from '../../../../assets/images/novus_full-orange.png';

export interface IHero {}

const Hero: React.FunctionComponent<IHero> = () => {
	return (
		<>
			<div className='hero w-full max-w-screen-xl mx-auto px-5'>
				<img src={brainstorm} alt='Brainstorming' className='col-span-full row-start-1' />
				<div className='flex flex-col col-span-full row-start-1'>
					{/* <h1 className='font-semibold text-6xl mb-24 text-color-primary'>Novus</h1> */}
					<div className='flex flex-row gap-x-2 h-16 mb-14'>
						<img src={logo_full} alt='Novus Lab' />
						<div className='blinking-cursor w-16'></div>
					</div>
					<h2 className='font-semibold text-xl mb-5 w-1/2'>
						Novus is an information gateway that values people and ingenuity to deliver generational change in Web 3.0
					</h2>
					<label>Become a Novus trusted partner</label>
					<NavLink to='/joinus' className='py-2 px-5 uppercase font-semibold mt-5 bg-color-red hover:bg-color-secondary transition-colors'>
						Join Us <i className='px-2 fa-solid fa-play'></i>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Hero;
