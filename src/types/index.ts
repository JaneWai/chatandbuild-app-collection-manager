export type ProductType = 
  | 'Productivity' 
  | 'Games' 
  | 'Education' 
  | 'Entertainment' 
  | 'Utility' 
  | 'Social' 
  | 'Business' 
  | 'Health & Fitness'
  | 'Hobby'
  | 'Crypto'
  | 'Other';

export interface AppItem {
  id: string;
  name: string;
  description: string;
  link: string;
  productType: ProductType;
}
