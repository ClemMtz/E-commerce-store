import qs from "query-string";

import { Product } from "@/types";

import getStoreId from './get-store';

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}



const getProducts = async (query: Query): Promise<Product[]> => {
    try {
        const storeId = await getStoreId();

        if (!storeId) {
            throw new Error('No store ID available.');
        }

        const URL = `${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products`;
        const url = qs.stringifyUrl({
            url: URL,
            query: {
                colorId: query.colorId,
                sizeId: query.sizeId,
                categoryId: query.categoryId,
                isFeatured: query.isFeatured,
            },
        })

        const res = await fetch(url);

        if (res.ok) {
            const ProductsData = await res.json();
            return ProductsData;
        } else {
            throw new Error(`Error fetching products data `);
        }
    } catch (error) {
        console.error('Error fetching products data:', error);
        throw error;
    }
};

export default getProducts;