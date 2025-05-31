import Link from "next/link"
export default function Page() {
    return (
        < >
        <h2> welcome to yengine</h2>
        <h3> yengine is a wip game engine</h3>
        <p> it is writen in next.js and allows coding in js jsx ts python(brython) java(cherpj) and react using webgl for graphics handling</p>
        <Link href="/test"> <h2> test</h2></Link>
        </>
    )
}