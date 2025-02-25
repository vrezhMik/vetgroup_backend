import Sidebar from "@/components/Elements/Sidebar/sidebar.component";
import UserPageContent from "@/components/UserComponents/UserPageContent/userPageContent.component";
import { get_current_user } from "@/utils/query";
import { cookies } from "next/headers";
export default async function UserPage() {
  const serverCookies = await cookies();

  const documentId = serverCookies.get("document")?.value || "";
  const user = await get_current_user(documentId);


  const current_user = {
    documentId: documentId,
    first_name: user.vetgroupUsers[0].user.first_name,
    last_name: user.vetgroupUsers[0].user.last_name,
    company: user.vetgroupUsers[0].user.company,
  };
  return (
    <main className="flex relative">
      <Sidebar current_user={current_user} />
      <UserPageContent />
    </main>
  );
}
