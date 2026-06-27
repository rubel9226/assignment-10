export default function FavoritesFilter({ category, setCategory, tone, setTone, handleRemove}) {
  return (
    <div className="bg-base-100 p-5 rounded-2xl shadow flex gap-4">
      <select
        className="select select-bordered"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="">
          All Categories
        </option>

        <option>
          Personal Growth
        </option>

        <option>
          Career
        </option>

        <option>
          Relationships
        </option>

        <option>
          Mindset
        </option>
        <option>
          Mistakes Learned
        </option>
      </select> 

      <select
        className="select select-bordered"
        value={tone}
        onChange={(e) =>
          setTone(e.target.value)
        }
      >
        <option value="">
          All Tones
        </option>

        <option>
          Motivational
        </option>

        <option>
          Gratitude
        </option>

        <option>
          Sad
        </option>

        <option>
          Realization
        </option>
      </select>
    </div>
  );
}