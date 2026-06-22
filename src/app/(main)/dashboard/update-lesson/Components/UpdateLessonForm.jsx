"use client";

import { useEffect, useState } from "react"; 
import { useUser } from "@/Components/layout/AuthContext"; 

import LessonBasicFields from "./LessonBasicFields";
import LessonSelectFields from "./LessonSelectFields";
import LessonImageField from "./LessonImageField";
import { api } from "@/lib/baseAPI";
import { toast } from "react-toastify";

export default function UpdateLessonForm({ lessonId }) {
  const { token, user } = useUser();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    emotionalTone: "",
    visibility: "",
    accessLevel: "",
    image: "",
  });

  useEffect(() => {
    getLesson();
  }, []);

  const getLesson = async () => {
    try {
      const res = await api.get(`/lessons/single-lesson/${lessonId}`);
      const lesson = res?.data?.payload;

      setFormData({
        title: lesson.title,
        description: lesson.description,
        category: lesson.category,
        emotionalTone: lesson.emotionalTone,
        visibility: lesson.visibility,
        accessLevel: lesson.accessLevel,
        image: lesson.image,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/lessons/update-lesson/${lessonId}`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      toast.success("Lesson Updated");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 container mx-auto">
      <LessonBasicFields formData={formData} handleChange={handleChange} />

      <LessonSelectFields
        formData={formData}
        handleChange={handleChange}
        user={user}
      />

      <LessonImageField formData={formData} setFormData={setFormData} />

      <button
        className="
        btn
        btn-primary
        w-full
      "
      >
        Update Lesson
      </button>
    </form>
  );
}
