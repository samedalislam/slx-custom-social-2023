import { MdEmojiEmotions, MdImage, MdVideoCall } from "react-icons/md"
import Avatar from "./Avatar"

const CreatePost = () => {
  return (
    <div className="createPost">
      <div className="top">
        <Avatar imageSrc={"https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"} />
        <button>Share what you want</button>
      </div>
      <div className="hr"></div>
      <div className="bottom">
        <div className="item">
          <MdVideoCall />
          <span>Live Video</span>
        </div>
        <div className="item">
          <MdImage />
          <span>Live Video</span>
        </div>
        <div className="item">
          <MdEmojiEmotions />
          <span>Live Video</span>
        </div>
      </div>
    </div>
  )
}
export default CreatePost