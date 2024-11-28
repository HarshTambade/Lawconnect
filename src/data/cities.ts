export interface City {
  id: string;
  name: string;
  state: string;
  region: string;
}

export const cities: City[] = [
  // Rajasthan
  { id: 'abu', name: 'Abu Road', state: 'Rajasthan', region: 'Northern' },
  { id: 'ajm', name: 'Ajmer', state: 'Rajasthan', region: 'Northern' },
  { id: 'ban', name: 'Banswara', state: 'Rajasthan', region: 'Northern' },
  { id: 'bhi', name: 'Bhilwara', state: 'Rajasthan', region: 'Northern' },
  { id: 'jai', name: 'Jaipur', state: 'Rajasthan', region: 'Northern' },
  { id: 'jod', name: 'Jodhpur', state: 'Rajasthan', region: 'Northern' },
  { id: 'kot', name: 'Kota', state: 'Rajasthan', region: 'Northern' },
  { id: 'pal', name: 'Pali', state: 'Rajasthan', region: 'Northern' },
  { id: 'udp', name: 'Udaipur', state: 'Rajasthan', region: 'Northern' },
  { id: 'raj', name: 'Rajsamand', state: 'Rajasthan', region: 'Northern' },
  { id: 'sir', name: 'Sirohi', state: 'Rajasthan', region: 'Northern' },
  
  // Maharashtra
  { id: 'mum', name: 'Mumbai', state: 'Maharashtra', region: 'Western' },
  { id: 'pun', name: 'Pune', state: 'Maharashtra', region: 'Western' },
  { id: 'nsk', name: 'Nashik', state: 'Maharashtra', region: 'Western' },
  { id: 'ngp', name: 'Nagpur', state: 'Maharashtra', region: 'Western' },
  { id: 'aur', name: 'Aurangabad', state: 'Maharashtra', region: 'Western' },
  { id: 'thn', name: 'Thane', state: 'Maharashtra', region: 'Western' },
  
  // Gujarat
  { id: 'ahm', name: 'Ahmedabad', state: 'Gujarat', region: 'Western' },
  { id: 'sur', name: 'Surat', state: 'Gujarat', region: 'Western' },
  { id: 'vad', name: 'Vadodara', state: 'Gujarat', region: 'Western' },
  
  // Karnataka
  { id: 'blr', name: 'Bangalore', state: 'Karnataka', region: 'Southern' },
  { id: 'mys', name: 'Mysuru', state: 'Karnataka', region: 'Southern' },
  { id: 'hub', name: 'Hubballi', state: 'Karnataka', region: 'Southern' },
  
  // Delhi NCR
  { id: 'del', name: 'Delhi', state: 'Delhi', region: 'Northern' },
  { id: 'gur', name: 'Gurgaon', state: 'Haryana', region: 'Northern' },
  { id: 'noi', name: 'Noida', state: 'Uttar Pradesh', region: 'Northern' },
  { id: 'gno', name: 'Greater Noida', state: 'Uttar Pradesh', region: 'Northern' },
  { id: 'ghz', name: 'Ghaziabad', state: 'Uttar Pradesh', region: 'Northern' },
  { id: 'fbd', name: 'Faridabad', state: 'Haryana', region: 'Northern' },
  
  // Punjab & Chandigarh
  { id: 'chd', name: 'Chandigarh', state: 'Chandigarh', region: 'Northern' },
  { id: 'ldh', name: 'Ludhiana', state: 'Punjab', region: 'Northern' }
];