export default function ReportDetailsModal({ report }){
    return (
        <dialog
            id={`report-${report._id}`}
            className="modal"
        >
        <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-xl mb-4">
                Report Details
            </h3>

            <div className="space-y-3">
                {report.reports.map((item, index) => (
                    <div
                        key={index}
                        className="border border-base-300 rounded-xl p-4"
                    >
                        <p>
                            <span className="font-semibold">
                            Reporter:
                            </span>{" "}
                            {report?.lessonCreator}
                        </p>

                        <p>
                            <span className="font-semibold">
                            Reason:
                            </span>{" "}
                            {item?.reason}
                        </p>
                    </div>
                ))}
            </div>

            <div className="modal-action">
            <form method="dialog">
                <button className="btn">
                Close
                </button>
            </form>
            </div>
        </div>
        </dialog>
    );
}