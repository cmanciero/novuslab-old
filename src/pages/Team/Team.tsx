import './Team.scss';

import React from 'react';

import { ContactUsButton } from '../../components';
import { IOurTeam, IOurTeamMember, our_team } from '../../utils/constants/our_team';
import { TeamMember } from './components';

export interface ITeam {}

const Team: React.FunctionComponent<ITeam> = () => {
	return (
		<>
			<div className='page w-full max-w-screen-xl mx-auto my-24 px-5 team flex flex-col gap-8 items-center'>
				{Object.keys(our_team).map((key: string, index: number) => {
					return (
						<div key={index} className='flex flex-col gap-8 items-center'>
							<h1 className='font-semibold text-5xl my-5 text-color-primary capitalize text-center underline underline-offset-8'>{key}</h1>
							<div className='flex flex-wrap gap-4 justify-center'>
								{our_team[key as keyof IOurTeam].map((item: IOurTeamMember) => (
									<section className='card' key={item.id}>
										<article className='flex flex-col gap-6 p-10 items-center justify-center'>
											<TeamMember member={item} />
										</article>
									</section>
								))}
							</div>
						</div>
					);
				})}
				<ContactUsButton textSize='text-3xl' />
			</div>
		</>
	);
};

export default Team;
