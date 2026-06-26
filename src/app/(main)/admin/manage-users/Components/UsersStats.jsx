export default function UsersStats({usersStats}) {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      <div className="bg-[#1D232A] rounded-3xl p-6">
        <h3 className="text-gray-400">
          Total Users
        </h3>

        <h2 className="text-4xl font-bold mt-3">
          {usersStats.totalUsers}
        </h2>
      </div>

      <div className="bg-[#1D232A] rounded-3xl p-6">
        <h3 className="text-gray-400">
          Admins
        </h3>

        <h2 className="text-4xl font-bold mt-3">
          {usersStats.totalAdmins}
        </h2>
      </div>

      <div className="bg-[#1D232A] rounded-3xl p-6">
        <h3 className="text-gray-400">
          Regular Users
        </h3>

        <h2 className="text-4xl font-bold mt-3">
          {usersStats.totalRegularUsers}
        </h2>
      </div>
    </div>
  );
}