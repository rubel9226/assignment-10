"use client";

import {
  BiCheckCircle,
  BiLock,
  BiRadioCircle,
} from "react-icons/bi";

export default function LessonStep3({
  lessonData,
  setLessonData,
  handleChange, 
  user
}) {


  

  return (
    <div className="grid md:grid-cols-3 gap-6">


      <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-8">

        <div>
          <h3 className="text-xl font-semibold mb-6">
            Publishing Settings
          </h3>

          <label className="block mb-4">
            Content Access
            {user.isPremium}
          </label>


          <div className="grid md:grid-cols-2 gap-4">


            {/* Free */}
            <label className={`border-2 rounded-xl p-4 flex gap-3 cursor-pointer ${
              lessonData.accessLevel === "Free"
              ? "border-indigo-500 bg-indigo-500/10"
              : "border-slate-700"
            }`}>

              <input
                type="radio"
                name="accessLevel"
                value="Free"
                checked={lessonData.accessLevel === "Free"}
                onChange={handleChange}
              />


              <div>
                <h4 className="font-semibold">
                  Standard Access
                </h4>

                <p className="text-sm text-slate-400">
                  Available to everyone
                </p>
              </div>

            </label>


            


            {/* Premium */}

            {
              user.isPremium 
              ? 
              <label className={`border rounded-xl p-4 flex gap-3 cursor-pointer ${
                  lessonData.accessLevel === "Premium"
                  ? "border-indigo-500 bg-indigo-500/10"
                  : "border-slate-700"
                }`}>

                  <input
                    type="radio"
                    name="accessLevel"
                    value="Premium"
                    checked={lessonData.accessLevel === "Premium"}
                    onChange={handleChange}
                  />


                  <div>
                    <h4 className="font-semibold">
                      Premium Exclusive
                    </h4>

                    <p className="text-sm text-slate-400">
                      Verified authors only
                    </p>
                  </div>

                </label>
              :
              <div className="border border-slate-700 rounded-xl p-4 opacity-60">
                <div className="flex gap-3">
                  <BiLock className="text-xl" />

                  <div>
                    <h4 className="font-semibold">
                      Premium Exclusive
                    </h4>

                    <p className="text-sm text-slate-400">
                      Verified authors only
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full bg-amber-500 text-black py-2 rounded-lg font-semibold"
                >
                  Upgrade
                </button>
              </div>
            }

            

          </div>
        </div>



        {/* Visibility */}

        <div className="border-t border-slate-700 pt-6">

          <div className="flex justify-between items-center">

            <div>
              <h4 className="font-medium">
                Public Visibility
              </h4>

              <p className="text-sm text-slate-400">
                Show lesson in global library
              </p>
            </div>


            <input
              type="checkbox"
              name="visibility"
              checked={lessonData.visibility === "Public"}
              onChange={(e)=>{

                setLessonData(prev=>({
                  ...prev,
                  visibility: e.target.checked
                    ? "Public"
                    : "Private"
                }))

              }}
              className="w-5 h-5"
            />


          </div>

        </div>

      </div>



      {/* Checklist */}

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col">


        <h4 className="uppercase text-sm tracking-widest text-slate-400 mb-5">
          Checklist
        </h4>


        <ul className="space-y-4">


          <li className="flex items-center gap-3">
            <BiCheckCircle className="text-green-500" />
            Foundations Set
          </li>


          <li className="flex items-center gap-3">
            <BiCheckCircle className="text-green-500" />
            Narrative Written
          </li>


          <li className="flex items-center gap-3">
            <BiCheckCircle className="text-green-500" />
            Imagery Uploaded
          </li>


          <li className="flex items-center gap-3 text-slate-500">
            <BiRadioCircle />
            Tags Added
          </li>


        </ul>



        <div className="mt-auto pt-6">

          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">

            <p className="text-sm text-slate-300">
              Your lesson will be reviewed by our
              curators before appearing on the
              platform.
            </p>

          </div>

        </div>


      </div>

    </div>
  );
}