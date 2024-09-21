import Image from "next/image";

export const Map = () => {
  return (
    <section className="wrapper relative h-[367px] md:h-[560px]">
      <div className="absolute inset-0 md:relative w-full h-[367px] md:h-[560px]">
        <Image
          src="/assets/contact/desktop/image-map.png"
          alt="map"
          className="hidden lg:block w-full h-[560px] object-cover"
          width={1110}
          height={560}
        />
        <Image
          src="/assets/contact/tablet/image-map.png"
          alt="map"
          className="hidden md:block lg:hidden mx-auto"
          width={572}
          height={560}
        />
        <Image
          src="/assets/contact/mobile/image-map.png"
          alt="map"
          className="block md:hidden w-full h-[367px] object-cover"
          width={375}
          height={367}
        />
      </div>
    </section>
  );
};
