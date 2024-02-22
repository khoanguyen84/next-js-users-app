import { createUserAction } from "@/actions/user-actions";
import CreateUserForm from "@/components/user-components/user-create";

export const metadata = {
    title: 'Create user page',
    desciption: 'Create user description'
}

export default function CreateUserPage() {
    return (
        <>
            <CreateUserForm
                createUserAction={createUserAction}
            />
        </>
    )
}