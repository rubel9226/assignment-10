import AdminActivitySummary from "./Components/AdminActivitySummary";
import AdminProfileCard from "./Components/AdminProfileCard";
import UpdateProfileForm from "./Components/UpdateProfileForm";

export default function AdminProfilePage() {
  return (
    <div className="space-y-8 container mx-auto">
      <AdminProfileCard />

      <AdminActivitySummary />

      <UpdateProfileForm />
    </div>
  );
}