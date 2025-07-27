import Link from "next/link"

const Navbar = () => {
    return(
        <div className="p-5 flex flex-col md:flex-row justify-between items-center shadow-sm">
            <div>
                <h2 className="text-2xl font-bold text-blue-600 font-mono">My First App</h2>
            </div>
            <ul className="flex gap-3">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/posts">Blogs</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div>
                <Link href="/register" className="px-4 py-3 text-white mr-4 bg-blue-600 rounded-lg ">Register</Link>
                <Link href="/login" className="px-4 py-3 text-white bg-blue-600 rounded-lg ">SignIn</Link>
            </div>
        </div>
    )
}

export default Navbar