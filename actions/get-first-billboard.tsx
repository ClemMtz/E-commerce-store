import axios from 'axios';

import getStoreId from './get-store';



export default async function getFirstBillboard() {
    try {
        const storeId = await getStoreId();

        if (!storeId) {
            console.log('No store ID available.');
        }

        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/billboards`;

        const response = await axios.get(apiUrl);
        const billboardData = response.data[1];

        if (billboardData && billboardData.id) {
            return billboardData.id;
        }

    } catch (error) {
        console.error('Error fetching billboard data:', error);

    }
}