import { Color } from "@/types";

import getStoreId from './get-store';


const getColors = async (): Promise<Color[]> => {
    try {
        const storeId = await getStoreId();

        if (!storeId) {
            throw new Error('No store ID available.');
        }

        const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/colors`;
        const res = await fetch(URL);

        if (res.ok) {
            const colorsData = await res.json();
            return colorsData;
        } else {
            throw new Error(`Error fetching colors data `);
        }
    } catch (error) {
        console.error('Error fetching colors data:', error);
        throw error;
    }
};





export default getColors;