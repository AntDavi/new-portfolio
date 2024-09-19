import { socials } from "@/config/site";
import Link from "next/link";

interface SocialProps {
    containerStyles: string;
    iconsStyles: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconsStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
}

export default Social