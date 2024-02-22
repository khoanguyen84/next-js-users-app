'use client'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';

const schema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required()
})

export default function CreateUserForm({ createUserAction }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    })

    const router = useRouter()

    const handleCreateUser = async (values) => {
        console.log(values);
        let result = await createUserAction(values)
        if(Object.keys(result).length) {
            toast.success(`User ${result.username} created success`)
            router.push('/users')
        }
    }
    return (
        <>
            <ToastContainer position="top-center"/>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit(handleCreateUser)} className="w-50 border rounded p-2">
                <div className="form-group mb-2">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className={`form-control ${errors.username?.message ? 'is-invalid' : ''}`}
                        {...register('username')}
                    />
                    <span className="invalid-feedback">{errors?.username?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email?.message ? 'is-invalid' : ''}`}
                        {...register('email')}
                    />
                    <span className="invalid-feedback">{errors?.email?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <button type="submit" className="btn btn-primary me-2">Save</button>
                    <button type="button" className="btn btn-dark me-2"
                        onClick={() => reset()}
                    >Cancel</button>
                </div>
            </form>
        </>
    )
}