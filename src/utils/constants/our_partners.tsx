import { ReactNode } from 'react';

import beingz_black from '../../assets/partners/BEINGZ_BLACK.svg';
import omnispaces from '../../assets/partners/omnispaces.png';
import opusLab from '../../assets/partners/opus-labs.jpeg';
import primal_branding from '../../assets/partners/PB_Logo_.png';
import tokenTech from '../../assets/partners/tokentech.svg';
import { Facebook, Twitter } from '../../components';
import Web from '../../components/ui-controls/Web/Web';

export interface IOurPartners {
	id: number;
	firstName: string;
	lastName: string;
	pfp: ReactNode;
	description: ReactNode;
	socials: ReactNode;
}

export const our_partners: Array<IOurPartners> = [
	{
		id: 1,
		firstName: 'Primal',
		lastName: 'Branding',
		pfp: (
			<>
				<img src={primal_branding} alt='Primal Branding' width='150' height='150' />
			</>
		),
		description: (
			<>
				<p></p>
			</>
		),
		socials: (
			<>
				<div className='flex gap-2'>
					<Web link='https://www.primalbranding.co/' logoColor='text-color-primary' width='w-12' />
					<Facebook link='https://www.facebook.com/PrimalBranding/' logoColor='text-color-primary' width='w-12' />
					<Twitter link='https://twitter.com/hanlonpatrick' logoColor='text-color-primary' width='w-12' />
				</div>
			</>
		),
	},
	{
		id: 2,
		firstName: 'Beingz',
		lastName: '',
		pfp: (
			<>
				<img src={beingz_black} alt='Beingz' width='150' height='150' />
			</>
		),
		description: (
			<>
				<p></p>
			</>
		),
		socials: (
			<>
				<div className='flex gap-2'>
					<Web link='https://www.beingz.co/' logoColor='text-color-primary' width='w-12' />
					<Facebook link='https://www.linkedin.com/company/beingz/' logoColor='text-color-primary' width='w-12' />
					<Twitter link='https://twitter.com/BEINGZZZZZ' logoColor='text-color-primary' width='w-12' />
				</div>
			</>
		),
	},
	{
		id: 4,
		firstName: 'Opus-Labs',
		lastName: '',
		pfp: (
			<>
				<img src={opusLab} alt='Opus-Labs' width='150' height='150' />
			</>
		),
		description: (
			<>
				<p></p>
			</>
		),
		socials: (
			<>
				<div className='flex gap-2'>
					<Web link='https://opus-labs.io/' logoColor='text-color-primary' width='w-12' />
					<Twitter link='https://twitter.com/OpusLabsHQ' logoColor='text-color-primary' width='w-12' />
				</div>
			</>
		),
	},
	{
		id: 5,
		firstName: 'TokenTech',
		lastName: '',
		pfp: (
			<>
				<img src={tokenTech} alt='TokenTech' width='150' height='150' />
			</>
		),
		description: (
			<>
				<p></p>
			</>
		),
		socials: (
			<>
				<div className='flex gap-2'>
					<Web link='https://tokentech.dev/' logoColor='text-color-primary' width='w-12' />
				</div>
			</>
		),
	},
	{
		id: 6,
		firstName: 'Omnispaces',
		lastName: '',
		pfp: (
			<>
				<img src={omnispaces} alt='Omnispaces' width='150' height='150' />
			</>
		),
		description: (
			<>
				<p></p>
			</>
		),
		socials: (
			<>
				<div className='flex gap-2'>
					<Web link='https://omnispaces.io/' logoColor='text-color-primary' width='w-12' />
					<Twitter link='https://twitter.com/omnispaces' logoColor='text-color-primary' width='w-12' />
				</div>
			</>
		),
	},
	// {
	// 	id: 3,
	// 	firstName: 'Not a Design',
	// 	lastName: 'Department',
	// 	pfp: (
	// 		<>
	// 			<img src={beingz_black} alt='Beingz' width='150' height='150' />
	// 		</>
	// 	),
	// 	description: (
	// 		<>
	// 			<p></p>
	// 		</>
	// 	),
	// 	socials: (
	// 		<>
	// 			<div className='flex gap-2'>
	// 				<Web link='https://www.beingz.co/' logoColor='text-color-primary' width='w-12' />
	// 				<Facebook link='https://www.linkedin.com/company/beingz/' logoColor='text-color-primary' width='w-12' />
	// 				<Twitter link='https://twitter.com/BEINGZZZZZ' logoColor='text-color-primary' width='w-12' />
	// 			</div>
	// 		</>
	// 	),
	// },
];
