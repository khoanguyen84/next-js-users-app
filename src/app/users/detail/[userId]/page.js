
export async function generateMetadata({ params }) {
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/users/${params?.userId}`, {
        method: "GET"
    })
    let user = await res.json()
    return {
        title: `${user?.username} details`,
        description: `${user?.username} details description`
    }
}

export default async function UserDetailPage(props) {
    const { params: { userId } } = props
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/users/${userId}`, {
        method: "GET",
        cache: "no-cache"
    })
    let user = await res.json()
    return (
        <>
            <div className="d-flex align-items-center">
                <p>Username: </p>
                <p>{user?.username}</p>
            </div>
            <div className="d-flex align-items-center">
                <p>Email: </p>
                <p>{user?.email}</p>
            </div>
        </>
    )
}