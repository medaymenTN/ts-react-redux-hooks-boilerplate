import { API } from '../middlewares/middleware';

type Product = {
  id: string;
  price: string;
  label: string;
};
export const getAllProducts = (): Promise<Product[]> => {
  return API.get('some url');
};
export const addProducts = (product: Product): Promise<any> => {
  return API.post('some url', { product });
};
