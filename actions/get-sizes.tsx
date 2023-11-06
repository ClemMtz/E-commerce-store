import { Size } from "@/types";

import getStoreId from './get-store';



const getSizes = async (): Promise<Size[]> => {
    try {
        const storeId = await getStoreId();

        if (!storeId) {
            throw new Error('No store ID available.');
        }

        const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/sizes`;
        const res = await fetch(URL);

        if (res.ok) {
            const sizesData = await res.json();
            return sizesData;
        } else {
            throw new Error(`Error fetching sizes data `);
        }
    } catch (error) {
        console.error('Error fetching sizes data:', error);
        throw error;
    }
};

export default getSizes;