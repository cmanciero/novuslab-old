import './Main.scss';

import React from 'react';

import { ComingSoon } from './components';

export interface IMain {}

const Main: React.FunctionComponent<IMain> = () => {
	return (
		<>
			{/* <main>
				<Hero />
				<Vision />
				<Solutions />
			</main> */}
			<ComingSoon />
		</>
	);
};

export default Main;
