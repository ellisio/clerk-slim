import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

export const metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const user: User | null = await currentUser();

  return <h1>Sup, {user?.firstName}!</h1>;
}
