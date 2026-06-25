"use client";

import { useState } from "react";
import { useUser } from "@/Components/layout/AuthContext";
import { api } from "@/lib/baseAPI";
import Swal from "sweetalert2";
// import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
// import { headers } from "next/headers";

export default function EditProfileForm() {
  const { user } = useUser();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    image: user?.image || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authClient.updateUser({
        name: formData.name,
        image: formData.image,
      });

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const disabled = formData?.name === user?.name && formData?.image === user?.image ;
  console.log(disabled);

  return (
    <div className="bg-base-100 shadow rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        Edit Profile
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          value={formData.image}
          onChange={(e) =>
            setFormData({
              ...formData,
              image: e.target.value,
            })
          }
        />

        <button disabled={disabled} className="btn btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );
}