import Sidebar from "@/components/Elements/Sidebar/sidebar.component";
import ProductContainer from "@/components/ProductComponents/ProductContainer/productContainer.component";

export default async function Home() {
  return (
    <main className="flex ">
      <Sidebar current_user={null} />
      <ProductContainer />
    </main>
  );
}
