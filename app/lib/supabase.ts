export interface Category {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  title: string;
  category_id: string;
  duration: string;
  category: string;
  url:string;
  image?:string;
}

export const categories: Category[] = [
  { id: '1', name: 'SAP' },
  { id: '2', name: 'Development' },
  { id: '3', name: 'Data Analytics' }
];

export const courses: Course[] = [
  { id: '1', title: 'SAP SD', category_id: '1', duration: '8 Weeks', category: 'SAP', url: 'courses/sales-distribution', image: '/SD.png' },
  { id: '2', title: 'SAP MM', category_id: '1', duration: '8 Weeks', category: 'SAP' ,url: 'courses/material-management', image: '/MM.png' },
  { id: '3', title: 'SAP FICO', category_id: '1', duration: '10 Weeks', category: 'SAP', url: 'courses/finance', image: '/FICO.png'},
  { id: '4', title: 'SAP PS', category_id: '1', duration: '8 Weeks',category: 'SAP',url: 'courses/project-systems',image: '/PS.png'  },
  { id: '5', title: 'SAP ABAP', category_id: '1', duration: '12 Weeks',category: 'SAP',url: 'courses/ABAP', image: '/ABAP.png' },
  { id: '6', title: 'SAP Fiori', category_id: '1', duration: '6 Weeks', category: 'SAP',url: 'courses/FIORI',image: '/FIORI.png' },
  { id: '7', title: 'SAP BTP', category_id: '1', duration: '8 Weeks', category: 'SAP',url:'courses/BTP',image: '/BTP.png' },
  { id: '8', title: 'SAP EC', category_id: '1', duration: '8 Weeks', category: 'SAP' ,url:'courses/SF-EC',image: '/EC.png'},
  { id: '9', title: 'SF PMGM', category_id: '1', duration: '8 Weeks', category: 'SAP',url:'courses/SF-PMGM',image: '/PMGM.png' },
  { id: '10', title: 'SF RCM', category_id: '1', duration: '8 Weeks', category: 'SAP',url:'courses/SF-RCM',image: '/RCM.png' },
  { id: '11', title: 'SF RMK', category_id: '1', duration: '8 Weeks', category: 'SAP',url:'courses/SF-RMK',image: '/RMK.png' },
  { id: '12', title: 'SF OMB', category_id: '1', duration: '8 Weeks',  category: 'SAP',url:'courses/offboarding',image: '/ONB.png' },
  { id: '13', title: 'SF OFB', category_id: '1', duration: '8 Weeks',  category: 'SAP',url:'courses/onboarding',image: '/OFB.png' },
  { id: '14', title: 'Full Stack Development', category_id: '2', duration: '16 Weeks', category: 'Development',url:'courses/fullstack-development',image: '/fullstack-development.jpg' },
  { id: '15', title: 'Excel & Power BI', category_id: '3', duration: '6 Weeks', category: 'Data Analytics',url:'courses/data-analytics',image: '/data-analytics.jpg' },
  { id: '16', title: 'SAC', category_id: '3', duration: '8 Weeks', category: 'Data Analytics', url:'courses/SAC',image: '/SAC.jpg'},
  { id: '17', title: 'AI/ML', category_id: '2', duration: '8 Weeks', category: 'Development',url:'courses/AI-ML',image: '/AIML.jpg' },
];
