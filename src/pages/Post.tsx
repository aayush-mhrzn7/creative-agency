type postProps = {
  heading: string;
  subHeading: string;
  coverImage: string;
  description: string;
  imageArray: string[];
  references: string[];
};
const Post = ({
  heading,
  subHeading,
  coverImage,
  imageArray,
  description,
  references,
}: postProps) => {
  return (
    <div className="bg-MainbackgroundColor font-primary max-lg:p-10 max-xl:p-16 px-40 py-20">
      <section className="w-full">
        <h2 className="text-4xl font-semibold text-primary">{heading}</h2>
        <span className="block text-lg font-medium">{subHeading}</span>
        <img className="w-full my-4 rounded-md" src={coverImage} alt="" />
        <p className="text-xl leading-relaxed my-4">{description}</p>
        <span className="text-xl font-medium text-primary my-4 block">
          Images:
        </span>
        <div className="grid grid-cols-4 gap-7 max-md:grid-cols-2 max-sm:grid-cols-1">
          {imageArray.map((img, index) => (
            <img src={img} key={index} className="w-full" />
          ))}
        </div>
        <p className="text-lg my-5">
          {references.map((ref, index) => (
            <span key={index}>{ref}</span>
          ))}
        </p>
      </section>
    </div>
  );
};

export default Post;
