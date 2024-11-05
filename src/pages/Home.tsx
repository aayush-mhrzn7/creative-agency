import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const Home = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const array = [
    {
      title: "Phase 1 | Journey of Inspiration",
      image: [
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
      ],
    },
    {
      title: "Phase 2 | My Alter Ego",
      image: [
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
      ],
    },
    {
      title: "Phase 3 | material developments",
      image: [
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
      ],
    },
    {
      title: "Phase 4 | mood and illustrations",
      image: [
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
      ],
    },
    {
      title: "Phase 5 | visual photoshoot",
      image: [
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
        "https://placehold.co/300x300",
      ],
    },
  ];
  const skills = ["fashion designer", "creative", "freelancer", "photographer"];
  const showNextSkill = () => {
    setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      showNextSkill();
      console.log(currentSkillIndex);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-MainbackgroundColor font-primary max-lg:p-10 max-xl:p-16 px-40 py-20 ">
      <div className="h-[80vh] bg-MainbackgroundColor w-full flex justify-center items-center">
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
        {array.map((card, index) => (
          <div key={index} className="py-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.6 }}
              className="text-2xl my-4 cursor-pointer font-semibold capitalize text-primary"
            >
              {card.title}
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
                  }}
                  key={index}
                  src={img}
                  alt="image"
                  className="w-full rounded-lg shadow-sm "
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
