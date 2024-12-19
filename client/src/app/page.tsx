import AdminContent from "@/components/AdminContent/adminConten.compnent";
import Sidebar from "@/components/Sidebar/sidebar.component";

export default function Home() {
  return (
    <main className="flex ">
      <Sidebar />
      <AdminContent />
    </main>
  );
}
