import React from 'react';
import { Twitter } from '../ui-controls';

export interface ISocials {}

const Socials: React.FunctionComponent<ISocials> = () => {
	return (
		<>
			<div className='socials flex gap-5'>
				<Twitter logoColor='text-white' width='w-12' link='https://twitter.com/novus_lab' />
			</div>
		</>
	);
};

export default Socials;
