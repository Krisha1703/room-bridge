import FooterMenus from "./footer-menus";
import { motion } from 'motion/react';
import MediaIcons from "./media-icons";
import { memo } from "react"
import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";

const Footer = () => {

    const variants = { 
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
        <footer className="footer relative">
            <div className="container w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left py-10 px-5">
                
                {/* Quick Links */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    custom="left"
                    variants={variants}
                >
                    <h3 className="text-primary font-bold text-lg mb-4">Quick Links</h3>
                    <ul>
                        <FooterMenus Menu="Home" Route="/" />
                        <FooterMenus Menu="About Us" Route="/about" />
                        <FooterMenus Menu="Explore" Route="/explore" />
                        <FooterMenus Menu="Offers" Route="/offers" />
                        <FooterMenus Menu="Contact Us" Route="/contact" />
                    </ul>
                </motion.div>

                 {/* Company */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    custom="left"
                    variants={variants}
                >
                    <h3 className="text-primary font-bold text-lg mb-4">FAQs</h3>
                    <ul>
                        <FooterMenus Menu="Booking Process" Route="/careers" />
                        <FooterMenus Menu="Cancellation Policy" Route="/press" />
                        <FooterMenus Menu="Payment Options" Route="/privacy-policy" />
                        <FooterMenus Menu="Services & Amenities" Route="/terms-of-service" />
                        <FooterMenus Menu="Pet-Friendly Policies" Route="/help-center" />
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
                    <div className="text-md mb-2 font-semibold text-primary hover:text-secondary ">
                        <p>123 Main Street, City, Country</p>
                        <p><a href="mailto:getintouch@aplusatech.com">getintouch@roombridge.com</a></p>
                        <p>+XX 12345 67890</p>
                    </div>
                    
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
                        <MediaIcons icon={<LinkedIn />} href="https://www.linkedin.com" />
                        <MediaIcons icon={<Facebook />} href="https://www.facebook.com" />
                        <MediaIcons icon={<Instagram />} href="https://www.instagram.com" />
                        <MediaIcons icon={<X />} href="https://www.twitter.com" />
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
                    <p className="text-md mb-4 font-semibold text-primary hover:text-secondary cursor-pointer">Subscribe to our newsletter for updates and offers.</p>
                    <form className="flex flex-col items-center md:items-start">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="p-2 mb-2 border rounded w-full"
                        />
                        <motion.button className="bg-primary text-white cursor-pointer px-4 py-2 rounded hover:bg-secondary" whileTap={{scale:0.9, opacity: 0.8}}>Subscribe</motion.button>
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

export default memo(Footer);
