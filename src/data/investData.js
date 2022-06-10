import Institutions from '../images/invest/institutions.png';
import RealEstate from '../images/invest/realestate.png';
import Creatives from '../images/invest/creatives.png';
import CommunityCenter from '../images/invest/communitycenter.png';
import Crypto from '../images/invest/crypto.png';

const investData = [
	{
		id: 1,
		name: 'institutions',
		image: Institutions,
		title: 'Institutions',
		bulletPoints: [
			'Local, State, Federal offices (SEC, Crypto)',
			'Schools/Universities',
			'Economic Development Agencies',
			'Community Housing Agencies',
		],
		text:
			'Schools are funded through property taxes. If the community has depressed home values, then the amount of tax revenue available to fund the schools and other needs will be insufficient to provide a quality education to its community members. Without sufficient education the cycle of poverty is repeated for both the person and property. CTM can break this cycle by generating programs to address both supplemental education service needs and provide a catalyst for revitalization and appreciation of tax revenue basis.',
		text2: '',
	},
	{
		id: 2,
		name: 'realEstate',
		image: RealEstate,
		title: 'Real Estate Pros',
		bulletPoints: [
			'Agents/Brokers',
			'REI/Associations',
			'Closing attorneys/title offices',
			'Lenders/Note Investors',
		],
		text:
			'Real estate professionals of all types can participate in our affiliate program designed to support local acquisition teams and their needs, as well as generate and funnel new business opportunities/leads. Affiliate roles are limited and on first come basis.',
		text2: 'Interested in becoming an affiliate partner? ',
		button: 'Click here!',
	},
	{
		id: 3,
		name: 'creatives',
		image: Creatives,
		title: 'Media & Creatives',
		bulletPoints: [
			'Artists',
			"Art Co's",
			"Media Co's",
			'Influencers',
			'Musicians',
		],
		text:
			'We support local artists and collectives, events and programs relating to arts and culture, as well produce and distribute digital media content and a curated a library of non-fungible token works of art (NFT’s). Local artists can thrive when communities offer a place to create and exhibit their works.  ',
		text2: '',
	},
	{
		id: 4,
		name: 'communityCenter',
		image: CommunityCenter,
		title: 'Community',
		bulletPoints: [
			'Community Centers',
			'Non-profit orgs',
			'Business Community',
		],
		text:
			'Community culture and entertainment activities are important parts of community health and stability. It’s the difference between simply surviving and thriving. CTM supports the arts, culture, and entertainment through direct investments into community centers across the US.',
		text2: '',
	},
	{
		id: 5,
		name: 'crypto',
		image: Crypto,
		title: 'DeFi/Crypto',
		bulletPoints: [
			'Crypto investors',
			'Miners',
			'Liquidity pools',
			'Crypto Dev/Projects',
			'Exchanges',
		],
		text:
			'CTM provides investment capital to support property revitalization operations. We offer unique technology driven commercial sites and data centers services such as shared hosting and white space to mining pool operators and others, in underserved communities where real estate costs are lower and the social impact is greatest.',
		text2: '',
	},
];

export default investData;
