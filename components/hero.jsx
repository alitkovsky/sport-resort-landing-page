import SearchBox from "@/components/search-box";

const Hero = () => {
  return (
    <section className="
      flex
      justify-center
      items-center
      pt-24
      pb-12
      xl:py-0
      xl:h-svh
      xl:bg-hero
      bg-hero2
      bg-cover
      bg-center
      bg-no-repeat
    ">
      <div className="
        flex
        justify-center
        items-center
        container
        mx-auto
        xl:justify-start
      ">
        <SearchBox />
      </div>
   </section>
  );
};

export default Hero;