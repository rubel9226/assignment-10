import EditProfileForm from "./Components/EditProfileForm";
import ProfileHeader from "./Components/ProfileHeader";
import ProfileStats from "./Components/ProfileStats";
import UserLessons from "./Components/UserLessons";

export default function ProfilePage() {
  return (
    <div className="space-y-8 container mx-auto">
      <ProfileHeader />
      <ProfileStats />
      <EditProfileForm />
      <UserLessons />
    </div>
  );
}