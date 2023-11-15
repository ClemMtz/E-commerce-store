import axios from "axios"



export default function getStoreId() {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/stores/store`;

    return axios.get(apiUrl)
        .then((response) => {
            const data = response.data.id;
            if (data) {
                return data;
            } else {
                return null
            }
        })
        .catch((error) => {
            console.error('Error fetching storeId:', error);
        });
};


