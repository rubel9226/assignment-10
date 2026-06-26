'use client';

import { useUser } from "@/Components/layout/AuthContext";
import { BsShieldCheck } from "react-icons/bs";

export default function AdminProfileCard() {
    const {user} = useUser();
    console.log(user, 'user admin');

    return (
        <div className="bg-base-100 rounded-xl shadow p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">

                <img
                    src={user?.image}
                    alt=""
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />

                <div className="flex-1">

                    <h2 className="text-3xl font-bold">
                        {user?.name}
                    </h2>

                    <p className="text-base-content/70 mt-1">
                        {user?.email}
                    </p>

                    <div className="badge badge-primary gap-2 mt-4">
                        <BsShieldCheck size={16} />
                        Admin
                    </div>

                </div>

            </div>
        </div>
    );
}