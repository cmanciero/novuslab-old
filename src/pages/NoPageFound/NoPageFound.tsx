import React from 'react';
import { NavLink } from 'react-router-dom';

export interface INoPageFound {}

const NoPageFound: React.FunctionComponent<INoPageFound> = () => {
	return (
		<>
			<div className='page w-full max-w-screen-xl mx-auto my-24 px-5 team flex flex-col gap-8 items-center'>
				<h1 className='font-semibold text-6xl my-5 text-color-primary'>Page Not Found</h1>
				<NavLink
					to='/'
					className='py-2 rounded-3xl px-5 uppercase font-semibold text-white w-max mt-5 bg-color-primary hover:bg-color-secondary transition-colors'
				>
					Return Home
				</NavLink>
			</div>
		</>
	);
};

export default NoPageFound;
