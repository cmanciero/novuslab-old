import React from 'react';
import './Hamburger.scss';

export interface IHamburger {
	isOpen: boolean;
}

const Hamburger: React.FunctionComponent<IHamburger> = (props: IHamburger) => {
	const { isOpen } = props;

	return (
		<>
			<div className='hamburger'>
				<div className={`burger burger1 ${isOpen ? 'isOpen' : ''}`}></div>
				<div className={`burger burger2 ${isOpen ? 'isOpen' : ''}`}></div>
				<div className={`burger burger3 ${isOpen ? 'isOpen' : ''}`}></div>
			</div>
			{isOpen}
		</>
	);
};

export default Hamburger;
