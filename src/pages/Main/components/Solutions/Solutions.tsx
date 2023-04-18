import React, { ReactNode, useEffect, useState } from 'react';
import brainstorm from '../../../../assets/images/brainstorming.png';
import { ContactUsButton } from '../../../../components';
import './Solutions.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export interface ISolutions {}

const Solutions: React.FunctionComponent<ISolutions> = () => {
	const [width, setWidth] = useState<number>(window.innerWidth);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	const isMobile = width <= 600;

	const communityEngagement = (): ReactNode => {
		return (
			<AnimationOnScroll animateIn='animate__fadeInUp' animateOnce className='w-full bg-white'>
				<section className='flex items-center justify-between px-10'>
					<article className='w-1/2 flex flex-col gap-6'>
						<label className='text-color-secondary text-2xl font-semibold'>Community Engagement</label>
						<p>Building a great community is the lifeblood of a great business.</p>
						<p>
							To build an engaged community you will need leaders that are experienced and engaging, a team that is willing
							and committed and activity ideas that will make them active members.
						</p>
					</article>
					{!isMobile && <img src={brainstorm} alt='temp' width='500px' />}
				</section>
			</AnimationOnScroll>
		);
	};

	const techPartner = (): ReactNode => {
		return (
			<AnimationOnScroll animateIn='animate__fadeInUp' animateOnce className='w-full bg-white'>
				<section className='flex items-center justify-between px-10'>
					{!isMobile && <img src={brainstorm} alt='temp' width='500px' />}
					<article className='w-1/2 flex flex-col gap-6'>
						<label className='text-color-secondary text-2xl font-semibold'>Tech Partner</label>
						<p>Website creation and design are key to keeping attention on your business.</p>
						<p>Smart Contracts are the backbone of Web 3.0 technology.</p>
					</article>
				</section>
			</AnimationOnScroll>
		);
	};

	const marketing = (): ReactNode => {
		return (
			<AnimationOnScroll animateIn='animate__fadeInUp' animateOnce className='w-full bg-white'>
				<section className='flex items-center justify-between px-10'>
					<article className='w-1/2 flex flex-col gap-6'>
						<label className='text-color-secondary text-2xl font-semibold'>Marketing</label>
						<p>Strategy and Marketing are the building blocks of your success in the Web 3.0 space.</p>
						<p>Execution needs to be timely.</p>
						<p>Advice and resources are critical to successful implementation.</p>
					</article>
					{!isMobile && <img src={brainstorm} alt='temp' width='500px' />}
				</section>
			</AnimationOnScroll>
		);
	};

	const nftBusinessOperations = (): ReactNode => {
		return (
			<AnimationOnScroll animateIn='animate__fadeInUp' animateOnce className='w-full bg-white'>
				<section className='flex items-center justify-between px-10'>
					{!isMobile && <img src={brainstorm} alt='temp' width='500px' />}
					<article className='w-1/2 flex flex-col gap-6'>
						<label className='text-color-secondary text-2xl font-semibold'>NFT Business Operations</label>
						<p>Minting your project is only the first step of your NFT journey.</p>
						<p>Your NFTs are more than a project - they are a business.</p>
						<p>
							Designing the best structure and plan to set your NFT business up for success to run smoothly is often
							overlooked.
						</p>
					</article>
				</section>
			</AnimationOnScroll>
		);
	};

	return (
		<div className='w-full max-w-screen-xl mx-auto my-24 px-5'>
			<section id='solutions' className='solutions flex flex-col items-center gap-8'>
				<AnimationOnScroll animateIn='animate__fadeInUp' animateOnce>
					<h2 className='text-color-primary text-4xl font-semibold'>Our Solutions</h2>
				</AnimationOnScroll>
				{communityEngagement()}
				{techPartner()}
				{marketing()}
				{nftBusinessOperations()}
				<AnimationOnScroll animateIn='animate__fadeInUp' animateOnce>
					<ContactUsButton textSize='text-3xl' />
				</AnimationOnScroll>
			</section>
		</div>
	);
};

export default Solutions;
