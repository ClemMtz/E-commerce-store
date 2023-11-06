import { Category } from "@/types";

import getStoreId from './get-store';


const getCategory = async (id: string): Promise<Category> => {
    try {
        const storeId = await getStoreId();

        if (!storeId) {
            throw new Error('No store ID available.');
        }

        const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;
        const res = await fetch(`${URL}/${id}`);

        if (res.ok) {
            const categoryData = await res.json();
            return categoryData;
        } else {
            throw new Error(`Error fetching category data `);
        }
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};


export default getCategory;