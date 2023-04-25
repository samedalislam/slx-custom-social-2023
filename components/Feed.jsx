import CreatePost from "./CreatePost";
import Post from "./Post";

const Feed = () => {
    return (
        <div className="feed">
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};
export default Feed;
