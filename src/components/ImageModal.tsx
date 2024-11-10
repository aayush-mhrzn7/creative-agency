import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
const ImageModal = ({ img, onClose }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.7 }}
        className="relative mx-10  bg-white p-4 rounded-lg shadow-lg z-10"
      >
        <button
          className="absolute bg-primary p-4 font-bold rounded-full top-2 right-2 text-white"
          onClick={onClose}
        >
          <FiX />
        </button>
        <img
          src={img}
          alt=""
          className="w-full h-full rounded-lg  object-contain"
        />
      </motion.div>
    </div>
  );
};

export default ImageModal;
