import { posts } from "@/lib/posts";
import Link from "next/link";

// Metadata
export const metadata = {
    title: "Posts | My First App",
    description: "Read more articles or blogs from My first nextjs app"
}
const Posts = () => {
    return (
        <div className="grid grid-cols-3 gap-5 max-w-10/12 mx-auto">
            {
                posts.map((post) => <div
                    key={post.slug}
                    className="bg-blue-300 p-4 rounded-lg shadow-sm">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <Link href={`/posts/${post.slug}`}>Read More</Link>
                </div>)
            }
        </div>
    )
}

export default Posts;