import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

export interface IHeader {}

const Header: React.FunctionComponent<IHeader> = () => {
	const [isLocked, setIsLocked] = useState(false);

	useEffect(() => {
		const addLockedClass = () => setIsLocked(window.scrollY > 10);
		window.addEventListener('scroll', (event) => {
			addLockedClass();
		});

		return () => {
			window.removeEventListener('scroll', (event) => {
				addLockedClass();
			});
		};
	}, []);

	return (
		<header className={`header flex flex-row items-end fixed w-full pt-4 bg-white z-20 ${isLocked ? 'locked' : ''}`}>
			<Navigation />
		</header>
	);
};

export default Header;
