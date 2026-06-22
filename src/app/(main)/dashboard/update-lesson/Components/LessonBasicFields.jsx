export default function LessonBasicFields({ formData, handleChange }) {
  return (
    <>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="input input-bordered w-full"
      />

      <textarea
        rows={8}
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="textarea textarea-bordered w-full"
        placeholder="Description"
      />
    </>
  );
}
