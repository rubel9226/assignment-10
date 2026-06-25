import ContributorCard from "./ContributorCard";

export default function MostActiveContributors({contributors=[]}) {
  return (
    <div className="bg-[#1D232A] rounded-3xl p-6">
      <h2 className="text-xl font-semibold mb-5">
        Most Active Contributors
      </h2>

      <div className="space-y-4">
        {contributors.map((user) => (
          <ContributorCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}