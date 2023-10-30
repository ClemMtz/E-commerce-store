import axios from 'axios';

export default function getFirstBillboard() {

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

    return axios.get(apiUrl)
        .then((response) => {
            const billboardData = response.data[0];
            if (billboardData && billboardData.id) {
                return (billboardData.id);
            } else {
                return (null);
            }
        })
        .catch((error) => {
            console.error('Error fetching billboard data:', error);
        });
}