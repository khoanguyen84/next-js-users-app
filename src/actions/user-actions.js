import { revalidateTag } from "next/cache"

// server action
export async function createUserAction(newUser) {
    'use server'
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    if (!res.ok) {
        throw new Error('Can not create user')
    }
    let result = await res.json()
    revalidateTag('user-list')
    console.log('server log >>>', result);
    return result
}

export async function modifyUserAction(modifyUser) {
    'use server'
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/users/${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(modifyUser)
    })
    if (!res.ok) {
        throw new Error('Can not create user')
    }
    let result = await res.json()
    revalidateTag('user-list')
    console.log('server log >>>', result);
    return result
}

export async function removeUserAction(user) {
    'use server'
    let res = await fetch(`https://jsonserver-vercel-api.vercel.app/users/${user?.id}`, {
        method: "DELETE"
    })
    if (!res.ok) {
        throw new Error('Can not remove user')
    }
    let result = await res.json()
    console.log('remove user log>>>', result);
    revalidateTag('user-list')
    return result
}