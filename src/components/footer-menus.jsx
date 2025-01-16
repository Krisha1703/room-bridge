import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterMenus({Menu,Route}){ //Takes the menu name and link to the page for navigation
    return(
        <motion.li className="mb-2" whileHover={{ scale: 1.1 }} >
            <Link href={Route} legacyBehavior>
                <a className="text-primary roboto-medium hover:text-secondary">{Menu}</a>
            </Link>
        </motion.li>
    );
}