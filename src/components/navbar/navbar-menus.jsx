import { motion } from "motion/react"
import Link from 'next/link';

const NavbarMenus = ({href, Menu}) => {
  return (
    <Link href={href}>
        <motion.li
            initial={{ color: "#1E3A8A" }}
            whileHover={{ color: "#FFC107" }}
            transition={{ duration: 0.5 }}
            className="p-4 cursor-pointer">
            {Menu}
        </motion.li>
    </Link>
  )
}

export default NavbarMenus