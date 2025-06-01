import { Redirect } from "next"
import { headers } from "next/headers"
import { Suspense } from "react"

export default function AuthPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    const redirectsite = searchParams.redirect || "/"
    const cookie = headers().get("cookie")
    if (cookie && cookie.includes("auth_token")) {
        return <Redirect to={redirectsite} />
    }
    return (
        <>
            <h1>auth page</h1>
            <h3>after you login you will be redirected to:</h3>
            <br />
            <h1>{redirectsite}</h1>
            <Suspense fallback={<div className="box">Loading...</div>}>
                <Login />
            </Suspense>
            <Suspense fallback={<div className="box">Loading...</div>}>
                <Register />
            </Suspense>
        </>
    )
}

// Simulate async server component with delay
async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function Login() {
    return <div className="box">
        <h1>Login</h1>
    </div>
}

export async function Register() {
    return <div className="box">
          <h1>Register</h1>
          <fourm>
            <input type=text name="username"/>
          </fourm>
         </div>
}