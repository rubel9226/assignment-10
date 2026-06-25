"use client";

import {
  BiBold,
  BiItalic,
  BiListUl,
  BiLink,
  BiImage,
} from "react-icons/bi";

export default function LessonStep2({ lessonData, setLessonData, handleChange}) {

  const isDisabled = lessonData.description === '';
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
      <div>
        <div className="flex justify-between items-center mb-3">
          <label className="font-medium">
            Lesson Narrative
          </label>

          <span className="text-sm text-slate-400">
            Auto Saved
          </span>
        </div>

        {/* Toolbar */}

        <div className="border border-slate-700 rounded-t-xl bg-slate-800 p-3 flex flex-wrap gap-2">
          <button
            type="button"
            className="p-2 rounded hover:bg-slate-700"
          >
            <BiBold />
          </button>

          <button
            type="button"
            className="p-2 rounded hover:bg-slate-700"
          >
            <BiItalic />
          </button>

          <button
            type="button"
            className="p-2 rounded hover:bg-slate-700"
          >
            <BiListUl />
          </button>

          <button
            type="button"
            className="p-2 rounded hover:bg-slate-700"
          >
            <BiLink />
          </button>

          <button
            type="button"
            className="p-2 rounded hover:bg-slate-700"
          >
            <BiImage />
          </button>

          <div className="ml-auto text-sm text-slate-400">
            Markdown Supported
          </div>
        </div>

        {/* Editor */}

        <textarea
          rows={15}
          name='description'
          value={lessonData.description}
          onChange={handleChange}
          placeholder="Start crafting your lesson here..."
          className="w-full rounded-b-xl bg-slate-950 border border-t-0 border-slate-700 p-5 resize-none outline-none"
        />
      </div>
    </div>
  );
}