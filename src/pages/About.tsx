import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import pfp from "../assets/pfp.png";
import lowres from "../assets/lowres.png";
import { useState } from "react";
const About = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className=" h-screen overflow-auto overflow-y-auto bg-MainbackgroundColor max-lg:pt-20 max-lg:p-10 max-xl:p-16 px-40 py-20 font-primary">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8, staggerChildren: 0.07 }}
        className="text-5xl font-heading text-center mb-10 text-accent"
      >
        {String("About Me")
          .split("")
          .map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="grid grid-cols-2  max-lg:grid-cols-1 gap-6"
      >
        <img
          src={loaded ? pfp : lowres}
          onLoad={() => setLoaded(true)}
          alt="Profile picture"
          style={{ filter: loaded ? undefined : "blur(8px)" }}
          className="h-[490px] w-full object-cover object-center rounded-md"
        />
        <div className="bg-shadowColor rounded-md shadow-md shadow-shadowColor p-4">
          <span className="block text-accent text-xl">Intro</span>
          <h4 className="text-2xl font-medium">Aspiring Software Engineer</h4>
          <p className="text-lg leading-loose max-xl:leading-normal">
            I'm a junior full-stack developer with a strong passion for creating
            functional and engaging digital experiences. With a foundation in
            the MERN stack, I enjoy building everything from dynamic frontend
            interfaces to efficient backend solutions. Currently, I’m working
            toward my Bachelor’s degree in Computer Science and Information
            Technology at Kathford College in Kathmandu, Nepal. I’m drawn to the
            creative and problem-solving side of coding, always excited to
            tackle new challenges and learn from each project. My journey so far
            has been about combining my technical skills with a sense of
            curiosity, whether I'm debugging a tricky piece of code or
            optimizing the user experience. I'm eager to continue growing as a
            developer and contribute meaningfully to projects that make a
            difference.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.6, staggerChildren: 0.7 }}
        className="grid grid-cols-3 max-sm:grid-cols-1 mt-6 gap-6"
      >
        <motion.div className="h-[200px] bg-shadowColor rounded-md shadow-md shadow-shadowColor flex justify-end p-4 items-start flex-col border">
          <a
            href="https://www.linkedin.com/in/aayush-maharjan-47a017316/?profileId=ACoAAFAXot4BE42Ysu2rLGbcUNedRF0AOuZ6AFw" // replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn className="text-6xl text-blue-500" />
          </a>
          <span className="font-medium text-lg mt-1">LinkedIn</span>
        </motion.div>

        <motion.div className="h-[200px] bg-shadowColor rounded-md shadow-md shadow-shadowColor flex justify-end p-4 items-start flex-col border">
          <a
            href="https://github.com/aayush-mhrzn7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-6xl text-black" />
          </a>
          <span className="font-medium text-lg mt-1">Github</span>
        </motion.div>

        <motion.div className="h-[200px] bg-shadowColor rounded-md shadow-md shadow-shadowColor flex justify-end p-4 items-start flex-col border">
          <a
            href="https://www.instagram.com/aayush_mhrzn7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <FaInstagram className="text-6xl text-[#E1306C]" />
          </a>
          <span className="font-medium text-lg mt-1">Instagram</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
