import getBillboard from "@/actions/get-billboard";

import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("7eca4609-57df-4b75-9823-1d3bf460e8c7");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    )
}

export default HomePage;