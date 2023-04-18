import { ReactNode } from 'react';

export interface IAccordionSection {
	id: number;
	title: string;
	content: ReactNode;
}

export const faqs: Array<IAccordionSection> = [
	{
		id: 1,
		title: 'What is an NFT?',
		content: (
			<p>
				NFTs (non-fungible tokens) are digital assets on blockchains that can be used to represent unique items, such as digital
				collectibles, art, game items, community membership, and much more. NFTs provide interesting properties for digital assets
				in that they are identifiable, ownable, scarce, and provably authentic.
			</p>
		),
	},
	{
		id: 2,
		title: 'What is a wallet?',
		content: (
			<p>
				A cryptocurrency wallet is a piece of software or hardware that allows users to store, access, and use their digital assets
				such as Ether, ERC-20 tokens, and NFTs. A crypto wallet also allows you to interact with decentralized applications (dapps)
				- just like this marketplace! A wallet is your self-custodial homebase and portal for all things Ethereum/Web3.
			</p>
		),
	},
	{
		id: 3,
		title: 'How to buy an NFT?',
		content: (
			<p>
				Connect your Ethereum wallet, add funds to your Loopring Layer 2 account, find the NFT of your liking - then buying takes
				just a few clicks and a few seconds! All NFTs are priced in Ether (ETH), and the transaction incurs a small network fee,
				also paid in ETH. Please note: transactions on the blockchain are irreversible, so once you buy an NFT, it is truly yours -
				until you sell it, or send it to a friend!
			</p>
		),
	},
	{
		id: 4,
		title: 'How to sell an NFT?',
		content: (
			<p>
				Connect your Ethereum wallet, and go to your Profile by clicking the 'blockie icon' in the top right of the page. In your
				Owned or Created tab, select the NFT you want to sell, click Actions, then Manage, and List for Sale. Input the price (in
				ETH) that you want to sell your NFT for, and submit.
			</p>
		),
	},
];
