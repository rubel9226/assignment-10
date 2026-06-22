"use client";

import { useUser } from "@/Components/layout/AuthContext";
import Image from "next/image";

export default function ProfileHeader() {
  const { user } = useUser();

  return (
    <div className="bg-base-100 rounded-2xl shadow-md p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src={user?.image || "/avatar.png"}
          alt={user?.name}
          width={120}
          height={120}
          className="rounded-full border"
        />

        <div>
          <h2 className="text-3xl font-bold">{user?.name}</h2>

          <p className="text-base-content/70">
            {user?.email}
          </p>

          <div className="mt-3 flex gap-2 flex-wrap">
            <span className="badge badge-primary">
              {user?.role || "user"}
            </span>

            {user?.isPremium && (
              <span className="badge badge-warning">
                ⭐ Premium
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}