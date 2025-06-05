import { redirect } from "next/navigation"
import { headers } from "next/headers"

export default function AuthPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    const redirectsite = searchParams.redirect || "/"
    const cookie = headers().get("cookie")
    if (cookie && cookie.includes("auth_token")) {
        redirect(redirectsite)
    }
    return (
        <>
            <h1>auth page</h1>
            <h3>after you login you will be redirected to:</h3>
            <br />
            <h1>{redirectsite}</h1>
            <Login />
            <Register />
        </>
    )
}

function Login() {
    return <div className="box">
        <h1>Login</h1>
    </div>
}

function Register() {
    return <div className="box">
        <h1>Register</h1>
        <form>
            <input type="text" name="username" />
        </form>
    </div>
}