"use client";

// import { IoMdStar, FaTrashRestoreAlt, FaCheckCircle } from "lucide-react";
import { IoMdStar } from "react-icons/io";
import { FaTrashRestoreAlt, FaCheckCircle  } from "react-icons/fa";
import { api } from "@/lib/baseAPI"; 
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ManageLessonsFilters from "./ManageLessonsFilters";


export default function ManageLessonsTable({token}) {
  const [lessons, setLessons] = useState([]);
  
  const router = useRouter();
  const [loadingLessons, setLoadingLessons] = useState(true);
  const [loadingFeature, setLoadingFeature] = useState({
    loading: false,
    id: '',
  });

  const handleGetAllLessons = async () => {
    setLoadingLessons(true);
    try {
      const res = await api.get('/lessons/all-lessons', {
        headers: {
          Authorization: token?.token
        }
      });
      setLessons(res?.data?.payload?.lessons)
    } catch (error) {
      console.log(error);
    }finally{
      setLoadingLessons(false);
    }
  }

  const handleFeatured = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be promoted to Admin.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Make Admin",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });
    
    try {
      setLoadingFeature({loading: true, id});
      console.log(token?.token)
      await api.patch(`/admins/feature-lesson/${id}`, {}, {
        headers: {
          Authorization: token?.token
        }
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      console.log(error?.response?.data?.message);
    } finally{
      setLoadingFeature({loading: false, id: ''});
    }
  }

  useEffect(() => {
    handleGetAllLessons();
  }, []);


  console.log(lessons)

  return (
    <>

      <ManageLessonsFilters />

      <div className="card bg-base-100 border border-base-300">
        <div className="card-body overflow-x-auto">
          {
            loadingLessons
            ?<div className="w-full flex justify-center items-center min-h-[30vh]">
              <span className="loading loading-spinner loading-xl"></span>
            </div> 
            :
            <table className="table">
              <thead>
                <tr>
                  <th>Lesson</th>
                  <th>Creator</th>
                  <th>Category</th>
                  <th>Visibility</th>
                  <th>Status</th>
                  <th>Featured</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              

              <tbody>
                {lessons.map((lesson) =>{ 
                  
                  return(
                    <tr key={lesson._id}>
                    <td className="font-medium">{lesson?.title?.slice(0, 10)}...</td>

                    <td>{lesson.creatorName}</td>

                    <td>{lesson.category}</td>

                    <td>
                      <div
                        className={`badge ${
                          lesson.visibility === "Public"
                            ? "badge-success"
                            : "badge-warning"
                        }`}
                      >
                        {lesson.visibility}
                      </div>
                    </td>

                    <td>
                      {lesson.reviewed ? (
                        <span className="badge badge-success">
                          Reviewed
                        </span>
                      ) : (
                        <span className="badge badge-error">
                          Pending
                        </span>
                      )}
                    </td>

                    <td>
                      {lesson.isReviewed ? (
                        <span className="badge badge-warning">
                          Featured
                        </span>
                      ) : (
                        <span className="badge">
                          Normal
                        </span>
                      )}
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <button
                          onClick={()=>handleFeatured(lesson._id)}
                          className={`btn btn-sm btn-warning ${lesson?.isReviewed ? '' : ' btn-outline'}`}
                          title="Feature Lesson"
                        >
                          {
                            (loadingFeature.loading && loadingFeature.id === lesson?._id)
                            ? <span className={`loading loading-spinner loading-md`}></span>
                            : <IoMdStar size={16} />
                          }
                        </button>

                        <button
                          className="btn btn-sm btn-success btn-outline"
                          title="Mark Reviewed"
                        >
                          <FaCheckCircle size={16} />
                        </button>

                        <button
                          className="btn btn-sm btn-error btn-outline"
                          title="Delete Lesson"
                        >
                          <FaTrashRestoreAlt size={16} />
                        </button>
                      </div>
                    </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          }
        </div>
      </div>

          {/* <Pagination
              pagination={pagination}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
          /> */}
    </>
  );
}