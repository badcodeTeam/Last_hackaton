export const PostCard = ({post}) => {
    return(
        <>
            <div className="flex flex-row my-5 h-2/6 w-5/6 bg-white rounded-lg shadow-md">
                <img src={`http://localhost:5000/contactor/image/user/${post.author}`}   className="my-auto mx-5 rounded-full h-3/6" />
                <div className="flex flex-col my-auto">
                    <h5 className="text-md  text-black font-medium">{post.postHeader}</h5> 
                    <span className="text-sm text-black">{post.text}</span>
                </div>
            </div>
        </>
    )
}