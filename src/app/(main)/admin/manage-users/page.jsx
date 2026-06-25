import { auth } from "@/lib/auth";
import UsersStats from "./Components/UsersStats";
import UsersTable from "./Components/UsersTable";
import { headers } from "next/headers";
import { api } from "@/lib/baseAPI";

export default async function ManageUsersPage() {
    let usersStats = {}; 
    let users = [];
    try {
        const token = await auth.api.getToken({
            headers: await headers ()
        });
        const statsRes = await api.get('/admins/admins-stats', {
            headers: {
                Authorization: token.token,
            }
        });
        
        const userRes = await api.get('/admins/users', {
            headers: {
                Authorization: token.token,
            }
        });
        
        usersStats = statsRes?.data?.payload;
        users = userRes?.data?.payload;
    } catch (error) {
        console.log(error);
    }

    console.log(usersStats);

    return (
        <div className="space-y-6 container mx-auto min-h-[50vh] mt-4 md:mt-8">
            <UsersStats usersStats={usersStats} />

            <UsersTable users={users} />
        </div>
    );
}