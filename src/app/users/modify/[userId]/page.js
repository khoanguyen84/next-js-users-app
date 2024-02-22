import { modifyUserAction } from "@/actions/user-actions";
import ModifyUserForm from "@/components/user-components/user-modify";

export async function generateMetadata({ params }) {
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/users/${params?.userId}`, {
        method: "GET"
    })
    let user = await res.json()
    return {
        title: `Modify ${user?.username}`,
        description: `Modify ${user?.username} description`
    }
}
export default async function ModifyUserPage(props) {
    const { params: { userId } } = props
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/users/${userId}`, {
        method: "GET",
        cache: "no-cache"
    })
    let user = await res.json()

    return (
        <>
            <ModifyUserForm
                user={user}
                modifyUserAction={modifyUserAction}
            />
        </>
    )
}