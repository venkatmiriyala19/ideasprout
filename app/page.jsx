import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Cultivate & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">Project Ideas</span>
        </h1>
        <p className="desc text-center">
          IdeaSprout is an open-source platform where you can share innovative
          project ideas and suggest features to enhance various initiatives.
        </p>

        <Feed />
      </section>
    </>
  );
};

export default Home;
