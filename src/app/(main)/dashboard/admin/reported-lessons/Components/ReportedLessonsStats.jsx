export default function ReportedLessonsStats({reports}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <h3 className="text-sm text-base-content/70">
            Total Reports
          </h3>

          <p className="text-3xl font-bold">
            {reports?.totalReports}
          </p>
        </div>
      </div>

      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <h3 className="text-sm text-base-content/70">
            Reported Lessons
          </h3>

          <p className="text-3xl font-bold">
            {reports?.totalLessonsReports}
          </p>
        </div>
      </div>

      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <h3 className="text-sm text-base-content/70">
            Pending Review
          </h3>

          <p className="text-3xl font-bold">
            {reports?.totalPending}
          </p>
        </div>
      </div>
    </div>
  );
}