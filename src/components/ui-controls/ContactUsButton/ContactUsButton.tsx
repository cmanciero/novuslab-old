import React from 'react';
import './ContactUsButton.scss';
import { NavLink } from 'react-router-dom';

export interface IContactUsButton {
	textSize?: string;
}

const ContactUsButton: React.FunctionComponent<IContactUsButton> = (props: IContactUsButton) => {
	const { textSize } = props;
	return (
		<>
			<NavLink
				to='/contactus'
				className={`contactUsButton py-2 px-5 uppercase font-semibold text-white w-max mt-5 bg-color-primary hover:bg-color-secondary transition-colors ${
					textSize ? textSize : 'text-base'
				}`}
			>
				Contact Us
			</NavLink>
		</>
	);
};

export default ContactUsButton;
