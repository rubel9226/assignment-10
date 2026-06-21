"use client";

import Image from "next/image";
import { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function LessonStep1({ lessonData, setLessonData, handleChange}) {
  const [preview, setPreview] = useState(null);

    const handleImage = (e) => {
      const file = e.target.files[0];

      if (!file) return;

      const imageUrl = URL.createObjectURL(file);

      setPreview(imageUrl);

      setLessonData((prev) => ({
        ...prev,
        image: file,
      }));
    };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <label className="flex gap-2 items-center mb-2 ">
            Lesson Title <BsStarFill className="text-red-600" />
          </label>

          <input
            type="text"
            name='title'
            value={lessonData.title}
            onChange={handleChange}
            placeholder="Navigating Corporate Stoicism"
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
          />
        </div>

        <div>
          <label className="flex gap-2 items-center  mb-2 ">
            Category <BsStarFill className="text-red-600" />
          </label>

          <select 
            name="category"
            value={lessonData.category}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
          > 
            <option value=""> Select Category </option>
            <option>Personal Growth</option>
            <option>Career</option>
            <option>Relationships</option>
            <option>Mistakes Learned</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">
            Emotional Tone
          </label>

          <select 
            name="emotionalTone"
            value={lessonData.emotionalTone}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
          > 
            <option value=""> Select Emotional Tone </option>
            <option>Motivational</option>
            <option>Sad</option>
            <option>Realization</option>
            <option>Gratitude</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block mb-3">
          Cover Image 
        </label>

        <label className="border-2 border-dashed border-slate-700 rounded-xl h-64 flex items-center justify-center cursor-pointer overflow-hidden">
          {preview ? (
            <Image
              width={200}
              height={200}
              src={URL.createObjectURL(lessonData.image)}
              alt="preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <BiCloudUpload className="text-6xl mx-auto text-indigo-400" />
              <p>Upload Cover Image</p>
            </div>
          )}

          <input
            hidden
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
        </label>
      </div>
    </div>
  );
}