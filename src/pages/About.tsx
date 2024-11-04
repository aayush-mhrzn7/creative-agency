import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const About = () => {
  return (
    <div className=" bg-MainbackgroundColor max-lg:p-10 max-xl:p-16 px-40 py-20 font-primary ">
      <h1 className="text-5xl font-heading text-center mb-10 text-accent">
        About Me
      </h1>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
        <img
          src="https://placehold.co/600x400"
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
        <div className="bg-shadowColor rounded-md shadow-md shadow-shadowColor p-4">
          <span className="block text-accent text-xl">Intro</span>
          <h4 className="text-2xl font-medium">Escape into my Alter-Ego</h4>
          <p className="text-lg leading-loose max-xl:leading-normal">
            A freelance fashion designer, photographer, and visual artist born
            and raised in Kathmandu, Nepal. Growing up, I was the diligent
            student expected to excel in Science, my major in high school, and
            perhaps pursue a career in that field. In Nepalese society, there is
            a strong emphasis on the science field for higher studies, and of
            course, I was encouraged to follow that path. However, my true
            passion has always been in the arts. From painting and sketching to
            draping myself in my mom's shawls for a little fantasy fashion show,
            I was always keen on creative explorations. At 19, I decided to
            follow my true interests and moved to Paris to pursue a Bachelor in
            Fashion Design, with great support from family and friends. Those
            three hectic years solidified my desire to craft my own artistic
            identity, drawing inspiration from the rich traditions of my
            Nepalese heritage. It often felt like a lost journey, as sometimes I
            did not know what I was doing, doubted myself a lot, and made
            mistakes. But I guess that is how we begin to really connect with
            ourselves. It became a beautiful learning process about myself, my
            skills, my traditions, and my changing surroundings.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-6 gap-6">
        <div className="h-[200px] bg-shadowColor rounded-md shadow-md shadow-shadowColor flex justify-end p-4 items-start flex-col border">
          <FaLinkedinIn className="text-6xl text-blue-500" />
          <span className="font-medium text-lg mt-1">LinkedIn</span>
        </div>
        <div className="h-[200px] bg-shadowColor rounded-md shadow-md shadow-shadowColor flex justify-end p-4 items-start flex-col border">
          <FaFacebook className="text-6xl text-blue-600" />
          <span className="font-medium text-lg mt-1">Facebook</span>
        </div>
        <div className="h-[200px] bg-shadowColor rounded-md shadow-md shadow-shadowColor flex justify-end p-4 items-start flex-col border">
          <FaInstagram className="text-6xl text-[#E1306C]" />
          <span className="font-medium text-lg mt-1">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default About;
