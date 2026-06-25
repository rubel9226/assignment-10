import Image from "next/image";

const contributors = [
  {
    id: 1,
    name: "Alex Rivera",
    lessons: 12,
    image: "/users/user1.jpg",
  },
  {
    id: 2,
    name: "Julian V.",
    lessons: 9,
    image: "/users/user2.jpg",
  },
  {
    id: 3,
    name: "Sarah Lee",
    lessons: 8,
    image: "/users/user3.jpg",
  },
  {
    id: 4,
    name: "Liam Smith",
    lessons: 7,
    image: "/users/user4.jpg",
  },
];

export default function TopContributors({contributors}) {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-4">

        <div className="bg-slate-900 border border-white/10 rounded-[32px] p-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="max-w-md">
              <h2 className="text-4xl font-bold">
                Top Contributors
              </h2>

              <p className="text-slate-400 mt-4">
                The voices making the biggest impact this week.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {contributors.map((user) => (
                <div
                  key={user.id}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 mx-auto">
                    <Image
                      src={user?.creatorImage}
                      alt={'Image'}
                      fill
                      className="rounded-full object-cover border-4 border-indigo-500"
                    />
                  </div>

                  <h4 className="mt-4 font-semibold">
                    {user?.creatorName}
                  </h4>

                  <p className="text-indigo-400 text-sm">
                    {user?.totalLessons} Lessons
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}