import { sha256 } from 'js-sha256';

import { Handler } from '@netlify/functions';

import { accessCodes } from './accessCodes';

const handler: Handler = async (event, context) => {
	if (event?.body) {
		const { inviteCode } = JSON.parse(event?.body);
		const validCode = accessCodes.findIndex((item) => {
			return item === sha256(inviteCode);
		});

		if (validCode > -1) {
			accessCodes.splice(validCode, 1);

			return {
				statusCode: 200,
				body: JSON.stringify({ validCode: true }),
			};
		} else {
			return {
				statusCode: 401,
				body: JSON.stringify({ validCode: false, errorCode: 'Access code not found' }),
			};
		}
	} else {
		return {
			statusCode: 401,
			body: JSON.stringify({ validCode: false, errorCode: 'No access code entered.' }),
		};
	}
};

export { handler };
