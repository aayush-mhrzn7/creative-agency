import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
/* import { useNavigate } from "react-router-dom"; */
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
const imageArray = [
  "https://placehold.co/300x300",
  "https://placehold.co/300x300",
  "https://placehold.co/300x300",
  "https://placehold.co/300x300",
  "https://placehold.co/300x300",
  "https://placehold.co/300x300",
  "https://placehold.co/300x300",
  "https://placehold.co/300x300",
];
const ref = [
  "Various images sourced from different sites online, to provide the mood and inspirations for the collection. Specific credits where available",
  "Image 1 : Photo from 'Of Light’ by Hussein Chalayan and Nick Knight ",
  "Image 2 : 'Synesthesia' by Andy Chapman on Flickr",
  "Image 3 : Collagerittard on Tumblr",
  "Image 4 : Kaleidoscope Kids Shot By Harper Smith",
  "Image 5 : Deborah Parcesepe by Francesco Ormando ",
  "Image 6 : Wavy 1 - Purple/Orange by Larry Carlson",
]; */
const Home = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [viewModalStatus, setImageModalStatus] = useState(false);
  const [viewModal, setImageModal] = useState();
  const array = [
    {
      title: "Kaizen | an application for building consitency",
      image: [kaizen3, kaizen4, kaizen1, kaizen2],
      date: "2024/10/10 - 2024/11/4",
      liveLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
  /*  const navigate = useNavigate(); */
  const showNextSkill = () => {
    setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      showNextSkill();
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  const handleViewModalStatus = (img: any) => {
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
            className="text-7xl font-bold uppercase text-primary"
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
      {/*   <Post
        heading="Vibrant truth"
        subHeading="Phase II : My Alter-ego"
        description="Craving freedom in a strict household, shaped by the protective mentality of traditional Nepalese society, was challenging. I longed for the simple pleasures that many of the older teenagers enjoyed— spending time with friends whenever they could, exploring the city, the cafes and traveling somewhere far from the city.  The conservative nature of my upbringing, driven by concerns for women's safety, often limited these experiences.Walking through the alleys of Kathmandu, I observed the vibrant local life. Children playing outside their homes, the youths hanging out in cafes, and the overall busyness of the local markets and people revealed a different way of living. These experiences helped me discover my desire to be free and independent. I connected deeply with the rhythm of these alleys, finding a sense of freedom that eluded me at home.The boldness and joy of the locals inspired me to envision an independent, open, and vibrant self, embracing life without fear of judgment. These alleys delivered my own truth ,  this beautiful vision of my alter ego , where I have my little freedoms—I  feel bold and connected to the world around me."
        imageArray={imageArray}
        coverImage="https://placehold.co/600x200"
        references={ref}
      /> */}
    </div>
  );
};

export default Home;
