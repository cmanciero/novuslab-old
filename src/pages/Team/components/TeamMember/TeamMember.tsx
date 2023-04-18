import React from 'react';

import { IOurTeamMember } from '../../../../utils/constants/our_team';

export interface ITeamMember {
	member: IOurTeamMember;
}

const TeamMember: React.FunctionComponent<ITeamMember> = (props: ITeamMember) => {
	const { member } = props;
	return (
		<>
			{member.pfp}
			<div className='flex flex-col gap-2 justify-start items-center memberName'>
				<label className='text-color-secondary text-2xl font-semibold'>{member.firstName}</label>
				<label className='text-color-secondary text-2xl font-semibold'>{member.lastName}</label>
			</div>
			{/* {member.description} */}
			{member.socials}
		</>
	);
};

export default TeamMember;
