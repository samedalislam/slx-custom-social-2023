import { useRouter } from "next/router";
import {
    MdGroups,
    MdHome,
    MdMessage,
    MdNotifications,
    MdNotificationsActive,
    MdPersonAdd,
    MdSearch,
} from "react-icons/md";

const Header = () => {
    const router = useRouter()
    const notifications = true;
    return (
        <div className="header">
            {/* Left == Brand Logo*/}
            <span className="brandLogo" onClick={() => router.push("/")}>SLX</span>

            {/* Center == Navbar */}
            <nav>
                <div className="item" onClick={() => router.push("/")}>
                    <MdHome />
                    <span>Home</span>
                </div>
                <div className="item" onClick={() => router.push("/friends")}>
                    <MdPersonAdd />
                    <span>Friends</span>
                </div>
                <div className="item" onClick={() => router.push("/messaging")}>
                    <MdMessage />
                    <span>Messaging</span>
                </div>
                <div className="item" onClick={() => router.push("/groups")}>
                    <MdGroups />
                    <span>Groups</span>
                </div>
                <div className="item" onClick={() => router.push("/notifications")}>
                    {notifications ? (
                        <MdNotificationsActive />
                    ) : (
                        <MdNotifications />
                    )}
                    <span>Notifications</span>
                </div>
            </nav>
            {/* Right == Search & Avatar*/}

            <div className="right">

                {/* Search */}
                <div className="search">
                    <MdSearch />
                    <input type="text" placeholder="Search" />
                </div>

                {/* Avatar */}
                <img src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="avatar" />
            </div>
        </div>
    );
};
export default Header;
