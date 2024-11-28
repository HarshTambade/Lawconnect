export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  content: string;
  requiresStamp?: boolean;
  stampValue?: string;
}

export const documentTemplates: Template[] = [
  {
    id: 'nda-basic',
    name: 'Non-Disclosure Agreement',
    category: 'Agreements',
    description: 'Standard NDA for business confidentiality',
    content: `NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement (the "Agreement") is entered into as of [DATE] by and between:

[PARTY A NAME] ("Disclosing Party")
Address: [PARTY A ADDRESS]

and

[PARTY B NAME] ("Receiving Party")
Address: [PARTY B ADDRESS]

1. Definition of Confidential Information
   Confidential Information shall mean any and all technical and non-technical information provided by Disclosing Party to Receiving Party, including but not limited to [SPECIFIC ITEMS].

2. Receiving Party's Obligations
   The Receiving Party agrees to:
   a) Hold the Confidential Information in strict confidence
   b) Not disclose such Confidential Information to any third parties
   c) Use the Confidential Information solely for [PURPOSE]

3. Term
   This Agreement shall remain in effect for [DURATION] from the date of execution.

[SIGNATURE BLOCKS]`,
    requiresStamp: true,
    stampValue: '100'
  },
  {
    id: 'service-agreement',
    name: 'Service Agreement',
    category: 'Contracts',
    description: 'Professional services contract template',
    content: `SERVICE AGREEMENT

This Service Agreement (the "Agreement") is made between:

[SERVICE PROVIDER NAME] ("Provider")
and
[CLIENT NAME] ("Client")

1. Services
   Provider agrees to provide the following services: [SERVICES]

2. Compensation
   Client agrees to pay [AMOUNT] for the services according to the following schedule: [PAYMENT TERMS]

3. Term
   This Agreement shall commence on [START DATE] and continue until [END DATE]

4. Termination
   Either party may terminate this Agreement with [NOTICE PERIOD] written notice.

[SIGNATURE BLOCKS]`,
    requiresStamp: true,
    stampValue: '500'
  },
  {
    id: 'employment-contract',
    name: 'Employment Contract',
    category: 'Employment',
    description: 'Standard employment agreement',
    content: `EMPLOYMENT AGREEMENT

This Employment Agreement (the "Agreement") is made between:

[EMPLOYER NAME] ("Employer")
and
[EMPLOYEE NAME] ("Employee")

1. Position
   Employee is hired for the position of [POSITION] starting [START DATE]

2. Compensation
   Base salary: [AMOUNT]
   Benefits: [BENEFITS]

3. Working Hours
   Standard working hours shall be [HOURS] per week

4. Duties and Responsibilities
   [DETAILED RESPONSIBILITIES]

[SIGNATURE BLOCKS]`,
    requiresStamp: true,
    stampValue: '100'
  },
  {
    id: 'rental-agreement',
    name: 'Rental Agreement',
    category: 'Real Estate',
    description: 'Property rental/lease agreement',
    content: `RENTAL AGREEMENT

This Rental Agreement is made on [DATE] between:

[LANDLORD NAME] ("Landlord")
and
[TENANT NAME] ("Tenant")

1. Property
   Address: [PROPERTY ADDRESS]

2. Term
   Lease Period: [START DATE] to [END DATE]
   Monthly Rent: [AMOUNT]
   Security Deposit: [DEPOSIT AMOUNT]

3. Utilities
   The following utilities are included/not included: [UTILITIES LIST]

4. Maintenance
   [MAINTENANCE TERMS]

[SIGNATURE BLOCKS]`,
    requiresStamp: true,
    stampValue: '100'
  },
  {
    id: 'power-of-attorney',
    name: 'Power of Attorney',
    category: 'Legal',
    description: 'General power of attorney document',
    content: `POWER OF ATTORNEY

I, [PRINCIPAL NAME], residing at [ADDRESS], hereby appoint [ATTORNEY NAME] as my Attorney-in-Fact ("Agent").

POWERS GRANTED:
1. Real Estate Transactions
2. Banking Transactions
3. Business Operations
4. Tax Matters

This Power of Attorney shall become effective immediately and shall remain in effect until [END DATE] or until revoked.

[NOTARY BLOCK]
[SIGNATURE BLOCKS]`,
    requiresStamp: true,
    stampValue: '100'
  },
  {
    id: 'privacy-policy',
    name: 'Privacy Policy',
    category: 'Policies',
    description: 'Website/app privacy policy template',
    content: `PRIVACY POLICY

Last Updated: [DATE]

1. Information We Collect
   [COMPANY NAME] ("we," "our," or "us") collects the following types of information:
   - Personal Information
   - Usage Data
   - Cookies

2. How We Use Your Information
   We use the collected information for:
   - Providing our services
   - Improving user experience
   - Communication

3. Information Sharing
   We do not sell your personal information to third parties.

4. Security Measures
   We implement appropriate security measures to protect your information.

5. Your Rights
   You have the right to:
   - Access your data
   - Request corrections
   - Request deletion`
  },
  {
    id: 'will',
    name: 'Last Will and Testament',
    category: 'Legal',
    description: 'Basic will template',
    content: `LAST WILL AND TESTAMENT

I, [FULL NAME], residing at [ADDRESS], declare this to be my Last Will and Testament.

1. Revocation
   I hereby revoke all prior wills and codicils.

2. Marital Status
   I am married to [SPOUSE NAME].

3. Children
   My children are: [CHILDREN NAMES]

4. Distribution of Property
   [DISTRIBUTION DETAILS]

5. Executor
   I appoint [EXECUTOR NAME] as executor of my will.

[SIGNATURE BLOCKS]
[WITNESS BLOCKS]`,
    requiresStamp: true,
    stampValue: '100'
  }
];