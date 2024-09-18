import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#F8ECFF] ">
      <div className="pt-16 flex flex-col md:flex-row gap-5 px-[10%]">
        {/* left part  */}
        <div className="flex-1">
          <img
            className="w-40 h-40"
            src="https://i.ibb.co.com/DzY8hHm/LOGO.png"
            alt=""
          />
          <p className="text-xs md:text-xl lg:text-2xl text-[#000000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
            saepe atque voluptas tempora magni deleniti eius quis, temporibus,
            reprehenderit, fuga ratione velit alias perferendis labore commodi
            necessitatibus sunt est?
          </p>
          <h3 className="text-[#33118133] text-2xl md:text-5xl lg:text-7xl font-semibold">
            MEETWISE{" "}
          </h3>
        </div>
        {/* right part  */}
        <div className="grid grid-cols-3 gap-2 md:gap-5 border flex-1 text-black text-center">
          <div className="flex flex-col gap-3 border  ">
            <h2 className="text-lg font-bold">Product</h2>
            <h2>Overview</h2>
            <h2>Meet-wise AI</h2>
            <h2>integration</h2>
          </div>
          <div className="flex flex-col gap-3 border ">
            <h2 className="text-lg font-bold">Company</h2>
            <h2>About</h2>
            <h2>Mission and Values</h2>
            <h2>Pricing</h2>
          </div>
          <div className="flex flex-col gap-3 border">
            <h2 className="text-lg font-bold">Recourse</h2>
            <h2>Career</h2>
            <h2>Contact us</h2>
            <h2>Blog</h2>
          </div>
        </div>
      </div>
      <p className="text-black text-center py-12">
        © 2024 MeetWise | Simplifying your online meeting experience.
      </p>
    </div>
  );
};

export default Footer;
