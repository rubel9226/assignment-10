import { auth } from "@/lib/auth";
import ReportedLessonsStats from "./Components/ReportedLessonsStats";
import ReportedLessonsTable from "./Components/ReportedLessonsTable";
import { headers } from "next/headers";
import { api } from "@/lib/baseAPI";




export default async function ReportedLessonsPage() {
    let reports = {};
    let reportLessons = [];
    let token = '';
    try{
        token = await auth.api.getToken({
            headers: await headers ()
        });
        const res = await api.get('/admins/reports-stats', {
          headers: {
            Authorization: token.token,
          }
        });
        const reportRes = await api.get('/admins/reports-lessons', {
          headers: {
            Authorization: token.token,
          }
        });
        reports = res?.data?.payload;
        reportLessons = reportRes?.data?.payload;
    }catch (error){
        console.log(error);
        console.log(error?.response?.data?.message);
    }

    console.log(reportLessons, 'reprots');
    

    return (
        <div className="space-y-6 container mx-auto py-2 md:py-8">
            <div>
                <h1 className="text-3xl font-bold">
                    Reported Lessons
                </h1> 

                <p className="text-base-content/70">
                Manage flagged lessons and review reports.
              </p>
            </div>

            <ReportedLessonsStats reports={reports} />

            <ReportedLessonsTable reports={reportLessons} token={token} />
        </div>
    );
}