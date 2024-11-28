import { cities } from './cities';

export interface LegalFirm {
  id: string;
  companyName: string;
  city: string;
  pincode: string;
  address: string;
  phone: string;
  specialization: string;
  rating?: number;
  experience?: number;
  languages?: string[];
  areasOfPractice?: string[];
  state?: string;
  region?: string;
  establishedYear?: number;
  website?: string;
  email?: string;
}

// Helper function to generate a unique ID
const generateId = (city: string, index: number) => {
  const cityCode = city.toLowerCase().replace(/\s+/g, '').slice(0, 3);
  return `${cityCode}-${String(index + 1).padStart(3, '0')}`;
};

// Convert specialization to proper format
const formatSpecialization = (spec: string) => {
  return spec.replace('Lawyers- ', '').trim();
};

// Get state based on city
const getStateFromCity = (city: string): string => {
  const cityData = cities.find(c => c.name === city);
  return cityData?.state || 'Unknown';
};

// Get region based on city
const getRegionFromCity = (city: string): string => {
  const cityData = cities.find(c => c.name === city);
  return cityData?.region || 'Unknown';
};

// New firms data from JSON
const newFirmsData = [
  {"c": "Navinkumar Jain", "ct": "Abu Road", "p": 307026, "a": "Ambaji Industrial Area Sadar Bazaar Abu Road ", "m": 9460511111, "l3": "Lawyers- Civil"},
  {"c": "Abdul Rashid Advocate", "ct": "Ajmer", "p": 305001, "a": "Chand Babri  6", "m": 9829124757, "l3": "Lawyers- Civil"},
  {"c": "Advocate Ashwani Swaroop Bhatnagar", "ct": "Ajmer", "p": 305001, "a": "Agra Gate Ramble Road 1/489", "m": 9828534543, "l3": "Lawyers- Civil"},
  {"c": "Advocate Lk Sharma", "ct": "Ajmer", "p": 305001, "a": "Naya Bazar Ghee mandi 250/29", "m": 9829246335, "l3": "Lawyers- Criminal"},
  {"c": "Abdul Razzak", "ct": "Banswara", "p": 327001, "a": "Nai Abadi Main Road ", "m": 9414101994, "l3": "Lawyers- Civil"},
  {"c": "Rajiv Joshi", "ct": "Banswara", "p": 327001, "a": "Mohan Colony Road No 4 ", "m": 9414102321, "l3": "Lawyers- Criminal"},
  {"c": "Madan Mehta", "ct": "Banswara", "p": 327001, "a": "Mohan Colony Gali No 1 104", "m": 9414101728, "l3": "Lawyers- Tax"},
  {"c": "Anil Kumar Mundra", "ct": "Bhilwara", "p": 311001, "a": "Arya Samaj Road Mahaveer Maholla ", "m": 9414259627, "l3": "Lawyers- Civil"},
  {"c": "Arjun Lal Singhvi", "ct": "Bhilwara", "p": 311001, "a": "Shastri Nagar  C-16", "m": 9829153960, "l3": "Lawyers- Civil"},
  {"c": "Deepak Garg", "ct": "Bhilwara", "p": 311021, "a": "Gulabpura Hurda Road Gulabpura ", "m": 9460994854, "l3": "Lawyers- Civil"},
  {"c": "Sharma Ravi Kant", "ct": "Chandigarh", "p": 160015, "a": "Sector 15  Sec 15 A", "m": 9888212188, "l3": "Lawyers- Tax"},
  {"c": "Naresh Kumar Gupta", "ct": "Chandigarh", "p": 160036, "a": "Sector 37  ", "m": 9417121512, "l3": "Lawyers- Tax"},
  {"c": "Puran Chand", "ct": "Chandigarh", "p": 160047, "a": "Sector 44  222", "m": 9417141066, "l3": "Lawyers- Civil"},
  {"c": "M S Nagar & Company", "ct": "Faridabad", "p": 121001, "a": "Sector 10  J-68", "m": 9810088961, "l3": "Lawyers- Civil"},
  {"c": "Satya Paul Verma", "ct": "Faridabad", "p": 121001, "a": "Faridabad City Sector 10 H B Colony 285", "m": 9868330819, "l3": "Lawyers- Civil"},
  {"c": "Rajiv Kanth", "ct": "Faridabad", "p": 121001, "a": "Sector 10  15-H", "m": 9818131622, "l3": "Lawyers- Civil"},
  {"c": "B M Singh Rana", "ct": "Gurgaon", "p": 122001, "a": "Sushant Lok Phase I  26", "m": 9818113555, "l3": "Lawyers- Tax"},
  {"c": "A S Garg", "ct": "Gurgaon", "p": 122001, "a": "Sector 15 Sector 15 Part-I 584", "m": 9810150106, "l3": "Lawyers- Criminal"},
  {"c": "Jakhar Consultants Pvt Ltd", "ct": "Gurgaon", "p": 122001, "a": "Palam Vihar Ansals Road 37/38", "m": 9811678353, "l3": "Lawyers- Criminal"},
  {"c": "Rajmal Jain", "ct": "Jaipur", "p": 302003, "a": "Chaura Rasta Fatehpurion Ka Darwaja 1803", "m": 9828089515, "l3": "Lawyers- Civil"},
  {"c": "Anoop Singh Rawat", "ct": "Jaipur", "p": 302006, "a": "Ajmer Road Tagore Nagar 3", "m": 9829642438, "l3": "Lawyers- Employment"},
  {"c": "Nivedita R Sarda", "ct": "Jaipur", "p": 302015, "a": "Tonk Road  505", "m": 9829083882, "l3": "Lawyers- Litigation"},
  {"c": "V P Tyagi ", "ct": "Ghaziabad", "p": 201001, "a": "Patel Nagar II  B-342", "m": 9810128987, "l3": "Lawyers- Tax"},
  {"c": "Anurag Garg", "ct": "Ghaziabad", "p": 201002, "a": "Raj Nagar  599", "m": 9810744344, "l3": "Lawyers- Civil"},
  {"c": "Raj Pal Singh", "ct": "Ghaziabad", "p": 201002, "a": "Sector 23 Sanjay Nagar H 190", "m": 9811866310, "l3": "Lawyers- Tax"},
  {"c": "N K Rai", "ct": "Jodhpur", "p": 342006, "a": "Mahamandir MI Road 2", "m": 9351238652, "l3": "Lawyers- Criminal"},
  {"c": "G R Poonia", "ct": "Jodhpur", "p": 342011, "a": "Air Force Road Abhaygarh Scheem 84", "m": 9414131054, "l3": "Lawyers- Criminal"},
  {"c": "Surendra Lal Gehlot", "ct": "Jodhpur", "p": 342005, "a": "Basni Saraswati Nagar A/160", "m": 9414036784, "l3": "Lawyers- Defense"},
  {"c": "Sharad Jain & Associates", "ct": "Kota", "p": 324001, "a": "Gumanpura Kothari Road ", "m": 9829038398, "l3": "Lawyers- Civil"},
  {"c": "Ashok Kumar Gupta", "ct": "Kota", "p": 324001, "a": "Gumanpura New Colony D-36", "m": 9829037031, "l3": "Lawyers- Civil"},
  {"c": "Suresh Kabra", "ct": "Kota", "p": 324007, "a": "Shopping Centre  351", "m": 9414190220, "l3": "Lawyers- Civil"},
  {"c": "Vivek Sharma Advocate", "ct": "Ludhiana", "p": 141001, "a": "Ludhiana District Court, Ludhiana Kutchery 330", "m": 9815398173, "l3": "Lawyers- Civil"},
  {"c": "M S Aneja & Co", "ct": "Ludhiana", "p": 141001, "a": "Gill Main Road ", "m": 9872654358, "l3": "Lawyers- Tax"},
  {"c": "Tarlochan Singh Sethi", "ct": "Ludhiana", "p": 141003, "a": "Miller Ganj Gian Market ", "m": 9417335068, "l3": "Lawyers- Tax"},
  {"c": "Alok Kumar Singh", "ct": "Noida", "p": 201301, "a": "Sector 27 Dharam Karam Road ", "m": 9891120915, "l3": "Lawyers- Civil"},
  {"c": "Virender Singh & Co", "ct": "Noida", "p": 201301, "a": "Sector 27 Dharma Cloth Market, Atta CH 205", "m": 9811023862, "l3": "Lawyers- Civil"},
  {"c": "Ravi Sanduja", "ct": "Noida", "p": 201301, "a": "Sector 10  D-194", "m": 9810024137, "l3": "Lawyers- Tax"},
  {"c": "S P Singh & Associates", "ct": "Greater Noida", "p": 201308, "a": "Greater Noida Beta 1 D 138", "m": 9810658772, "l3": "Lawyers- Tax"},
  {"c": "Satish Bhati", "ct": "Greater Noida", "p": 201308, "a": "Greater Noida Gautam Budh Nagar 146", "m": 9871250925, "l3": "Lawyers- Civil"},
  {"c": "Sunil Singh", "ct": "Greater Noida", "p": 201308, "a": "Greater Noida G B Nagar 2", "m": 9312066365, "l3": "Lawyers- Civil"},
  {"c": "Rajendra Kumar Damer", "ct": "Pali", "p": 306401, "a": "Housing Board  5 D 68", "m": 9166177486, "l3": "Lawyers- Criminal"},
  {"c": "Mohan Lal Varma", "ct": "Pali", "p": 306401, "a": "Bapu Nagar Vistar  465", "m": 9001952954, "l3": "Lawyers- Criminal"},
  {"c": "Mukesh Kumar Vaishnav", "ct": "Pali", "p": 306401, "a": "Kachehari Road Navlakha Road ", "m": 9352943716, "l3": "Lawyers- Civil"},
  {"c": "Advocate Rao Ratan Singh", "ct": "Udaipur", "p": 313001, "a": "Fatehpura Kharol Colony 1/174", "m": 9829040255, "l3": "Lawyers- Defense"},
  {"c": "Mahendra Singh Chauhan & Associates", "ct": "Udaipur", "p": 313001, "a": "Shastri Circle Dhartinath Pavelion ", "m": 9414159069, "l3": "Lawyers- Civil"},
  {"c": "S M Soni", "ct": "Udaipur", "p": 313001, "a": "Dhanmandi  130", "m": 9413208766, "l3": "Lawyers- Tax"},
  {"c": "Ajit Singh Solanki", "ct": "Rajsamand", "p": 313325, "a": "Kankroli Bhilwara Road, Rana Raj Singh Colony ", "m": 9460824675, "l3": "Lawyers- Civil"},
  {"c": "Mahaveer Singh Deora", "ct": "Sirohi", "p": 307001, "a": "Sadar Bazar Mochal ", "m": 9414295723, "l3": "Lawyers- Civil"},
  {"c": "Balaji Auto Mobiles", "ct": "Sirohi", "p": 307001, "a": "Sadar Bazar Chapunan Colony ", "m": 9414243889, "l3": "Lawyers- Civil"},
  {"c": "M. Gemawat & Company", "ct": "Sirohi", "p": 307001, "a": "Sadar Bazar Jail Road ", "m": 9414544455, "l3": "Lawyers- Tax"},
  {"c": "Rajender Kumar Mishra", "ct": "Pratapgarh", "p": 230001, "a": "Pratapgarh Gai Ghat Road, Dehelamaio ", "m": 9839446344, "l3": "Lawyers- Property"},
  {"c": "Dinesh B Jariwala", "ct": "Surat", "p": 395002, "a": "Khatodara Ring Road 2/1415", "m": 9879157007, "l3": "Lawyers- Criminal"},
  {"c": "Vyas Rewashankarbhai", "ct": "Surat", "p": 395003, "a": "Ring Road Balaji Road  chauta bazaar 9/1653", "m": 9824225647, "l3": "Lawyers- Tax"},
  {"c": "S S K Associates", "ct": "Surat", "p": 395003, "a": "Bhavanivad Delhi Gate Circle Station Road ", "m": 9974771385, "l3": "Lawyers- Civil"},
  {"c": "Himantsinh U Parmar", "ct": "Vadodara", "p": 390001, "a": "Vadodara Siyaram R V Desai Road 28", "m": 9979344494, "l3": "Lawyers- Asbestos"},
  {"c": "Gurjar Hashmukhbhai Ramnarayan", "ct": "Vadodara", "p": 390001, "a": "Vadodara Turning Point ", "m": 9824274900, "l3": "Lawyers- Civil"},
  {"c": "H M P Consultancy Services", "ct": "Vadodara", "p": 390014, "a": "Makarpura GIDC 36", "m": 9376220205, "l3": "Lawyers- Civil"},
  {"c": "Shekhar Tawade", "ct": "Pune", "p": 411005, "a": "Shivaji Nagar Jangli Maharaj Road ", "m": 9422010081, "l3": "Lawyers- Property"},
  {"c": "R K Dewan & Co", "ct": "Pune", "p": 411005, "a": "Shivaji Nagar  B-1147", "m": 9823074514, "l3": "Lawyers- Patent & Copyright"},
  {"c": "Kulkarni P D", "ct": "Pune", "p": 411030, "a": "Narayan Peth Tilak Road A Darshan Nagar 202", "m": 9730033466, "l3": "Lawyers- Civil"},
  {"c": "Bharat Vaishnawa & Co", "ct": "Mumbai", "p": 400002, "a": "Dhobi Talao  310", "m": 9821067257, "l3": "Lawyers- VAL Index- Voluntary Committee"},
  {"c": "Shashank C.Thatte", "ct": "Mumbai", "p": 400023, "a": "Fort Dalal Street ", "m": 9869169987, "l3": "Lawyers- Criminal"},
  {"c": "Balani Deepak", "ct": "Mumbai", "p": 400050, "a": "Bandra West Sherly Rajan Carter Road 41580", "m": 9820256627, "l3": "Lawyers- Divorce & Family"},
  {"c": "Baweja & Associates", "ct": "Delhi", "p": 110092, "a": "Preet Vihar  12/105", "m": 9871457838, "l3": "Lawyers- Civil"},
  {"c": "M R K Gupta", "ct": "Delhi", "p": 110001, "a": "Tilak Marg  Chamber No. 100", "m": 9811110063, "l3": "Lawyers- Civil"},
  {"c": "The Calcutta Trade Mark Co", "ct": "Delhi", "p": 110006, "a": "Chandni Chowk Fatehpuri 236", "m": 9818481811, "l3": "Lawyers- Patent & Copyright"},
  {"c": "V H Associates", "ct": "Bangalore", "p": 560042, "a": "Dickenson Road Manipal Centre, Sivanchetty Garden 47", "m": 9945465629, "l3": "Lawyers- Litigation"},
  {"c": "Jayanth M Pattanshetti", "ct": "Bangalore", "p": 560001, "a": "Infantry Road  70", "m": 9980530355, "l3": "Lawyers- Defense"},
  {"c": "Ananya Associates", "ct": "Bangalore", "p": 560068, "a": "Bommanahalli Madiwala Main Road 15/95", "m": 9845171719, "l3": "Lawyers- Property"}
].map((firm, index) => ({
  id: generateId(firm.ct, index),
  companyName: firm.c,
  city: firm.ct,
  pincode: firm.p.toString(),
  address: firm.a,
  phone: `+91 ${firm.m}`,
  specialization: formatSpecialization(firm.l3),
  rating: 4.5 + Math.random() * 0.5,
  experience: 5 + Math.floor(Math.random() * 20),
  languages: ['English', 'Hindi'],
  areasOfPractice: [formatSpecialization(firm.l3)],
  state: getStateFromCity(firm.ct),
  region: getRegionFromCity(firm.ct)
}));

// Existing firms with complete data
const existingFirms: LegalFirm[] = [
  {
    id: 'mum-001',
    companyName: 'Shah & Associates',
    city: 'Mumbai',
    pincode: '400001',
    address: 'Nariman Point, Fort',
    phone: '+91 9876543210',
    specialization: 'Corporate Law',
    rating: 4.8,
    experience: 25,
    languages: ['English', 'Hindi', 'Marathi', 'Gujarati'],
    areasOfPractice: ['Mergers & Acquisitions', 'Corporate Restructuring', 'Joint Ventures'],
    state: 'Maharashtra',
    region: 'Western',
    website: 'www.shahassociates.com',
    email: 'contact@shahassociates.com'
  }
];

// Combine existing and new firms
export const legalFirmsData: LegalFirm[] = [...existingFirms, ...newFirmsData];