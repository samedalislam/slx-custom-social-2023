import { MdShare, MdSms, MdThumbUp } from "react-icons/md";

const Post = () => {
    const image =
            "https://images.pexels.com/photos/16092112/pexels-photo-16092112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        createdAt = "24 April 2023",
        input = "This is a nice day!";

    return (
        <div className="post">
            <div className="top">
                <img
                    className="postAvatar"
                    src={
                        "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    alt=""
                />
                <div className="info">
                    <span>{"John Doe"}</span>
                    <span>{"24 April 2023"}</span>
                </div>
            </div>
            {input ? <p>{input}</p> : ""}
            {image ? <img src={image} /> : ""}
            <div className="bottom">
                <div className="item">
                    <MdThumbUp />
                    <span>Like</span>
                </div>
                <div className="item">
                    <MdSms />
                    <span>Comment</span>
                </div>
                <div className="item">
                    <MdShare />
                    <span>Share</span>
                </div>
            </div>
        </div>
    );
};
export default Post;
