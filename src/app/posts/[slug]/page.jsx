
const PostPage = ({params}) => {
    const {slug} = params;
    return(
        <div>
            <h1>This is {slug} </h1>
            <p>The post headline <strong>{slug}</strong> </p>
        </div>
    )
}

export default PostPage