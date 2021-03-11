import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Task {
  id: number;
  name: string;
  category: string;
  price: number;
  address: string;
  estimated_time: number;
  category_img: IconDefinition;
  color: string;
  category_path: string;
}
