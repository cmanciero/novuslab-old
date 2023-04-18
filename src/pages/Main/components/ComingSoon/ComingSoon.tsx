import '../../../../App.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

import logo_full from '../../../../assets/images/novus_full-orange-n.png';

const ComingSoon: React.FunctionComponent = () => {
	return (
		<>
			<section className='flex flex-col gap-y-3 justify-center items-center w-1/2 m-auto flex-grow'>
				<div className='flex flex-row gap-x-2'>
					<img src={logo_full} alt='Novus Lab' />
					<div className='blinking-cursor' style={{ minWidth: '130px' }}></div>
				</div>
				<label className='text-color-primary'>Coming Soon</label>
				<NavLink
					to='/joinus'
					className='text-white py-1 w-40 px-2 flex uppercase font-semibold justify-center self-center items-center bg-color-primary rounded-3xl'
				>
					Apply
				</NavLink>
			</section>
		</>
	);
};

export default ComingSoon;
