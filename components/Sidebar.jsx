import {
    MdBookmarks,
    MdGroups,
    MdOutlineExplore,
    MdPeople,
    MdSettings,
} from "react-icons/md";
import SidebarCategory from "./SidebarCategory";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = () => {
    const router = useRouter();
    return (
        <div className="sidebar">
            <Link href={"/user"}>
                <SidebarCategory
                    imageSoure="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"
                    text="Princess Merry"
                    user={true}
                />
            </Link>
            <SidebarCategory Icon={MdPeople} text="Find Friends" />
            <SidebarCategory Icon={MdOutlineExplore} text="Explore" />
            <SidebarCategory Icon={MdBookmarks} text="Bookmarks" />
            <SidebarCategory Icon={MdGroups} text="Groups" />
            <SidebarCategory Icon={MdSettings} text="Settings" />
        </div>
    );
};
export default Sidebar;
