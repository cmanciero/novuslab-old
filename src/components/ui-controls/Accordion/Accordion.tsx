import React, { useState } from 'react';
import { IAccordionSection } from '../../../utils/constants/faqs';

export interface IAccordion {
	sections: Array<IAccordionSection>;
}

const Accordion: React.FunctionComponent<IAccordion> = (props: IAccordion) => {
	const { sections } = props;

	const [openedIndex, setOpenedIndex] = useState(0);

	const openCloseSection = (id: number) => {
		if (openedIndex !== id) {
			setOpenedIndex(id);
		} else {
			setOpenedIndex(0);
		}
	};
	return (
		<>
			<section className='max-w-screen-xl w-full'>
				{sections.map((item) => {
					return (
						<div className='border-b border-color-secondary p-4'>
							<button className='w-full text-left' onClick={() => openCloseSection(item.id)}>
								<i className={`fa-solid fa-chevron-right transition-all ${openedIndex === item.id ? 'rotate-90' : ''}`}></i>
								<label className='pl-3 cursor-pointer text-color-secondary text-2xl'>{item.title}</label>
							</button>
							<div className={`${openedIndex === item.id ? 'display' : 'hidden'} my-3`}>{item.content}</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Accordion;
