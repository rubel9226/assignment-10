"use client";

import Swal from "sweetalert2";
import ReportDetailsModal from "./ReportDetailsModal"; 
import { api } from "@/lib/baseAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReportedLessonRow({ report, token, index }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false); 


  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Lesson?",
      text: 'This lesson will be permanently removed.',
      icon: "warning",
      showCancelButton: true,
      confirmButtonText:'Delete',
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#00BF83",
    });
    
    if(!result?.isConfirmed)return;

    try {
      setLoading(true)
      await api.patch(`/admins/delete-lesson/${id}`, {}, {
        headers: {
          Authorization: token.token,
        }
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  const handleIgnore = async () => {
    const result = await Swal.fire({
      title: "Ignore Reports?",
      text: 'All reports will be cleared.This lesson will be permanently removed.',
      icon: "question",
      showCancelButton: true,
      confirmButtonText:'Ignore',
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });
    
    if(!result?.isConfirmed)return; 

  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>

        <td>{report?.lessonTitle}</td>

        <td>
          <span className="badge badge-error">
            {report?.reportCount}
          </span>
        </td>

        <td>
          <button
            className="btn btn-sm btn-info"
            onClick={() =>
              document
                .getElementById(`report-${report._id}`)
                .showModal()
            }
          >
            View Reports
          </button>
        </td>

        <td>
          <div className="flex gap-2">
            <button
              onClick={() => handleDelete(report?._id)}
              className="btn btn-sm btn-error"
            >
            {
              loading ? 'Please wait...' : 'Delete'
            }
              
            </button>

            <button
              onClick={handleIgnore}
              className="btn btn-sm btn-success"
            >
              Ignore
            </button>
          </div>
        </td>
      </tr>

      <ReportDetailsModal report={report} />
    </>
  );
}