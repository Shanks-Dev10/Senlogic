import Ourstoryimg from "@/assets/our-story.webp";
import { Link } from "react-router-dom";

export default function OurStory() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-[100px] lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">
          <div>
            <span className="text-[#d2151e] text-[22px] mb-[10px] uppercase">
              Our Story
            </span>
            <h2 className="lg:text-[50px] text-[32px] leading-[46px] lg:leading-[70px] font-normal mb-[20px] text-[#232323]">
              Commited to High <br /> Quality
              <span
                className="text-[#d2151e] italic pl-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Service
              </span>
            </h2>
            <h4 className="text-[26px] leading-[40px] font-medium text-[#999] mb-[15px]">
              Senlogic Automation Private Limited a professionally managed
              company, engaged in the weighing Automation Activities
              Incorporated in February 2002.
            </h4>
            <p className="text-[16px] leading-[32px] text-[#000] mb-[24px]">
              The company offers a complete range of products for core sectors
              such as Rail In-motion Weighing Systems, Rail Static Weighing
              System and On Board Weighing Solution for Earth moving equipments
              also providing complete weighing solution for steel plants, Cement
              plants, Power plants etc and other weighing automation from design
              through implementation to operation and customized product
              development.
            </p>
            <Link
              to={"/"}
              className="bg-[#d2151e] py-[12px] px-[30px] text-[13px] font-semibold rounded-sm text-white"
            >
              Read More
            </Link>
          </div>
          <div className="md:h-[600px] h-full bg-cover">
            <img
              src={Ourstoryimg}
              alt="Our Story"
              className="w-full h-full bg-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#d2151e]">
        <div className="md:max-w-7xl max-w-full mx-auto py-[30px] flex md:flex-row flex-col justify-between items-center px-2 md:px-10 lg:px-12">
          <h2 className="text-[24px] font-semibold mb-[5px] text-[#fff] leading-[45px] text-center md:text-start">
            Amazing things happen to your business
          </h2>
          <Link
            to={"/"}
            className="bg-[#000] py-[12px] px-[30px] text-[13px] font-semibold rounded-sm text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
