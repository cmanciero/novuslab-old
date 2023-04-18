import React from 'react';
import brainstorm from '../../../../assets/images/brainstorming.png';
import './Vision.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export interface IVision {}

const Vision: React.FunctionComponent<IVision> = () => {
	return (
		<div className='my-16 w-full max-w-screen-xl mx-auto px-5'>
			<div id='vision' className='vision flex gap-8 w-full max-w-screen-xl mx-auto px-5'>
				<AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce>
					<div className='flex flex-col items-center gap-8'>
						<h2 className='text-color-primary text-4xl font-semibold'>Our Vision</h2>
						<section className='flex flex-col items-center justify-between px-10 py-10'>
							<ul className='list-disc pl-6'>
								<li className='text-xl mt-3 mb-5'>
									Bring together hardworking, reputable, and successful entrepreneurs from the Web 2.0 era and connect
									them with like-minded Web 3.0 experts.
								</li>
								<li className='text-xl mb-5'>
									Build an avenue where creative and professional people across the globe come together to drive change.
								</li>
								<li className='text-xl mb-5'>
									As a network we enable mass adoption to Web 3.0 Technology as a global standard.
								</li>
							</ul>
						</section>
					</div>
				</AnimationOnScroll>
				<AnimationOnScroll animateIn='animate__fadeInRight' animateOnce>
					<div className='flex flex-col items-center gap-8'>
						<h2 className='text-color-primary text-4xl font-semibold'>Our Mission</h2>
						<section className='flex flex-col items-center justify-between px-10 py-10'>
							<p className='mt-3 text-xl'>
								Provide leaders of Web 2.0 the opportunity to explore the possibilities of Web 3.0; empowering them to
								create, explore, and succeed in cutting edge technology.
							</p>
							<img src={brainstorm} alt='temp' width='280px' />
						</section>
					</div>
				</AnimationOnScroll>
			</div>
		</div>
	);
};

export default Vision;
