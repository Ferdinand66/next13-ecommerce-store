import getHome from "@/actions/get-home";
import getHomes from "@/actions/get-homes";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Home from "@/components/ui/home";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  // const home = await getHome('dbba6163-218a-4f41-9ec2-c9e4c00fb104')
  const homes = await getHomes()


  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Home data={homes[0]} />
        <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Productos Destacados" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
