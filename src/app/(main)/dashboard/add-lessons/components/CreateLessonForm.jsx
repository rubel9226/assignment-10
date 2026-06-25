"use client";

import { useEffect, useState } from "react";
import {
  BiArrowBack,
  BiCheckCircle,
  BiCloudUpload,
  BiLock,
} from "react-icons/bi"; 
import LessonStep1 from "./LessonStep1";
import LessonStep2 from "./LessonStep2";
import LessonStep3 from "./LessonStep3";
import { api } from "@/lib/baseAPI";
import { useUser } from "@/Components/layout/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";



export default function CreateLessonForm() {
  const { user, token } = useUser(); 
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const router =  useRouter();

  const [lessonData, setLessonData] = useState({
    title: "",
    description: "",
    category: "",
    emotionalTone: "",
    image: null,
    visibility: "Private",
    accessLevel: "Free",
  });

  const [step, setStep] = useState(1);
  const nextStep = () => {


    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

      const handleChange = (e) => {
      const { name, value } = e.target;

      setLessonData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };


    const handleSubmit = async () => {
      // http://localhost:3001/api/lessons
      const data = new FormData();
      data.append('title', lessonData.title);
      data.append('description', lessonData.description);
      data.append('category', lessonData.category);
      data.append('emotionalTone', lessonData.emotionalTone);
      data.append('image', lessonData.image);
      data.append('visibility', lessonData.visibility);
      data.append('accessLevel', lessonData.accessLevel);
      try {
        setLoading(true)
        const res = await api.post('/lessons', data, {
                headers: {
                    Authorization: `${token}`,
                    "Content-Type" : "multipart/form-data"
                }
            });
        
        toast.success('Lessons create successfully.');
        setLessonData({
          title: "",
          description: "",
          category: "",
          emotionalTone: "",
          image: null,
          visibility: "Private",
          accessLevel: "Free",
        });
        setStep(1);
        router.refresh();
        router.push('/dashboard/my-lessons')
        
      } catch (error) {
        toast.error('Invalid! Try again!')
        console.log(error?.response?.data?.message);
      } finally{
        setLoading(false);
      }
    }



useEffect(() => {
  if (step === 1) {
    setDisabled(
      lessonData.title === "" ||
      lessonData.category === "" ||
      lessonData.emotionalTone === ""
    );
  } else if (step === 2) {
    setDisabled(
      lessonData.description === ""
    );
  } 
}, [step, lessonData]);


  return (
    <main className="max-w-5xl mx-auto px-4 py-8 pb-32">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Add New Lesson
        </h1>

        <p className="text-gray-400">
          Shape the future by sharing your wisdom.
        </p>

        {/* Progress */}
        <div className="flex gap-2 mt-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`h-1 flex-1 rounded-full transition-all ${
                step >= item
                  ? "bg-indigo-500"
                  : "bg-slate-700"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-between text-sm mt-2 text-gray-400">
          <span>Foundations</span>
          <span>Core Wisdom</span>
          <span>Access & Polish</span>
        </div>
      </div>

      {/* Steps */}

      {step === 1 && <LessonStep1 
                        lessonData={lessonData} 
                        setLessonData={setLessonData} 
                        handleChange={handleChange}
                      />}

      {step === 2 && <LessonStep2 
                        lessonData={lessonData} 
                        setLessonData={setLessonData} 
                        handleChange={handleChange}
                      />}

      {step === 3 && <LessonStep3 
                        lessonData={lessonData} 
                        setLessonData={setLessonData} 
                        handleChange={handleChange}
                        user={user}
                      />}

      {/* Bottom Nav */}

      <div className="fixed bottom-0 left-0 right-0 bg-[#0f172a]/80 backdrop-blur border-t border-slate-700">
        <div className="max-w-5xl mx-auto p-4 flex justify-end items-center">

          

          <div className="flex gap-3">
            {step > 1 ? 
              <button
                onClick={prevStep}
                className="border border-slate-700 px-5 py-3 rounded-lg flex items-center gap-2 cursor-pointer"
              >
                <BiArrowBack />
                Back
              </button>
            : (
              <div />
            )} 

            {step < 3 ? (
              <button
                onClick={nextStep}
                className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold disabled:bg-indigo-500/40 disabled:hover:bg-indigo-500/50 cursor-pointer"
                disabled={disabled}
              >
                Continue {step}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-semibold"
              >
                {
                  loading ? 'Please Wait...' : 'Publish Lesson'
                }
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}