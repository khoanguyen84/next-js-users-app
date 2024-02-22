import { removeUserAction } from "@/actions/user-actions"
import UserTable from "@/components/user-components/user-table"


export default async function UsersPage() {
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/users`, {
        method: "GET",
        cache: "no-cache",
        next: { tags: ['user-list'] }
    })
    let userList = await res.json()

    return (
        <>
            <UserTable
                userList={userList}
                removeUserAction={removeUserAction}
            />
        </>
    )
}