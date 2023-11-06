import { Product } from "@/types";

import getStoreId from './get-store';



const getProduct = async (id: string): Promise<Product> => {
    try {
        const storeId = await getStoreId();

        if (!storeId) {
            throw new Error('No store ID available.');
        }

        const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`;
        const res = await fetch(`${URL}/${id}`);

        if (res.ok) {
            const productData = await res.json();
            return productData;
        } else {
            throw new Error(`Error fetching product data `);
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
        throw error;
    }
};

export default getProduct;