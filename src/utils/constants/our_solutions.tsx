export interface IOurSolution {
	id: number;
	name: string;
	description: string;
}

export const OurSolutions: Array<IOurSolution> = [
	{
		id: 1,
		name: 'Community Engagement',
		description:
			'Building a great community is the lifeblood of a great business. To build an engaged community you will need leaders that are experienced and engaging, a team that is willing and committed and activity ideas that will make them active members.',
	},
	{
		id: 2,
		name: 'Tech Partner',
		description:
			'Website creation and design are key to keeping attention on your business. Smart Contracts are the backbone of Web 3.0 technology.',
	},
	{
		id: 3,
		name: 'Marketing',
		description:
			'Strategy and Marketing are the building blocks of your success in the Web 3.0 space. Execution needs to be timely. Advice and resources are critical to successful implementation.',
	},
	{
		id: 4,
		name: 'NFT Business Operations',
		description:
			'Minting your project is only the first step of your NFT journey. Your NFTs are more than a project - they are a business. Designing the best structure and plan to set your NFT business up for success to run smoothly is often overlooked.',
	},
];
