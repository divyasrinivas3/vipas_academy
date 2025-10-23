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
}

export const categories: Category[] = [
  { id: '1', name: 'SAP' },
  { id: '2', name: 'Development' },
  { id: '3', name: 'Data Analytics' }
];

export const courses: Course[] = [
  { id: '1', title: 'SAP SD', category_id: '1', duration: '8 Weeks', category: 'SAP', url: 'courses/sales-distribution', },
  { id: '2', title: 'SAP MM', category_id: '1', duration: '8 Weeks', category: 'SAP' ,url: 'courses/material-management', },
  { id: '3', title: 'SAP FICO', category_id: '1', duration: '10 Weeks', category: 'SAP', url: 'courses/finance', },
  { id: '4', title: 'SAP PS', category_id: '1', duration: '8 Weeks',category: 'SAP',url: 'courses/project-systems',  },
  { id: '5', title: 'SAP ABAP', category_id: '1', duration: '12 Weeks',category: 'SAP',url: 'courses/ABAP',  },
  { id: '6', title: 'SAP Fiori', category_id: '1', duration: '6 Weeks', category: 'SAP',url: 'courses/FIORI' },
  { id: '7', title: 'SAP BTP', category_id: '1', duration: '8 Weeks', category: 'SAP',url:'courses/BTP' },
  { id: '8', title: 'SAP EC', category_id: '1', duration: '8 Weeks', category: 'SAP' ,url:'courses/SF-EC'},
  { id: '9', title: 'SF PMGM', category_id: '1', duration: '8 Weeks', category: 'SAP',url:'courses/SF-PMGM' },
  { id: '10', title: 'SF RCM', category_id: '1', duration: '8 Weeks', category: 'SAP',url:'courses/SF-RCM' },
  { id: '11', title: 'SF RMK', category_id: '1', duration: '8 Weeks', category: 'SAP',url:'courses/SF-RMK' },
  { id: '12', title: 'SF OMB/OFB', category_id: '1', duration: '8 Weeks',  category: 'SAP',url:'courses/offboarding' },
  { id: '13', title: 'SF OFB', category_id: '1', duration: '8 Weeks',  category: 'SAP',url:'courses/onboarding' },
  { id: '14', title: 'Full Stack Development', category_id: '2', duration: '16 Weeks', category: 'Development',url:'courses/fullstack-development' },
  { id: '15', title: 'Excel & Power BI', category_id: '3', duration: '6 Weeks', category: 'Data Analytics',url:'courses/data-analytics' },
  { id: '16', title: 'SAC', category_id: '3', duration: '8 Weeks', category: 'Data Analytics', url:'courses/SAC'},
  { id: '17', title: 'AI/ML', category_id: '2', duration: '8 Weeks', category: 'Development',url:'courses/AI-ML' },
];
