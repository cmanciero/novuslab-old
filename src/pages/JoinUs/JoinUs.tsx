import React, { FormEvent, KeyboardEvent, SyntheticEvent, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export interface IJoinUs {}

export interface IApplicant {
	email: string;
	fullName: string;
	profession: string;
	contactNumber?: string;
	twitterHandle: string;
	discordHandle?: string;
	referredBy: string;
	shortBio: string;
	linkedInProfile?: string;
	nftExperience?: string;
	web2Experience?: string;
	bringValue?: string;
	nftChange?: string;
	acknowledge: boolean;
	kyc: string;
}

const JoinUs: React.FunctionComponent<IJoinUs> = () => {
	/*
		Email - emailAddress: cmanciero@gmail.com
		Full name - entry.411358191: Christopher Manciero
		Profession - entry.66231984: developer
		Contact Number - entry.455453338: 2039035307
		Twitter handle - entry.1466586518: chrismanciero
    	Discord handle - entry.2072592432: supermanciero#8460
    	Referred by - entry.1284742097: Chris manciero
		LinkedIn Profile URL - entry.392587504: http://www.linkedin.com
		NFT Experience - entry.1387975824: Nft experience answer
    	Short Bio - entry.973069407: Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Web2 experience - entry.1834336019: web2 experience answer
		What value - entry.1958820090: bring value to members answer
		Why change - entry.96463879: nft space change answer
		KYC - entry.812651062: Yes
    	Acknowledge - entry.386358558: Yes

		https://docs.google.com/forms/u/0/d/e/1FAIpQLSdhBxkwS4AVYigkbHJK4NYPeRTTr1eCdmnOVJV21LS6oAiSiQ/formResponse
	*/

	const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdhBxkwS4AVYigkbHJK4NYPeRTTr1eCdmnOVJV21LS6oAiSiQ/formResponse';
	const emptyApplicant: IApplicant = {
		email: '',
		fullName: '',
		profession: '',
		twitterHandle: '',
		discordHandle: '',
		referredBy: '',
		shortBio: '',
		bringValue: '',
		contactNumber: '',
		linkedInProfile: '',
		nftChange: '',
		nftExperience: '',
		web2Experience: '',
		acknowledge: false,
		kyc: 'No',
	};
	const [applicant, setApplicant] = useState<IApplicant>(emptyApplicant);
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [accessCode, setAccessCode] = useState<string>('');
	const [showAccessCode, setShowAccessCode] = useState<boolean>(false);
	const [showError, setShowError] = useState<boolean>(false);
	const [validCode, setValidCode] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		setShowAccessCode(true);
		setAccessCode('');
		setShowError(false);
		setValidCode(false);
	}, []);

	const handleFormSubmit = (event: FormEvent) => {
		event?.preventDefault();
		submitForm();
	};

	const submitForm = async () => {
		const {
			bringValue,
			contactNumber,
			email,
			fullName,
			kyc,
			linkedInProfile,
			nftChange,
			nftExperience,
			profession,
			twitterHandle,
			discordHandle,
			referredBy,
			shortBio,
			web2Experience,
			acknowledge,
		} = applicant;

		const formData = [
			`emailAddress=${email}`,
			`entry.411358191=${fullName}`,
			`entry.66231984=${profession}`,
			`entry.455453338=${contactNumber}`,
			`entry.1466586518=${twitterHandle}`,
			`entry.2072592432=${discordHandle}`,
			`entry.1284742097=${referredBy}`,
			`entry.973069407=${shortBio}`,
			`entry.392587504=${linkedInProfile}`,
			`entry.1387975824=${nftExperience}`,
			`entry.1834336019=${web2Experience}`,
			`entry.1958820090=${bringValue}`,
			`entry.96463879=${nftChange}`,
			`entry.812651062=${kyc}`,
			`entry.386358558=${acknowledge ? 'Yes' : 'No'}`,
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

	const handleChange = (e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setApplicant({ ...applicant, [e.currentTarget.name]: e.currentTarget.value });
	};

	const handleAcknowledgeChange = (e: FormEvent<HTMLInputElement>) => {
		setApplicant({ ...applicant, [e.currentTarget.name]: e.currentTarget.checked });
	};

	const checkAccessCode = async () => {
		if (accessCode) {
			const response = await fetch(`/.netlify/functions/inviteCodes`, {
				method: 'POST',
				body: JSON.stringify({ inviteCode: accessCode }),
			});
			const data = await response.json();
			if (data.validCode) {
				setValidCode(true);
				setShowError(false);
			} else {
				setShowError(true);
			}
		} else {
			setShowError(true);
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === 'Enter') {
			checkAccessCode();
		}
	};

	return (
		<>
			{!validCode && (
				<div
					className={`fixed ${showAccessCode ? 'flex' : 'hidden'} z-10 justify-center items-center top-0 left-0 right-0 bottom-0`}
					style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
					onClick={() => navigate('/')}
				>
					<div
						className='flex flex-col gap-y-3 p-4 justify-center items-center rounded-xl shadow-md bg-white'
						onClick={(e) => e.stopPropagation()}
					>
						<label htmlFor='accessCode'>Enter access code</label>
						<input
							name='accessCode'
							type='text'
							value={accessCode}
							style={{ border: '1px solid #8c8c8c', borderRadius: '8px', padding: '5px' }}
							onKeyDown={handleKeyDown}
							onChange={(e) => setAccessCode(e.currentTarget.value)}
						/>
						{showError && <label className='text-color-red'>Incorrect access code</label>}
						<button
							className='text-white py-1 w-40 px-2 mb-4 flex uppercase font-semibold justify-center self-center items-center bg-color-primary rounded-3xl'
							onClick={checkAccessCode}
						>
							Validate
						</button>
					</div>
				</div>
			)}
			{validCode && (
				<div className={`page max-w-screen-xl w-1/2 mx-auto px-5 mb-5 ${submitted ? 'submitted' : ''}`}>
					<h1 className='font-semibold text-3xl my-5 text-color-primary'>Member Application</h1>
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
								value={applicant.email}
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
								value={applicant.fullName}
								onChange={(e) => handleChange(e)}
							/>
							<label htmlFor='fullName'>
								Referred by <span className='text-red-700 text-sm required'>*</span>
							</label>
							<input
								type='text'
								name='referredBy'
								placeholder='Full name, twitter handle or discord handle'
								required
								value={applicant.referredBy}
								onChange={(e) => handleChange(e)}
							/>
							<label htmlFor='profession'>
								Profession <span className='text-red-700 text-sm required'>*</span>
							</label>
							<input
								type='text'
								name='profession'
								placeholder='What do you do for a living?'
								required
								value={applicant.profession}
								onChange={(e) => handleChange(e)}
							/>
							<label htmlFor='contactNumber'>Contact number</label>
							<span className='text-sm'>No need to provide now, but will be required for the WhatsApp group if you get in</span>
							<input
								type='phone'
								name='contactNumber'
								placeholder='Best phone number to reach you'
								value={applicant.contactNumber}
								onChange={(e) => handleChange(e)}
							/>
							<label htmlFor='twitter'>
								Twitter handle <span className='text-red-700 text-sm required'>*</span>
							</label>
							<input
								type='text'
								name='twitterHandle'
								placeholder='@Novuslab_xyz'
								required
								value={applicant.twitterHandle}
								onChange={(e) => handleChange(e)}
							/>
							<label htmlFor='twitter'>Discord handle</label>
							<input
								type='text'
								name='discordHandle'
								placeholder='@Novuslab_xyz#1234'
								value={applicant.discordHandle}
								onChange={(e) => handleChange(e)}
							/>
							<label htmlFor='linkedIn'>LinkedIn profile URL</label>
							<input
								type='url'
								name='linkedInProfile'
								placeholder='Full URL for LinkedIn Profile'
								value={applicant?.linkedInProfile}
								onChange={(e) => handleChange(e)}
							/>
							<h2 className='font-semibold underline my-3'>Experiences</h2>
							<label htmlFor='shortBio'>
								Short bio about yourself <span className='text-red-700 text-sm required'>*</span>
							</label>
							<span className='text-sm'>We would love to get to know you a little bit better</span>
							<textarea name='shortBio' required value={applicant?.shortBio} className='h-48' onChange={(e) => handleChange(e)} />
							<label htmlFor='nftExperience'>
								NFT Experience <span className='text-red-700 text-sm required'>*</span>
							</label>
							<span className='text-sm'>Time in NFT space, Bluechip NFT's held, major learnings, investment budget, etc</span>
							<textarea name='nftExperience' required value={applicant?.nftExperience} className='h-48' onChange={(e) => handleChange(e)} />
							<label htmlFor='web2Experience'>
								Web 2.0 Experience <span className='text-red-700 text-sm required'>*</span>
							</label>
							<textarea
								name='web2Experience'
								required
								value={applicant?.web2Experience}
								className='h-48'
								onChange={(e) => handleChange(e)}
							/>
							<h2 className='font-semibold underline my-3'>How can you help Novus Lab</h2>
							<label htmlFor='bringValue'>
								What value will you bring to Novus Lab members <span className='text-red-700 text-sm required'>*</span>
							</label>
							<textarea name='bringValue' required value={applicant?.bringValue} className='h-48' onChange={(e) => handleChange(e)} />
							<label htmlFor='nftChange'>
								Why do you want to change the NFT space? <span className='text-red-700 text-sm required'>*</span>
							</label>
							<textarea name='nftChange' required value={applicant?.nftChange} className='h-48' onChange={(e) => handleChange(e)} />
							<label htmlFor='kyc'>Do you agree to do full KYC at a later date?</label>
							<label>
								Yes
								<input type='radio' name='kyc' value='Yes' required checked={applicant?.kyc === 'Yes'} onChange={(e) => handleChange(e)} />
							</label>
							<label>
								No
								<input type='radio' name='kyc' value='No' required checked={applicant?.kyc === 'No'} onChange={(e) => handleChange(e)} />
							</label>
							<label className='flex items-center justify-center text-lg my-3'>
								<input
									type='checkbox'
									name='acknowledge'
									checked={applicant?.acknowledge}
									required
									className='mr-2'
									onChange={(e) => handleAcknowledgeChange(e)}
								/>
								I acknowledge the mint price for this collection will be between 0.75-1.5 ETH
							</label>
							<button
								type='submit'
								className='text-white py-1 w-40 px-2 mb-4 flex uppercase font-semibold justify-center self-center items-center bg-color-primary rounded-3xl'
							>
								Submit
							</button>
						</form>
					) : (
						<>
							<h2 className='font-semibold underline my-3'>Application submitted</h2>
							<p>Thank you for your submission. A member of our Team will review your application shortly.</p>
							<NavLink
								to='/'
								className='text-white py-1 mt-3 w-40 px-2 flex justify-center self-center items-center bg-color-primary rounded-3xl'
							>
								Return Home
							</NavLink>
						</>
					)}
				</div>
			)}
		</>
	);
};

export default JoinUs;
