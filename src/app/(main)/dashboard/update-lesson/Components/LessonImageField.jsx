export default function LessonImageField({ formData }) {
  return (
    <div>
      <img
        src={formData.image}
        alt=""
        className="
        w-full
        h-60
        object-cover
        rounded-xl
      "
      />

      <input
        type="text"
        name="image"
        value={formData.image}
        className="
        input
        input-bordered
        w-full
        mt-4
      "
        readOnly
      />
    </div>
  );
}
