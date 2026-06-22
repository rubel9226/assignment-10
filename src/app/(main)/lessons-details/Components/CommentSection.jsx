"use client";

import { useEffect, useState } from "react";
import { BiSend, BiCommentDetail } from "react-icons/bi";
import { useUser } from "@/Components/layout/AuthContext";
import { api } from "@/lib/baseAPI";
import ReportLessonModal from "./ReportLessonModal";

export default function CommentSection({ lessonId }) {
  const { user, token } = useUser();

  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);

  const fetchComments = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/comments/${lessonId}`);

      setComments(res?.data?.payload || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (lessonId) {
      fetchComments();
    }
  }, [lessonId]);

  const handleComment = async () => {
    if (!text.trim()) return;

    if (!user) {
      alert("Please login to comment");
      return;
    }

    try {
      setPosting(true); 
      const res = await api.post(
        "/comments",
        {
          lessonId, 
          text, 
          userId: user.id, 
          userName: user.name, 
          userPhoto: user.image,
        },

        {
          headers: {
            Authorization: `${token}`,
          },
        },
      );

      setComments((prev) => [res.data.payload, ...prev]);

      setText("");
    } catch (error) {
      console.log(error);
    } finally {
      setPosting(false);
    }
  };

  return (
    <section className="mt-12">
      <div className="flex items-center gap-3 mb-5">
        <BiCommentDetail size={30} />

        <h2 className="text-3xl font-bold">Comments ({comments.length})</h2>
      </div>

      {/* add comment */}

      <div className="card bg-base-200 p-5">
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Write your thoughts..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={handleComment}
          disabled={posting}
          className="btn btn-primary mt-4 w-fit"
        >
          <BiSend />

          {posting ? "Posting..." : "Comment"}
        </button>
      </div>

      {/* comments */}

      <div className="mt-8 space-y-5">
        {loading ? (
          <div className="loading loading-spinner"></div>
        ) : comments.length === 0 ? (
          <p className="opacity-60">No comments yet</p>
        ) : (
          comments.map((item) => (
            <div key={item._id} className="card bg-base-200 p-5">
              <div className="flex gap-4">
                <img
                  src={item.userPhoto || "https://i.ibb.co/0J8Qp3d/user.png"}
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <div className="flex gap-4">
                    <h3 className="font-bold">{item.userName}</h3>

                    <span className="text-sm opacity-60">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="mt-2">{item.text}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
    </section>
  );
}
