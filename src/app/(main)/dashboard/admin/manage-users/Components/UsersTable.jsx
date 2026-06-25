'use client';

import { api } from "@/lib/baseAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function UsersTable({users=[], token}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter()                  

  const handleCreateAdmin = async (id) => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "This user will be promoted to Admin.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Make Admin",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      });

      if (!result.isConfirmed) return;

      try {
        setLoading(true)
        await api.patch(
          `/admins/create-admin/${id}`,
          {},
          {
            headers: {
              Authorization: token?.token,
            },
          }
        );

        Swal.fire({
          title: "Success!",
          text: "User has been promoted to Admin.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        router.refresh();
      } catch (error) {
        console.log(error); 
        Swal.fire({
          title: "Error!",
          text: "Failed to create admin.",
          icon: "error",
        });
      } finally{
        setLoading(false);
      }
    };

  return (
    <div className="bg-[#1D232A] rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Total Lessons</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user?._id}>
                  <td>
                      <div className="font-medium">
                          {user.name}
                      </div>
                  </td>
              
                  <td>{user.email}</td>
              
                  <td>
                      {user?.isAdmin ? (
                          <span className="badge badge-success">
                            Admin
                          </span>
                        ) : (
                          <span className="badge badge-neutral">
                            User
                          </span>
                        )}
                  </td>
              
                    <td>{user.totalLessons}</td>
              
                  <td>
                      {
                        (user.isAdmin) 
                        ?<button
                            disabled
                            className="btn btn-success btn-sm"
                          >
                            Admin
                          </button> 
                          :<button onClick={() => handleCreateAdmin(user?._id)} className="btn btn-primary btn-sm">
                          {loading ? 'Please wait...' : 'Make Admin'}
                        </button>
                      }
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}