'use client'

import Link from "next/link"
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2"

export default function UserTable({ userList, removeUserAction }) {
    const handleRemoveUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
          }).then((result) => {
            if (result.isConfirmed) {
                removeUserAction(user)
                toast.success(`User ${user?.username} removed success`)
            }
          });
    }
    return (
        <>
            <ToastContainer position="top-center"/>
            <h1>Users Page</h1>
            <Link href={'/users/create'} className="btn btn-sm btn-outline-secondary mb-2">Create User</Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList?.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    <Link
                                        href={`users/modify/${user.id}`}
                                        className="btn btn-sm btn-warning me-2"
                                    >Edit</Link>
                                    <button 
                                        onClick={() => handleRemoveUser(user)}
                                        className="btn btn-sm btn-danger me-2">Remove</button>
                                    <Link
                                        href={`users/detail/${user.id}`}
                                        className="btn btn-sm btn-secondary me-2"
                                    >View</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}