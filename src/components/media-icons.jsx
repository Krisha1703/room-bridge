import { motion } from "framer-motion";
import Image from "next/image";

export default function MediaIcons({ icon, href }) { //Takes the react icons and the link to social media
    return (
        <motion.a
            href={href}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
        >
            <Image src={icon} width={35} height={35} alt="media icons"/>
        </motion.a>
    );
}