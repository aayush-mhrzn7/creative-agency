import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import kaizen1 from "../assets/kaizen1.png";
import kaizen2 from "../assets/kazien2.png";
import kaizen3 from "../assets/kzien3.png";
import kaizen4 from "../assets/kaizen4.png";
import note1 from "../assets/note1.png";
import note2 from "../assets/note2.png";
import note3 from "../assets/note3.png";
import note4 from "../assets/note4.png";
import ImageModal from "../components/ImageModal";
import { viewImageModalTypes } from "../types/kaizen";
import Footer from "../components/Footer";

/* import Post from "./Post";
const varaints = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: (i: number) => {
    const delay = i * 0.2;
    return {
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 1.5,
          bounce: 0,
          repeat: Infinity,
        },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
*/
const Home = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [viewModalStatus, setImageModalStatus] = useState(false);
  const [viewModal, setImageModal] = useState<string>("");
  const array = [
    {
      title: "Kaizen | an application for building consitency",
      image: [kaizen3, kaizen4, kaizen1, kaizen2],
      date: "2024/10/10 - 2024/11/4",
      liveLink: "https://kaizen-seven.vercel.app/",
      githubLink: "https://github.com/aayush-mhrzn7/kaizen",
    },
    {
      title: "Note IT | Store your Thoughts",
      image: [note2, note1, note3, note4],
      date: "2024/10/10 - 2024/11/4",
      liveLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      githubLink: "https://github.com/aayush-mhrzn7/noteIt",
    },
    {
      title: "Kitab | Book Ecommerce Store ",
      image: [book2, book1, book3, book4],
      date: "2024/10/10 - 2024/11/4",
      liveLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      githubLink: "https://github.com/aayush-mhrzn7/book-store",
    },
  ];
  const skills = [
    "Frontend developer",
    "freelancer",
    "FullStack developer",
    "Web developer",
    "MERN Stack Developer",
    "React Developer",
    "Responsive Web Developer",
  ];
  const showNextSkill = useCallback(() => {
    setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
  }, [skills.length]);
  useEffect(() => {
    const timer = setInterval(() => {
      showNextSkill();
    }, 2000);
    return () => clearInterval(timer);
  }, [showNextSkill, currentSkillIndex]);
  const handleViewModalStatus = (img: viewImageModalTypes) => {
    setImageModalStatus(!viewModalStatus);
    setImageModal(img);
  };
  return (
    <div className="bg-MainbackgroundColor font-primary max-lg:p-10 max-xl:p-16 px-40 py-20 ">
      <div className="h-[80vh] bg-MainbackgroundColor w-full flex justify-center items-center">
        {viewModalStatus && (
          <ImageModal
            img={viewModal}
            onClose={() => setImageModalStatus(false)}
          />
        )}
        <AnimatePresence mode="wait">
          <motion.h1
            key={skills[currentSkillIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ ease: "easeInOut" }}
            className="text-7xl max-sm:text-5xl font-bold uppercase text-primary"
          >
            {skills[currentSkillIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>
      <div>
        <h2 className="text-3xl  cursor-pointer font-semibold capitalize text-primary">
          My Projects
        </h2>
        {array.map((card, index) => (
          <div key={index} className="py-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.6 }}
              className="text-2xl my-4 cursor-pointer flex justify-between max-sm:flex-col max-sm:items-start items-center font-semibold capitalize text-primary"
            >
              {card.title}
              <span className="block text-lg my-2">({card.date})</span>
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                staggerChildren: 4,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              className="grid grid-cols-4 gap-7 max-md:grid-cols-2 max-sm:grid-cols-1"
            >
              {card.image.map((img, index) => (
                <motion.img
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.2,
                    ease: "easeInOut",
                    scale: {
                      delay: 0,
                    },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => handleViewModalStatus(img)}
                  key={index}
                  src={img}
                  style={{
                    display: "block",
                  }}
                  alt="image"
                  className="w-full object-cover h-[300px] rounded-lg shadow-md "
                />
              ))}
            </motion.div>
            <span className=" my-4 block w-full">
              <a
                className="capitalize mr-4 font-semibold text-secondary hover:text-primary transition-colors"
                href={card.liveLink}
                target="_blank"
              >
                View Live
              </a>
              <a
                className="capitalize font-semibold text-secondary hover:text-primary transition-colors"
                href={card.githubLink}
                target="_blank"
              >
                Source code
              </a>
            </span>
          </div>
        ))}
      </div>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="text-3xl mt-20 my-4 cursor-pointer font-semibold capitalize text-primary"
        >
          Technical Skills
        </motion.h2>
        <div>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.1 }}
            className="text-2xl my-2 cursor-pointer font-semibold capitalize text-primary"
          >
            Primary Skills
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            className="text-lg capitalize tracking-wide font-medium"
          >
            HTML, CSS, Javascript,Typescript, React, Node.js, Java
          </motion.p>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            className="text-2xl my-2 cursor-pointer font-semibold capitalize text-primary"
          >
            Secondary Skills
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            className="text-lg capitalize tracking-wide font-medium"
          >
            Redux, tailwind, MongoDB, MySql, Express, Git,AppWrite
          </motion.p>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            className="text-2xl my-2 cursor-pointer font-semibold capitalize text-primary"
          >
            Other Skills
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            className="text-lg capitalize tracking-wide font-medium"
          >
            framer motion, API Integrations, UI UX,
          </motion.p>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
            className="text-3xl mt-8 mb-4 cursor-pointer font-semibold capitalize text-primary"
          >
            Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            className="text-2xl capitalize  flex justify-between items-center mb-1 tracking-wide font-medium"
          >
            Kathford College of Engineering and Management
            <span className="text-lg text-primary">2022 - ongoing</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            className="font-semibold text-xl text-secondary"
          >
            Bachlors in Computer Science and Information Technology BSCCSIT
          </motion.p>
        </div>
      </div>
      <motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="text-3xl mt-8 mb-4 cursor-pointer font-semibold capitalize text-primary"
        >
          Work Experience
        </motion.h2>

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.6, delay: 0.4 }}
          className="text-2xl capitalize  flex justify-between items-center my-2 tracking-wide font-medium"
        >
          Kishancare | MERN Intern
          <span className="text-lg text-primary"> Oct 2024 - ongoing</span>
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.6, delay: 0.4 }}
          className=" text-xl text-black"
        >
          Kishan Care, powered by Yuwasoft Technologies, is revolutionizing
          dairy and vet accounting with smart accounting solutions. I developed
          their{" "}
          <strong className="capitalize">
            entire front-end web application
          </strong>{" "}
          using <strong className="capitalize">React</strong>, Collaborating
          with the backend teams to integrate the{" "}
          <strong className="capitalize">API. </strong>
          Additionally, I implemented{" "}
          <strong className="capitalize">responsive design, </strong>
          ensuring a seamless user experience across various devices, and
          contributed to the UI/UX improvements to enhance usability and
          performance.
        </motion.p>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
