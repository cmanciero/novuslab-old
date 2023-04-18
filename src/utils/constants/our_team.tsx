import { ReactNode } from 'react';

import beingz_black from '../../assets/partners/BEINGZ_BLACK.svg';
import primal_branding from '../../assets/partners/PB_Logo_.png';
import brad_provencher from '../../assets/pfp/brad_provencher.png';
import brad_steinberg from '../../assets/pfp/brad_steinberg.jpeg';
import chivas from '../../assets/pfp/chivas.jpeg';
import chris_manciero from '../../assets/pfp/chris_manciero.png';
import david_dacruz from '../../assets/pfp/david_dacruz.jpeg';
import eman from '../../assets/pfp/eman.jpeg';
import franzy from '../../assets/pfp/franzy.jpeg';
import hunter_maier from '../../assets/pfp/hunter_maier.png';
import jon_van_wyk from '../../assets/pfp/jon_van_wyk.png';
import paul_bhogal from '../../assets/pfp/paul_bhogal.gif';
import peter_brand from '../../assets/pfp/peter_brand.png';
import prithu_gaharwar from '../../assets/pfp/prithu_gaharwar.jpeg';
import sam from '../../assets/pfp/sam.png';
import seqouya from '../../assets/pfp/seqouya.jpeg';
import smooth from '../../assets/pfp/smooth.jpeg';
import vince from '../../assets/pfp/vince.jpeg';
import { Facebook, LinkedIn, Twitter } from '../../components';
import Web from '../../components/ui-controls/Web/Web';

export interface IOurTeam {
	executive: Array<IOurTeamMember>;
	marketing: Array<IOurTeamMember>;
	artists: Array<IOurTeamMember>;
	alpha: Array<IOurTeamMember>;
	content: Array<IOurTeamMember>;
	dev: Array<IOurTeamMember>;
}

export interface IOurTeamMember {
	id: number;
	firstName: string;
	lastName: string;
	pfp: ReactNode;
	description: ReactNode;
	socials: ReactNode;
}

export const our_team: IOurTeam = {
	executive: [
		{
			id: 5,
			firstName: 'Paul',
			lastName: 'Bhogal',
			pfp: (
				<>
					<img className='member' src={paul_bhogal} alt='Paul Bhogal' width='150' height='150' />
				</>
			),
			description: (
				<>
					<p>
						I'm a firm believer in breaking barriers and taking chances. Once the goal is set - my job is to pull together the team and
						operation and get them moving together with unity. My 20+ years of experience in Sales and Consulting will be fully utilized for
						the success of Trust Collective. NFT's was initially just a way to pass time and have some fun; I soon came to realise that for
						the first time in my generation, I'm early. My personal goal now is to give everything I have learnt over the last 20 years
						together, with this collective group of Web 3 innovative minds and web 2 business leaders to make TRUST Collective one of the
						leading innovators in the NFT space over the next decade.
					</p>
				</>
			),
			socials: (
				<>
					<div className='flex gap-2'>
						<Twitter link='https://twitter.com/Alphageek79' logoColor='text-color-primary' width='w-12' />
						<LinkedIn link='https://www.linkedin.com/in/paul-bhogal-3490264/' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		{
			id: 6,
			firstName: 'Prithu',
			lastName: 'Gaharwar',
			pfp: (
				<>
					<img className='member' src={prithu_gaharwar} alt='Prithu Gaharwar' width='150' height='150' />
				</>
			),
			description: (
				<>
					<p>
						I am an Entrepreneur and believe in creating value for my customers and team. I worked with multiple big businesses like
						Deloitte, Oracle, Shell, Workday and was fortunate to create my own multi million global consulting business Go-Cloud Solutions.
						After selling my business, I have been a seed investor in a London based Consulting business , Africa based software business,
						India based Resort business and a London based wine business. I joined NFT space in July 2021 (while in crypto from 2017) and
						fell in love with the space. Currently I am working on NFT creation platform for the artists along with putting all my
						experience in making Truth Collective a place of choice for leading Web3.0 innovators, leaders and believers.
					</p>
				</>
			),
			socials: (
				<>
					<div className='flex gap-2'>
						<Twitter link='https://twitter.com/pritznft' logoColor='text-color-primary' width='w-12' />
						<LinkedIn link='https://www.linkedin.com/in/prithugaharwar/' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		{
			id: 4,
			firstName: 'Brad',
			lastName: 'Provencher',
			pfp: (
				<>
					<img className='member' src={brad_provencher} alt='Brad Provencher' width='150' height='150' />
				</>
			),
			description: (
				<>
					<p>
						I have run companies, built non-profits, and know how to streamline for success. More than these, though, I care for people,
						value truth, and do my best to live mercifully. Here so no one gets left behind who wants to succeed and put in the effort.
						Joined the crypto space in June/July 2021. Fell in love with the networking and relationships. Love helping others grow and
						learn in the space. I still have a lot to learn, but love being able to build a place those around me grow and succeed.
					</p>
				</>
			),
			socials: (
				<>
					<div className='flex gap-2'>
						<Twitter link='https://twitter.com/incendiarylyfe' logoColor='text-color-primary' width='w-12' />
						<LinkedIn link='https://www.linkedin.com/in/bradprovencher/' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		// {
		// 	id: 2,
		// 	firstName: 'Frank',
		// 	lastName: 'Uriostegui',
		// 	pfp: (
		// 		<>
		// 			<img className='member' src={frank_uriostegui} alt='Frank Uriostegui' width='150' height='150' />
		// 		</>
		// 	),
		// 	description: (
		// 		<>
		// 			<p>
		// 				Striving to create a strong foundation for a solid future to take care of those closest to him. Doesn't hesitate to respectfully
		// 				point out factors that need improvement. Admires honesty and respect above all else. Jumped into crypto and NFTs at the same
		// 				time in October of 2021. Hungry to learn about Web3 and seek opportunities. Happy to network and push people to their fullest
		// 				potential.
		// 			</p>
		// 		</>
		// 	),
		// 	socials: (
		// 		<>
		// 			<div className='flex gap-2'>
		// 				<Twitter link='https://twitter.com/FurpMr' logoColor='text-color-primary' width='w-12' />
		// 			</div>
		// 		</>
		// 	),
		// },
		{
			id: 3,
			firstName: 'Jon',
			lastName: 'Van Wyk',
			pfp: (
				<>
					<img className='member' src={jon_van_wyk} alt='Jon Van Wyk' width='150' height='150' />
				</>
			),
			description: (
				<>
					<p>
						I have spent 23 years working in the world of education in Minnesota, USA. I have experience managing people, leading programs,
						and creating strategic plans. I have the skillset to help grow and develop programming with discernment and foresight. I jumped
						into the Web3 space in July of 2021. I have been working as a lead team member in the NFT space along with advising and planning
						NFT projects. My focus is on building an engaging community environment
					</p>
				</>
			),
			socials: (
				<>
					<div className='flex gap-2'>
						<Twitter link='https://twitter.com/jonvwyk' logoColor='text-color-primary' width='w-12' />
						<LinkedIn link='https://www.linkedin.com/in/jon-van-wyk-8b863a242/' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		{
			id: 1,
			firstName: 'Chris',
			lastName: 'Manciero',
			pfp: (
				<>
					<img className='member' src={chris_manciero} alt='Chris Manciero' width='150' height='150' />
				</>
			),
			description: (
				<>
					<p>
						Senior Software Developer at SAP with 20 years experience with front-end technologies. Works hard to get the job done, but also
						has fun doing it. Great motivator and team worker. I have been in the NFT space since August of 2021 and noticed that this is
						the future of the web. My goal is to apply my skills to projects to help deliver the best experience to the visitors and connect
						with some amazing people along the way.
					</p>
				</>
			),
			socials: (
				<>
					<div className='flex gap-2'>
						<Twitter link='https://twitter.com/chrismanciero' logoColor='text-color-primary' width='w-12' />
						<LinkedIn link='https://www.linkedin.com/in/chris-manciero-095a653/' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
	],
	marketing: [
		{
			id: 21,
			firstName: 'Chivas',
			lastName: '',
			pfp: (
				<>
					<img className='member' src={chivas} alt='Chivas' width='150' height='150' />
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
						<Twitter link='https://twitter.com/shivaraso' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		// {
		// 	id: 22,
		// 	firstName: 'Steve',
		// 	lastName: 'Matlick',
		// 	pfp: (
		// 		<>
		// 			<img className='member' src={steve_matlick} alt='Steve Matlick' width='150' height='150' />
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
		// 				<Twitter link='https://twitter.com/Corwin43NFT' logoColor='text-color-primary' width='w-12' />
		// 				<LinkedIn link='https://www.linkedin.com/in/stephenmatlick/' logoColor='text-color-primary' width='w-12' />
		// 			</div>
		// 		</>
		// 	),
		// },
		{
			id: 23,
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
			id: 24,
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
	],
	artists: [
		{
			id: 31,
			firstName: 'Sam',
			lastName: '',
			pfp: (
				<>
					<img className='member' src={sam} alt='Sam' width='150' height='150' />
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
						<Twitter link='https://twitter.com/samuel4acre' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		{
			id: 32,
			firstName: 'BitBoomBap',
			lastName: '',
			pfp: (
				<>
					<img className='member' src={brad_steinberg} alt='BitBoomBap' width='150' height='150' />
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
						<Twitter link='https://twitter.com/nunewage' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		{
			id: 23,
			firstName: 'Brand',
			lastName: '',
			pfp: (
				<>
					<img className='member' src={peter_brand} alt='Peter Brand' width='150' height='150' />
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
						<Twitter link='https://twitter.com/brand2moon' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
	],
	alpha: [
		{
			id: 41,
			firstName: 'E Man',
			lastName: '',
			pfp: (
				<>
					<img className='member' src={eman} alt='E Man' width='150' height='150' />
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
						<Twitter link='https://twitter.com/Eman_eth_' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		{
			id: 42,
			firstName: 'Vince',
			lastName: '',
			pfp: (
				<>
					<img className='member' src={vince} alt='Vince' width='150' height='150' />
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
						<Twitter link='https://twitter.com/vin_nft_' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		{
			id: 43,
			firstName: 'Franzy',
			lastName: '',
			pfp: (
				<>
					<img className='member' src={franzy} alt='Franzy' width='150' height='150' />
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
						<Twitter link='https://twitter.com/franzykicks' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
	],
	content: [
		{
			id: 51,
			firstName: 'Hunter',
			lastName: 'Maier',
			pfp: (
				<>
					<img className='member' src={hunter_maier} alt='Hunter Maier' width='150' height='150' />
				</>
			),
			description: (
				<>
					<p>
						Hey, my name is Hunter, otherwise known to the web3 community as NFTpublisher. I really dove deep into the ecosystem back in
						October 2021 and have been infatuated with the innovational tech ever since. In an attempt to better establish my credibility in
						the space, I started an informative web3 based newsletter to help beginners and experts alike stay up to date with the ever so
						fast moving industry that is web3. Since then, I've grown a presence on Twitter, Medium, and of course in people's inbox!
					</p>
				</>
			),
			socials: (
				<>
					<div className='flex gap-2'>
						<Twitter link='https://twitter.com/NFTpublisher' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		{
			id: 52,
			firstName: 'Smooth',
			lastName: '',
			pfp: (
				<>
					<img className='member' src={smooth} alt='Smooth' width='150' height='150' />
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
						<Twitter link='https://twitter.com/thisissmooth' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
	],
	dev: [
		{
			id: 8,
			firstName: 'David',
			lastName: 'Dacruz',
			pfp: (
				<>
					<img className='member' src={david_dacruz} alt='David Dacruz' width='150' height='150' />
				</>
			),
			description: (
				<>
					<p>
						Digital architect with a concern for security. I discovered the nft space with cryptokitties and was immediatly appealed from
						both the collectors and the development side of the scene. My passion is to bring ideas into reality by coding, constantly
						innovating, building, breaking and fixing things. We helped multiple nft projects launch successfully, our contracts are always
						optimised for low gas minting. Make code not war
					</p>
				</>
			),
			socials: (
				<>
					<div className='flex gap-2'>
						<Twitter link='https://twitter.com/dadev42' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
		{
			id: 7,
			firstName: 'Sequoya',
			lastName: 'Etz',
			pfp: (
				<>
					<img className='member' src={seqouya} alt='Seqouya' width='150' height='150' />
				</>
			),
			description: (
				<>
					<p>
						First interested in psychology and philosophy, software engineering came as a path to understand the underlying layer embedded
						in our modern lives; with the added benefit of being a fun challenge. In our fast moving world, the NFT space simply drew me in,
						holistically. Another layer in the matrix. Thanks to a dear friend, David, for his heart warming invitation to join this wild
						journey. Building the future collectively, one piece at a time.
					</p>
				</>
			),
			socials: (
				<>
					<div className='flex gap-2'>
						<LinkedIn link='https://www.linkedin.com/in/sequoya' logoColor='text-color-primary' width='w-12' />
					</div>
				</>
			),
		},
	],
};
