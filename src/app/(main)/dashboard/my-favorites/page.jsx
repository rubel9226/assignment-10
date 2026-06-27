import { api } from "@/lib/baseAPI";
import { useUser } from "@/Components/layout/AuthContext";
import FavoritesCardTable from "./Components/FavoritesCardTable";
import FavoritesFilter from "./Components/FavoritesFilter";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function MyFavoritesPage() { 

  let lessons = [];

  try {
    const token = await auth.api.getToken({
        headers: await headers ()
    });
    const res = await api.get(`/users/favorite-lessons`, {
      headers: {
          Authorization: token.token,
      }
    }); 
    lessons = res?.data?.payload;
  } catch (error) {
    console.log(error); 
  }
  return (
    <div className="space-y-6 container mx-auto mt-4 min-h-[50vh]">
      <FavoritesCardTable lessons={lessons}  />
    </div>
  );
}