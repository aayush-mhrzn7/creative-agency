const Home = () => {
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
  ];
  return (
    <div className="bg-MainbackgroundColor font-primary max-lg:p-10 max-xl:p-16 px-40 py-20 ">
      <div className="h-[80vh] bg-MainbackgroundColor w-full flex justify-center items-center">
        <h1 className="text-7xl font-bold uppercase text-primary">
          fashion designer
        </h1>
      </div>
      <div>
        {array.map((card, index) => (
          <div key={index} className="py-4">
            <h4 className="text-2xl my-4 font-semibold capitalize text-primary">
              {card.title}
            </h4>
            <div className="grid grid-cols-4 gap-7 max-md:grid-cols-2 max-sm:grid-cols-1">
              {card.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="image"
                  className="w-full rounded-lg shadow-sm"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
