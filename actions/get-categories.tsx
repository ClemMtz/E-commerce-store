import { Category } from "@/types";

import getStoreId from './get-store';


const getCategories = async (): Promise<Category> => {
    try {
        const storeId = await getStoreId();

        if (!storeId) {
            throw new Error('No store ID available.');
        }

        const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories`;
        const res = await fetch(URL);

        if (res.ok) {
            const categoriesData = await res.json();
            return categoriesData;
        } else {
            throw new Error(`Error fetching categories data `);
        }
    } catch (error) {
        console.error('Error fetching categories data:', error);
        throw error;
    }
};



export default getCategories;