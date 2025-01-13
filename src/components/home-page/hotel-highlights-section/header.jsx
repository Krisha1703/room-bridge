import { motion } from "motion/react";

const Header = ({ translateY }) => {
    return (
      <motion.div
        style={{
          translateY,
        }}
        className="w-5/6 mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-4">
          Why Choose RoomBridge?
        </h2>
      </motion.div>
    );
  };

  export default Header;