import { posts } from "@/lib/posts";

export async function generateMetadata({params}) {
    const post = posts.find(post => post.slug === params.slug);

    if(!post){
        return {title: "Post Not Found"}
    };

    return{
        title: post.title,
        description: post.content.slice(0, 100)
    };
}

const PostPage = ({params}) => {
    const post = posts.find((post) => post.slug === params.slug);
    const {slug, title, content} = post;

    if(!post){
        return <h1 className="text-2xl font-bold">404 - Post not found!</h1>
    }

    return(
        <div className="p-10 rounded-xl bg-blue-200 max-w-10/12 mx-auto my-10">
            <h1 className="text-2xl font-bold mb-2"> {title} </h1>
            <p>{content}</p>
        </div>
    )
}

export default PostPage