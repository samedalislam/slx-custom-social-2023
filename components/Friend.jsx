import { useRouter } from "next/router"
import { MdPersonAddAlt1 } from "react-icons/md"

const Friend = () => {
    const router = useRouter()
    
  return (
    <div className="friend" onClick={() => router.push("/user")}>
        <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>John Doe</span>
        <button><MdPersonAddAlt1 /> Add Friend</button>
    </div>
  )
}
export default Friend