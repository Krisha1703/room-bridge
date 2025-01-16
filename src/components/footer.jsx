/* Importing required libraries and media */
import Image from "next/image";
import FooterMenus from "./footer-menus";
import { motion } from 'framer-motion';
import MediaIcons from "./media-icons";

export default function Footer() {
    const variants = { // Animation effect for footer columns
        hidden: direction => ({
            opacity: 0,
            x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
            y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
        }
    };

    return (
        <footer className="footer relative bg-[url('/Images/Footer/footer_bg.png')] bg-auto bg-no-repeat bg-center">
            <div className="container w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left py-10 px-5">
                
                {/* Quick Links */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    custom="left"
                    variants={variants}
                >
                    <h3 className="text-primary font-bold text-center text-lg mb-4">Quick Links</h3>
                    <ul className="text-center">
                        <FooterMenus Menu="Home" Route="/" />
                        <FooterMenus Menu="About Us" Route="/AplusA" />
                        <FooterMenus Menu="Explore" Route="/Services" />
                        <FooterMenus Menu="Offers" Route="/Career" />
                        <FooterMenus Menu="Contact Us" Route="/Contact" />
                    </ul>
                </motion.div>

                {/* Contact */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    custom="top"
                    variants={variants}
                >
                    <h3 className="text-primary font-bold text-lg mb-4">Contact Us</h3>
                    <p className="text-sm mb-2">123 Main Street, City, Country</p>
                    <p className="text-sm mb-2"><a href="mailto:getintouch@aplusatech.com">getintouch@roombridge.com</a></p>
                    <p className="text-sm">+XX 12345 67890</p>
                </motion.div>

                {/* Social Media */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    custom="bottom"
                    variants={variants}
                >
                    <h3 className="text-primary font-bold text-lg mb-4">Let's Connect</h3>
                    <div className="flex justify-center md:justify-start space-x-3">
                        <MediaIcons icon="/Images/Footer/Linkedin-Icon.webp" href="https://www.linkedin.com" />
                        <MediaIcons icon="/Images/Footer/Facebook-Icon.webp" href="https://www.facebook.com" />
                        <MediaIcons icon="/Images/Footer/Instagram-Icon.webp" href="https://www.instagram.com" />
                        <MediaIcons icon="/Images/Footer/Twitter-Icon.webp" href="https://www.twitter.com" />
                    </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    custom="right"
                    variants={variants}
                >
                    <h3 className="text-primary font-bold text-lg mb-4">Stay Updated</h3>
                    <p className="text-sm mb-4">Subscribe to our newsletter for updates and offers.</p>
                    <form className="flex flex-col items-center md:items-start">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="p-2 mb-2 border rounded w-full"
                        />
                        <motion.button className="bg-primary text-white cursor-pointer px-4 py-2 rounded" whileTap={{scale:0.9, opacity: 0.8}}>Subscribe</motion.button>
                    </form>
                </motion.div>
            </div>

            {/* Copyright */}
            <div className="relative border-t border-primary py-4">
                <p className="text-xs md:text-sm text-center md:text-right px-5">
                    &copy; 2025 Room Bridge All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
