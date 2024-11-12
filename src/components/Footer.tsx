import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
      className="w-full mt-20 bg-primary text-white font-primary p-4"
    >
      <span className="max-sm:text-lg font-semibold text-xl flex items-center justify-center">
        &copy; 2024 Aayush Maharjan All Rights Reserved
      </span>
    </motion.div>
  );
};

export default Footer;
