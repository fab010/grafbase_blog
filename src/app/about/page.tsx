import Image from "next/image";


export const metadata = {
  title: "About Page",
  description: "About blog grafbase",
};


const About = () => {
  return (
    <div className="flex justify-center gap-[100px]">
      <div className="flex-1 flex flex-col gap-[50px]">
        <h2 className="text-[--btn]">About Agency</h2>
        <h1 className="text-[30px] tracking-tight">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-xl font-normal">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission. Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-[--btn]">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[--btn]">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[--btn]">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default About;