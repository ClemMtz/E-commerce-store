import { Billboard } from "@/types";

import getStoreId from './get-store';


const getBillboard = async (id: string): Promise<Billboard> => {
    try {
        const storeId = await getStoreId();

        if (!storeId) {
            throw new Error('No store ID available.');
        }

        const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/billboards`;
        const res = await fetch(`${URL}/${id}`);

        if (res.ok) {
            const billboardData = await res.json();
            return billboardData;
        } else {
            throw new Error(`Error fetching billboard data `);
        }
    } catch (error) {
        console.error('Error fetching billboard data:', error);
        throw error;
    }
};


export default getBillboard;