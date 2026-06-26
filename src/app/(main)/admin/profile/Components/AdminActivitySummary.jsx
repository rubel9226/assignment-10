import ProfileStatCard from "./ProfileStatCard";

export default function AdminActivitySummary() {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-5">
        Activity Summary
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <ProfileStatCard
          title="Lessons Moderated"
          value="152"
        />

        <ProfileStatCard
          title="Reports Reviewed"
          value="84"
        />

        <ProfileStatCard
          title="Actions Taken"
          value="67"
        />

      </div>

    </div>
  );
}
