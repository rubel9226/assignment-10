"use client";

import { useState } from "react";
// import Swal from "sweetalert2"; 
import { useUser } from "@/Components/layout/AuthContext";
import { api } from "@/lib/baseAPI";
import { toast } from "react-toastify";

export default function ReportLessonModal({ lesson }) {
  const [reason, setReason] = useState("Spam");
  const [loading, setLoading] = useState(false);

  const {user, token} = useUser();
  console.log(lesson);

  const handleReport = async () => {
    try {
      setLoading(true);

      const res = await api.post("/reports",
        {
          lessonId: lesson._id,
          lessonTitle: lesson.title,

          reporterUserId: user.id,
          reporterName: user.name,
          reporterEmail: user.email,

          reason,
          reportedUserEmail: lesson?.creatorEmail
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      
      toast.success('Report Submitted');
    } catch (error) { 
      toast.error(error?.response?.data?.message || "Something went wrong",)
    } finally {
      setLoading(false);
      document.getElementById("report_lesson_modal").close();
    }
  };

  return (
    <dialog
      id="report_lesson_modal"
      className="modal"
    >
      <div className="modal-box">

        <h3 className="font-bold text-xl">
          Report Lesson
        </h3>

        <p className="py-3 text-sm opacity-70">
          Why are you reporting this lesson?
        </p>

        <select
          className="select select-bordered w-full"
          value={reason}
          onChange={(e) =>
            setReason(e.target.value)
          }
        >
          <option>Spam</option>
          <option>Inappropriate Content</option>
          <option>Harassment</option>
          <option>False Information</option>
          <option>Copyright Violation</option>
          <option>Other</option>
        </select>

        <div className="modal-action">

          <button
            onClick={handleReport}
            disabled={loading}
            className="btn btn-error"
          >
            {
              loading
                ? "Submitting..."
                : "Submit Report"
            }
          </button>

          <form method="dialog">
            <button className="btn">
              Cancel
            </button>
          </form>

        </div>
      </div>
    </dialog>
  );
}