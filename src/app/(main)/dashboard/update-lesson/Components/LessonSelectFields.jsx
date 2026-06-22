export default function LessonSelectFields({ formData, handleChange, user }) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="select select-bordered w-full sm:w-auto"
      >
        <option>Personal Growth</option>

        <option>Career</option>

        <option>Relationships</option>

        <option>Mindset</option>
      </select>

      <select
        name="emotionalTone"
        value={formData.emotionalTone}
        onChange={handleChange}
        className="select select-bordered w-full sm:w-auto"
      >
        <option>Motivational</option>

        <option>Sad</option>

        <option>Realization</option>

        <option>Gratitude</option>
      </select>

      <select
        name="visibility"
        value={formData.visibility}
        onChange={handleChange}
        className="select select-bordered w-full sm:w-auto"
      >
        <option>Public</option>

        <option>Private</option>
      </select>

      <select
        name="accessLevel"
        value={formData.accessLevel}
        onChange={handleChange}
        disabled={!user?.isPremium}
        className="select select-bordered w-full sm:w-auto"
      >
        <option>Free</option>

        <option>Premium</option>
      </select>
    </div>
  );
}
