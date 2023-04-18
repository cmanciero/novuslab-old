import '../Team/Team.scss';

import React from 'react';

import { ContactUsButton } from '../../components';
import { IOurPartners, our_partners } from '../../utils/constants/our_partners';
import { TeamMember } from '../Team/components';

export interface IPartners {}

const Partners: React.FunctionComponent<IPartners> = (props: IPartners) => {
	return (
		<>
			<div className='page w-full max-w-screen-xl mx-auto my-24 px-5 team flex flex-col gap-8 items-center'>
				<h1 className='font-semibold text-5xl my-5 text-color-primary capitalize text-center underline underline-offset-8'>Partners</h1>
				<div className='flex flex-wrap gap-8 justify-center'>
					{our_partners.map((item: IOurPartners) => (
						<section className='card' key={item.id}>
							<article className='flex flex-col gap-6 p-10 items-center justify-center'>
								<TeamMember member={item} />
							</article>
						</section>
					))}
				</div>
				<ContactUsButton textSize='text-3xl' />
			</div>
		</>
	);
};

export default Partners;
