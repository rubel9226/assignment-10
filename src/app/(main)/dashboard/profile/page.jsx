import { auth } from "@/lib/auth";
import EditProfileForm from "./Components/EditProfileForm";
import ProfileHeader from "./Components/ProfileHeader";
import ProfileStats from "./Components/ProfileStats";
import UserLessons from "./Components/UserLessons";
import { headers } from "next/headers";
import { api } from "@/lib/baseAPI";

export default async function ProfilePage() {
  const {token} = await auth.api.getToken({
      headers: await headers()
  });
  

  let lessons = [];
  let stats = {};
  try {
    const res = await api.get( `/users/my-public-lessons`, {
          headers: {
              Authorization: token, 
          }
      }
    );
    const statsRes = await api.get( `/users/profile-stats`, {
          headers: {
              Authorization: token, 
          }
      }
    );
    lessons = res?.data?.payload; 
    stats = statsRes?.data?.payload; 
  } catch (error) {
    console.log(error); 
  } 

  return (
    <div className="space-y-8 container mx-auto">
      <ProfileHeader />
      <ProfileStats stats={stats} />
      <EditProfileForm />
      <UserLessons lessons={lessons} />
    </div>
  );
}