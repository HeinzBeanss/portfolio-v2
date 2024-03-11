import planetsvg from "../assets/planet-portfolio-final-svg.svg";
import star from "../assets/star.svg";
import shootingstar from "../assets/shootingstar.svg";

const TitleText = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center pb-40 3xl:pb-72 gap-8 parallax-wrap">
      <h2 className="text-white text-8xl font-rubik transform">
        {"I'M DAVID"}
      </h2>
      <p className="text-white font-thin tracking-wider text-xl opacity-80">
        a full-stack developer.
      </p>
      {/* <div className="absolute w-96 h-96 rounded-full bg-gray-500 -bottom-40 inset-x-1/2 transform -translate-x-1/2 drop-shadow-glow"></div> */}
      {/* <div className="rounded-full w-32 h-32 absolute bg-white bottom-28 inset-x-1/2 transform -translate-x-1/2 translate-y-1/3 drop-shadow-glow"></div> */}
      <img
        src={planetsvg}
        alt="planet"
        className="absolute w-3/4 lg:max-w-screen-xl 3xl:max-w-full -bottom-16 3xl:-bottom-24 inset-x-1/2 transform -translate-x-1/2 translate-y-1/3"
      />
      <img
        src={shootingstar}
        alt="Shooting Star"
        className="absolute max-w-24 -rotate-90 -bottom-32 -right-32 animate-shooting-star"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute bottom-96 left-20 max-w-10"
        value="-2"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-52 left-48 opacity-60"
        value="4"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 bottom-32 right-48 opacity-80"
        value="6"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-96 inset-x-1/3 opacity-40"
        value="-3"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-60 right-32 opacity-80"
        value="-5"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-1/2 right-96 opacity-80"
        value="-2"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 bottom-20 left-96 opacity-80"
        value="1"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-32 right-1/3 opacity-50"
        value="3"
      />{" "}
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-2 right-2/3 opacity-80"
        value="-2"
      />
    </div>
  );
};

export default TitleText;
