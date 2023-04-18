import './Navigation.scss';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Web3 from 'web3';
import Web3Modal from 'web3modal';

import logo_full from '../../assets/images/novus_N-orange.png';
import { providerOptions } from '../../utils/constants/providerOptions';
import { Hamburger } from '../ui-controls';

export interface INavigation {}

const Navigation: React.FunctionComponent<INavigation> = () => {
	const [currentAccount, setCurrentAccount] = useState<string>();
	const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	const web3Modal = new Web3Modal({
		network: 'mainnet', // optional
		cacheProvider: true, // optional
		providerOptions, // required
	});

	const connectWalletHandler = async () => {
		const provider = await web3Modal.connect();
		const library = new Web3(provider);
		const accounts = await library.eth.getAccounts();

		if (accounts.length !== 0) {
			setCurrentAccount(accounts[0]);
		}
	};

	const menuClickHandler = () => {
		setShowMenu((previous) => !previous);
	};

	return (
		<nav className='mx-auto flex flex-row w-full max-w-screen-xl pb-4 px-5'>
			<NavLink to='/'>
				<img src={logo_full} alt='Novus' className='w-24' />
			</NavLink>
			<div className={`nav-items flex flex-row w-full items-center justify-end ${hamburgerOpen ? 'nav-float' : ''}`}>
				<ul className='flex flex-row w-full max-w-2xl justify-end gap-6 items-center'>
					<li>
						<a href='/#vision' className='text-color-gray hover:text-color-secondary transition-colors'>
							Vision
						</a>
					</li>
					<li>
						<a href='/#solutions' className='text-color-gray hover:text-color-secondary transition-colors'>
							Solutions
						</a>
					</li>
					<li>
						<NavLink to='/contactus' className='text-color-gray hover:text-color-secondary transition-colors'>
							Contact Us
						</NavLink>
					</li>
					<li>
						<div
							className='dropdown relative cursor-pointer'
							onClick={menuClickHandler}
							onMouseOver={() => setShowMenu(true)}
							onMouseOut={() => setShowMenu(false)}
						>
							<button className={`text-color-gray hover:text-color-secondary font-semibold transition-colors ${showMenu ? 'show' : ''}`}>
								Find<i className='fa-solid fa-caret-down ml-1'></i>
							</button>
							<ul className={`dropdown-menu absolute top-full ${showMenu ? 'visible' : 'hidden'}`}>
								<li>
									<NavLink to='/faq' className='text-blue-500 block text-right hover:underline'>
										FAQs
									</NavLink>
								</li>
								<li>
									<NavLink to='/team' className='text-blue-500 block text-right hover:underline'>
										Our Team
									</NavLink>
								</li>
								<li>
									<NavLink to='/partners' className='text-blue-500 block text-right hover:underline'>
										Our Partners
									</NavLink>
								</li>
								<li>
									<NavLink to='/nftProject' className='text-blue-500 block text-right hover:underline'>
										NFT Project
									</NavLink>
								</li>
								<li>
									<NavLink to='/web2Project' className='text-blue-500 block text-right hover:underline'>
										Web 2.0 Business
									</NavLink>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<button
							className='text-white py-1 px-2 flex justify-center items-center
							bg-color-primary rounded-3xl hover:bg-color-secondary transition-colors'
							onClick={connectWalletHandler}
						>
							<span className='connectLabel font-semibold uppercase'>{currentAccount ? currentAccount : 'Connect'}</span>
						</button>
					</li>
				</ul>
			</div>
			<div className='hamburgerWrapper' onClick={toggleHamburger}>
				<Hamburger isOpen={hamburgerOpen} />
			</div>
		</nav>
	);
};

export default Navigation;
