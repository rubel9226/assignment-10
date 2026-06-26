"use client";

// import { IoMdStar, FaTrashRestoreAlt, FaCheckCircle } from "lucide-react";
import { IoMdStar } from "react-icons/io";
import { FaTrashRestoreAlt, FaCheckCircle  } from "react-icons/fa";
import { api } from "@/lib/baseAPI"; 
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ManageLessonsFilters from "./ManageLessonsFilters";
import Swal from "sweetalert2";
import Pagination from "@/Components/layout/Pagination";


export default function ManageLessonsTable({token}) {
  const [filter, setFilter] = useState({
      sort: "latest",
      category: "",
  });
  const [lessons, setLessons] = useState([]); 
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingLessons, setLoadingLessons] = useState(true);
  const [loadingFeature, setLoadingFeature] = useState({
    loading: false,
    id: '',
  });
  const [loadingReview, setLoadingReview] = useState({
    loading: false,
    id: '',
  });
  const [loadingDelete, setLoadingDelete] = useState({
    loading: false,
    id: '',
  });

  const handleGetAllLessons = async (page) => {
    setLoadingLessons(true);
    try {
      const res = await api.get(`/admins/all-lessons?page=${page}&limit=8&sort=${filter.sort}&category=${filter.category}`, {
        headers: {
          Authorization: token?.token
        }
      });
      setLessons(res?.data?.payload?.lessons)
      setPagination(res?.data?.payload?.pagination)
    } catch (error) {
      console.log(error);
    }finally{
      setLoadingLessons(false);
    }
  }

  const handleFeatured = async (id, isFeatured) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: isFeatured ? 'This lesson will be remove featured?' : 'This lesson will be add featured?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: isFeatured ? 'Confirm, Remove!' : 'Confirm, Add!',
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    if(!result?.isConfirmed)return;
    
    try {
      setLoadingFeature({loading: true, id});
      console.log(token?.token)
      await api.patch(`/admins/feature-lesson/${id}`, {}, {
        headers: {
          Authorization: token?.token
        }
      });
      handleGetAllLessons();
      Swal.fire({
          title: "Success!",
          text: "Lesson has been add to feature",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error?.response?.data?.message,
        icon: "error",
      });
      console.log(error?.response?.data?.message);
    } finally{
      setLoadingFeature({loading: false, id: ''});
    }
  }

  const handleReviewed = async (id, isFeatured) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: isFeatured ? 'This lesson will be remove Reviewed?' : 'This lesson will be add Reviewed?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: isFeatured ? 'Confirm, Remove!' : 'Confirm, Add!',
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    if(!result?.isConfirmed)return;
    
    try {
      setLoadingReview({loading: true, id});
      await api.patch(`/admins/review-lesson/${id}`, {}, {
        headers: {
          Authorization: token?.token
        }
      });
      handleGetAllLessons();
      Swal.fire({
          title: "Success!",
          text: "Lesson has been add to Review",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
      });
    } catch (error) {
      console.log(error);Swal.fire({
        title: "Error!",
        text: error?.response?.data?.message,
        icon: "error",
      });
    } finally{
      setLoadingReview({loading: false, id: ''});
    }
  }

  const handleDeleteLesson = async (id, isFeatured) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: 'This lesson will be delete',
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Confirm, delete!',
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    if(!result?.isConfirmed)return;
    
    try {
      setLoadingDelete({loading: true, id});
      await api.patch(`/admins/delete-lesson/${id}`, {}, {
        headers: {
          Authorization: token?.token
        }
      });
      handleGetAllLessons();
      Swal.fire({
          title: "Success!",
          text: "Lesson has been Deleted successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
      });
    } catch (error) {
      console.log(error);Swal.fire({
        title: "Error!",
        text: error?.response?.data?.message,
        icon: "error",
      });
    } finally{
      setLoadingDelete({loading: false, id: ''});
    }
  }
  
  

  useEffect(() => {
    handleGetAllLessons(currentPage);
  }, [filter, currentPage]);


  console.log(lessons);



  console.log(filter)

  return (
    <> 
      <ManageLessonsFilters filter={filter} setFilter={setFilter} />

      <div className="card bg-base-100 border border-base-300 hidden md:flex">
        <div className="card-body overflow-x-auto">
          {
            loadingLessons
            ?<div className="w-full flex justify-center items-center min-h-[30vh]">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
            : lessons.length === 0 ? <div className="flex flex-col items-center justify-center pt-20 min-h-[30vh]">
                    <h3 className="text-2xl font-semibold text-gray-300">
                        No Lessons Found
                    </h3>

                    <p className="text-gray-500 mt-2">
                        Try changing your filters or search criteria.
                    </p>
                </div>:
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
                      {lesson.isReviewed ? (
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
                      {lesson.isFeatured ? (
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
                          onClick={()=>handleFeatured(lesson._id, lesson?.isFeatured)}
                          className={`btn btn-sm btn-warning ${lesson?.isFeatured ? '' : ' btn-outline'}`}
                          title="Feature Lesson"
                          disabled={loadingFeature.loading && loadingFeature.id === lesson?._id}
                        >
                          {
                            (loadingFeature.loading && loadingFeature.id === lesson?._id)
                            ? <span className={`loading loading-spinner loading-md`}></span>
                            : <IoMdStar size={16} />
                          }
                        </button>
                        
                        
                        <button
                          onClick={()=>handleReviewed(lesson._id, lesson?.isReviewed)}
                          className={`btn btn-sm btn-success ${lesson?.isReviewed ? '' : ' btn-outline'}`}
                          title="Review Lesson"
                          disabled={loadingReview.loading && loadingReview.id === lesson?._id}
                        >
                          {
                            (loadingReview.loading && loadingReview.id === lesson?._id)
                            ? <span className={`loading loading-spinner loading-md`}></span>
                            : <FaCheckCircle size={16} />
                          }
                        </button>
                        
                        
                        <button
                          onClick={()=>handleDeleteLesson(lesson._id, lesson?.isReviewed)}
                          className={`btn btn-sm btn-error`}
                          title="Delete Lesson"
                          disabled={loadingDelete.loading && loadingDelete.id === lesson?._id}
                        >
                          {
                            (loadingDelete.loading && loadingDelete.id === lesson?._id)
                            ? <span className={`loading loading-spinner loading-md`}></span>
                            : <FaTrashRestoreAlt size={16} />
                          }
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
      {/* Mobile Cards */}
<div className="grid grid-cols-1 gap-4 md:hidden">
  {lessons.map((lesson) => (
    <div
      key={lesson._id}
      className="card bg-base-100 border border-base-300 shadow-sm"
    >
      <div className="card-body p-4">
        <h2 className="font-semibold text-lg">
          {lesson?.title}
        </h2>

        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Creator:</span>{" "}
            {lesson.creatorName}
          </p>

          <p>
            <span className="font-semibold">Category:</span>{" "}
            {lesson.category}
          </p>

          <div className="flex items-center gap-2">
            <span className="font-semibold">Visibility:</span>

            <span
              className={`badge ${
                lesson.visibility === "Public"
                  ? "badge-success"
                  : "badge-warning"
              }`}
            >
              {lesson.visibility}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">Status:</span>

            {lesson.isReviewed ? (
              <span className="badge badge-success">
                Reviewed
              </span>
            ) : (
              <span className="badge badge-error">
                Pending
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">Featured:</span>

            {lesson.isFeatured ? (
              <span className="badge badge-warning">
                Featured
              </span>
            ) : (
              <span className="badge">
                Normal
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() =>
              handleFeatured(
                lesson._id,
                lesson?.isFeatured
              )
            }
            className={`btn btn-sm btn-warning ${
              lesson?.isFeatured ? "" : "btn-outline"
            }`}
            disabled={
              loadingFeature.loading &&
              loadingFeature.id === lesson._id
            }
          >
            {loadingFeature.loading &&
            loadingFeature.id === lesson._id ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <IoMdStar size={16} />
            )}
          </button>

          <button
            onClick={() =>
              handleReviewed(
                lesson._id,
                lesson?.isReviewed
              )
            }
            className={`btn btn-sm btn-success ${
              lesson?.isReviewed ? "" : "btn-outline"
            }`}
            disabled={
              loadingReview.loading &&
              loadingReview.id === lesson._id
            }
          >
            {loadingReview.loading &&
            loadingReview.id === lesson._id ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <FaCheckCircle size={16} />
            )}
          </button>

          <button
            onClick={() =>
              handleDeleteLesson(
                lesson._id,
                lesson?.isReviewed
              )
            }
            className="btn btn-sm btn-error"
            disabled={
              loadingDelete.loading &&
              loadingDelete.id === lesson._id
            }
          >
            {loadingDelete.loading &&
            loadingDelete.id === lesson._id ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <FaTrashRestoreAlt size={16} />
            )}
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

      { 
        <Pagination
            pagination={pagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        /> 
      }

    </>
  );
}