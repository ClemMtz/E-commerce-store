import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import getFirstBillboard from "@/actions/get-first-billboard";

import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"


export const revalidate = 0;


const HomePage = async () => {

    try {

        const firstBillboardID = await getFirstBillboard();

        const billboard = await getBillboard(firstBillboardID);
        const products = await getProducts({ isFeatured: true });


        return (
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard} />
                    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                        <ProductList title="Featured Products" items={products} />
                    </div>
                </div>
            </Container>
        )

    } catch (error) {
        console.error('Error:', error);
    }
};

export default HomePage;
