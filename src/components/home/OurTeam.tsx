import Project1 from "@/assets/our-story.webp";
import { Link } from "react-router-dom";

export default function OurTeam() {
  const teams = [
    {
      title: "Manufacturing",
      img: Project1,
      link: "/",
    },
    {
      title: "Manufacturing",
      img: Project1,
      link: "/",
    },
    {
      title: "Manufacturing",
      img: Project1,
      link: "/",
    },
    {
      title: "Manufacturing",
      img: Project1,
      link: "/",
    },
  ];

  return (
    <section className="bg-[#F7F9FB]">
      <div className="max-w-7xl mx-auto py-24 px-4 md:px-10 lg:px-12">
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <h2 className="mb-[5px] text-[35px] leading-[45px] font-semibold text-[#232323]">
            Our team
          </h2>
          <p className="max-w-[700px] text-center mx-auto pt-[10px] text-[15px] text-[#494949] leading-[28px] mb-[24px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
          {teams.map((team, index) => (
            <Link
              key={index}
              to={team.link}
              className="relative flex justify-center items-center group"
            >
              <img
                src={team.img}
                alt="project1 "
                className="w-full h-full rounded-sm group-hover:-translate-y-4 transition-all ease-in-out duration-300"
              />
              <div className="p-[15px] opacity-0 bg-[#fff] group-hover:opacity-100 translate-y-4  group-hover:-translate-y-4 transition-all ease-in-out duration-300 rounded-sm absolute bottom-4 z-[1px] w-[242px]">
                <h4 className="text-[16px] font-semibold leading-[24px] text-[#232323] ">
                  {team.title}
                </h4>
                <span className="text-[13px] font-semibold mb-[10px] text-[#000] uppercase opacity-45">
                  Manager
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
