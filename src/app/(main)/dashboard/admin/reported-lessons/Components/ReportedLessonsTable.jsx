"use client";

import ReportedLessonRow from "./ReportedLessonRow";

export default function ReportedLessonsTable({reports, token}) {

  return (
    <div className="card bg-base-100 border border-base-300">
      <div className="card-body overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Lesson Title</th>
              <th>Report Count</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report, index) => (
              <ReportedLessonRow
                key={report._id}
                report={report}
                token={token}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}