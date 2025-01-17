import { motion } from "motion/react";

export default function MediaIcons({ icon, href }) { //Takes the social media icons and the link to social media website
    return (
        <motion.a
            href={href}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="text-primary hover:text-secondary text-xl"
        >
            {icon}
        </motion.a>
    );
}