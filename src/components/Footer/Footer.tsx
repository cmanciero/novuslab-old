import './Footer.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

import logo_white from '../../assets/images/novus_N-full-orange.png';
import Socials from '../Socials/Socials';

export interface IFooter {}

const Footer: React.FunctionComponent<IFooter> = () => {
	return (
		<>
			<footer className='bg-color-secondary'>
				<section className='w-full max-w-screen-xl mx-auto py-3 flex justify-between items-center px-5'>
					<div className='flex w-80 gap-4 items-center'>
						<NavLink to='/'>
							<img src={logo_white} alt='Novus' className='w-12' />
						</NavLink>
						<p className='text-xs'>Copyright &copy; 2022</p>
						<NavLink to='/faq' className='text-white'>
							Learn
						</NavLink>
						<NavLink to='/team' className='text-white'>
							Team
						</NavLink>
						<NavLink to='/partners' className='text-white'>
							Partners
						</NavLink>
					</div>
					<Socials />
				</section>
			</footer>
		</>
	);
};

export default Footer;
