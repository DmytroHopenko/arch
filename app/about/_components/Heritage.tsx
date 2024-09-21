import Image from "next/image";

export const Heritage = () => {
  return (
    <section className="wrapper py-[76px] md:py-[200px] flex justify-between gap-10">
      <div className="lg:max-w-[446px] flex flex-col lg:justify-between gap-10 md:gap-10 lg:gap-0">
        <div className="h-[1px] w-[65px] bg-[#C8CCD8]" />
        <h1 className="title line-clamp-2 w-[250px] md:w-[270px]">Our Heritage</h1>
        <p className="paragraph">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country. <br />
          <br />
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs. <br />
          <br />
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      <div className="hidden lg:block w-[540px] h-[568px]">
        <Image
          src="/assets/about/desktop/image-heritage.jpg"
          alt="heritage"
          width={540}
          height={568}
          className="object-cover h-[568px]"
        />
      </div>
    </section>
  );
};
