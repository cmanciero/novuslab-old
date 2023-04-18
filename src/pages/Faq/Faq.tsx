import React from 'react';
import { Accordion } from '../../components';
import { faqs } from '../../utils/constants/faqs';

export interface IFaq {}

const Faq: React.FunctionComponent<IFaq> = () => {
	return (
		<>
			<div className='page w-full max-w-screen-xl mx-auto my-24 px-5 flex flex-col gap-8 items-center'>
				<h1 className='font-semibold text-3xl my-5 text-color-primary'>FAQs & Tutorials</h1>
				<Accordion sections={faqs}></Accordion>
			</div>
		</>
	);
};

export default Faq;
