import Link from "next/link";
import { motion } from "motion/react";

export default function FooterMenus({Menu,Route}){ //Takes the menu name and link to the page for navigation
    return(
        <motion.li className="mb-2" initial={{x: 0}} whileHover={{ scale: 1.1, x: 20}} transition={{duration: 0.5, ease: "easeInOut"}}>
            <Link href={Route} legacyBehavior>
                <a className="text-primary font-semibold hover:text-secondary">{Menu}</a>
            </Link>
        </motion.li>
    );
}