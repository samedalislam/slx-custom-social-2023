import { useRouter } from "next/router";

const SidebarCategory = ({ Icon, text, imageSoure, user }) => {
    const router = useRouter();
    return (
        <div className="sidebarCategory">
            {imageSoure ? (
                <img className="sidebarAvatar" src={imageSoure} alt="" />
            ) : (
                <Icon />
            )}
            <span>{text}</span>
        </div>
    );
};
export default SidebarCategory;
