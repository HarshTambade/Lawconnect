import { legalFirmsData } from '../data/legalFirmsData';

interface QueryResponse {
  answer: string;
  suggestedLawyers?: typeof legalFirmsData;
  isLegalQuery: boolean;
}

const legalKeywords = [
  'law', 'legal', 'lawyer', 'court', 'case', 'rights', 'justice', 'lawsuit',
  'criminal', 'civil', 'property', 'divorce', 'tax', 'corporate', 'litigation',
  'patent', 'copyright', 'employment', 'defense', 'family', 'business', 'contract'
];

export const processQuery = (query: string): QueryResponse => {
  const queryLower = query.toLowerCase();
  const isLegalQuery = legalKeywords.some(keyword => queryLower.includes(keyword));

  if (!isLegalQuery) {
    return {
      answer: "I apologize, but I can only assist with legal and professional matters. For personal questions or non-legal topics, please consult appropriate resources or professionals.",
      isLegalQuery: false
    };
  }

  // Find relevant lawyers based on query keywords
  const relevantLawyers = legalFirmsData.filter(lawyer => {
    const specialization = lawyer.specialization.toLowerCase();
    return queryLower.includes(specialization) || 
           lawyer.areasOfPractice?.some(area => 
             queryLower.includes(area.toLowerCase())
           );
  });

  let answer = "Based on your query, I can help you with legal information. ";
  
  if (relevantLawyers.length > 0) {
    answer += "I've also found some legal professionals who specialize in this area.";
  } else {
    answer += "Would you like me to help you find a lawyer with specific expertise?";
  }

  return {
    answer,
    suggestedLawyers: relevantLawyers.length > 0 ? relevantLawyers : undefined,
    isLegalQuery: true
  };
};

export const getLawyersBySpecialization = (specialization: string) => {
  return legalFirmsData.filter(lawyer => 
    lawyer.specialization.toLowerCase() === specialization.toLowerCase() ||
    lawyer.areasOfPractice?.some(area => 
      area.toLowerCase() === specialization.toLowerCase()
    )
  );
};