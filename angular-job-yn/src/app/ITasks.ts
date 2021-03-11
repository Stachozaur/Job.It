import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Task {
  id: number;
  name: string;
  category: string;
  price: number;
  adress: string;
  estimated_time: number;
  category_img: IconDefinition;
  color: string;
  description: string;
}
