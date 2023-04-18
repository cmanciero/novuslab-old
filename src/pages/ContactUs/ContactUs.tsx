import React, { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';

export interface IContactUs {}
export interface IContactUsForm {
	email: string;
	fullName: string;
	twitterHandle: string;
	linkedInProfile: string;
	question: string;
}

const ContactUs: React.FunctionComponent<IContactUs> = () => {
	/*
		FullName - entry.1200379003: Christopher Manciero
		Twitter Handle - entry.1522357568: chrismanciero
		LinkedIn URL - entry.1537619162: Link in url
		Question - entry.164351036: this is where i enter a lot of people
		Email - emailAddress: cmanciero@gmail.com
	 */

	const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSenu592_i-8MtBswtJFflah9MgY3q6sBtbqa5V6HU1VPyWHGg/formResponse';
	const emptyContactUsForm: IContactUsForm = {
		email: '',
		fullName: '',
		twitterHandle: '',
		linkedInProfile: '',
		question: '',
	};
	const [contactUsForm, setContactUsForm] = useState<IContactUsForm>(emptyContactUsForm);
	const [submitted, setSubmitted] = useState<boolean>(false);

	const handleFormSubmit = (event: FormEvent) => {
		event?.preventDefault();
		submitForm();
	};

	const submitForm = async () => {
		const { email, fullName, linkedInProfile, twitterHandle, question } = contactUsForm;

		const formData = [
			`emailAddress=${email}`,
			`entry.1200379003=${fullName}`,
			`entry.1522357568=${twitterHandle}`,
			`entry.1537619162=${linkedInProfile}`,
			`entry.164351036=${question}`,
		];

		const response = await fetch(url, {
			method: 'POST',
			mode: 'no-cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formData.join('&'),
		}).then(() => setSubmitted(true));

		return response;
	};

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		setContactUsForm({ ...contactUsForm, [e.currentTarget.name]: e.currentTarget.value });
	};

	const handleTextAreaChange = (e: FormEvent<HTMLTextAreaElement>) => {
		setContactUsForm({ ...contactUsForm, [e.currentTarget.name]: e.currentTarget.value });
	};

	return (
		<>
			<div className={`page max-w-screen-xl w-1/2 mx-auto px-5 mb-5 ${submitted ? 'submitted' : ''}`}>
				<h1 className='font-semibold text-3xl my-5 text-color-primary'>Contact Us</h1>
				{!submitted ? (
					<form onSubmit={handleFormSubmit} className='flex flex-col gap-2'>
						<h2 className='font-semibold underline my-3'>Personal Information</h2>
						<label htmlFor='email'>
							Email <span className='text-red-700 text-sm required'>*</span>
						</label>
						<input
							type='email'
							name='email'
							placeholder='Your email'
							required
							value={contactUsForm.email}
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor='fullName'>
							Full name <span className='text-red-700 text-sm required'>*</span>
						</label>
						<input
							type='text'
							name='fullName'
							placeholder='First and Last Name'
							required
							value={contactUsForm.fullName}
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor='twitter'>Twitter handle</label>
						<input
							type='text'
							name='twitterHandle'
							placeholder='@Novuslab_xyz'
							value={contactUsForm.twitterHandle}
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor='linkedIn'>LinkedIn profile URL</label>
						<input
							type='url'
							name='linkedInProfile'
							placeholder='Full URL for LinkedIn Profile'
							value={contactUsForm?.linkedInProfile}
							onChange={(e) => handleChange(e)}
						/>

						<label htmlFor='question'>
							Query <span className='text-red-700 text-sm required'>*</span>
						</label>
						<textarea name='question' required value={contactUsForm?.question} className='h-48' onChange={(e) => handleTextAreaChange(e)} />
						<button
							type='submit'
							className='text-white py-1 w-40 px-2 flex justify-center self-center uppercase font-semibold items-center bg-color-primary rounded-3xl'
						>
							Submit
						</button>
					</form>
				) : (
					<>
						<h2 className='font-semibold underline my-3'>Question submitted</h2>
						<p>Thank you for your submission. A member of our Team will review your question and will respond shortly.</p>
						<NavLink
							to='/'
							className='text-white py-1 mt-3 w-40 px-2 flex justify-center self-center items-center bg-color-primary rounded-3xl'
						>
							Return Home
						</NavLink>
					</>
				)}
			</div>
		</>
	);
};

export default ContactUs;
