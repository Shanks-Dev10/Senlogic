import { useState } from "react";
import { TrainFront, Truck, Factory } from "lucide-react";

type TabId = "railway" | "industrial" | "weighing";

type Tab = {
  id: TabId;
  label: string;
  mobileLabel: string;
  icon: React.ElementType;
};

type WeighingItem = {
  title: string;
  color: string;
};

type TabContent = {
  title: string;
  subtitle: string;
  items: WeighingItem[];
};

export default function WeighingSolutions() {
  const [activeTab, setActiveTab] = useState<TabId>("railway");

  const tabs: Tab[] = [
    {
      id: "railway",
      label: "Railway Weighing Systems",
      mobileLabel: "Railway Weighing Systems",
      icon: TrainFront,
    },
    {
      id: "weighing",
      label: "On-Board Weighing Systems",
      mobileLabel: "On-Board Weighing Systems",
      icon: Factory,
    },
    {
      id: "industrial",
      label: "Industrial Applications",
      mobileLabel: "Industrial Applications",
      icon: Truck,
    },
  ];

  const content: Record<TabId, TabContent> = {
    railway: {
      title: "Railway Weighing Systems",
      subtitle: "A KEY AREA OF SPECIALIZATION",

      items: [
        {
          title: " Rail Static Weighing System",
          color: "#00AFA9",
        },
        {
          title: "Wagon Tippler Weighing System ",
          color: "#214A92",
        },
        {
          title:
            " Portable Rail in Motion Cum Rail Static Weighing System – S Pass Weighing",
          color: "#00AFA9",
        },
        {
          title: "Rail In-Motion Weighing System",
          color: "#214A92",
        },
        {
          title: "Wheel & Axle Weighing System",
          color: "#00AFA9",
        },
      ],
    },

    weighing: {
      title: "On-Board Weighing Systems ",
      subtitle: "SOLUTIONS ACROSS OPERATING ENVIRONMENTS",

      items: [
        {
          title: " Wheel Loader Weighing System",
          color: "#214A92",
        },
        {
          title: "Excavator Weighing System",
          color: "#00AFA9",
        },
        {
          title: "Truck On-Board / Dumper Load Monitoring System",
          color: "#F59A23",
        },
        {
          title: " Forklift Weighing System ",
          color: "#3C9474",
        },
        {
          title: "Grubble Weighing System",
          color: "#00AFA9",
        },
        {
          title: "Road Weigh Bridges ",
          color: "#F59A23",
        },
        {
          title: "Unmanned Weigh Bridge System ",
          color: "#3C9474",
        },
      ],
    },

    industrial: {
      title: "Industrial Applications",
      subtitle: "MEASUREMENT • CONTROL • PROCESS EFFICIENCY",

      items: [
        {
          title: " Online Hot Billet Weighing System",
          color: "#214A92",
        },
        {
          title: "Ladle Car Weighing System",
          color: "#00AFA9",
        },
        {
          title: "Hot Metal SMS Crane Weighing System",
          color: "#F59A23",
        },
        {
          title: "  Ladle Turret Weighing System",
          color: "#214A92",
        },
        {
          title: "Torpedo Ladle Car Weighing System",
          color: "#00AFA9",
        },
        {
          title: "Pusher Car Weighing System ",
          color: "#F59A23",
        },
        {
          title: "Quenching Car Weighing System",
          color: "#214A92",
        },
        {
          title: "Tundish Weighing System ",
          color: "#00AFA9",
        },
        {
          title: "EOT Crane Weighing System ",
          color: "#F59A23",
        },
      ],
    },
  };

  const activeContent = content[activeTab];

  return (
    <section className="relative overflow-hidden bg-[#F5F8F2] py-14 sm:py-16 lg:py-20 xl:py-24">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-72 w-72 rounded-full bg-[#38A946]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-[#214A92]/10 blur-3xl sm:h-96 sm:w-96" />

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">
        {/* TABS */}
        <div className="mb-10 sm:mb-12">
          <div
            className="
              grid grid-cols-1 overflow-hidden rounded-2xl
              border border-[#DDE4E9]
              bg-white p-1
              shadow-[0_7px_24px_rgba(23,54,111,0.045)]
              transition-shadow duration-300
              sm:grid-cols-3
            "
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    group relative flex min-h-[58px] items-center justify-center
                    gap-2.5 rounded-xl px-4 py-3.5 text-left
                    transition-all duration-300
                    sm:min-h-[64px] sm:px-3
                    lg:px-5
                    ${
                      isActive
                        ? "bg-[#102C50] text-white shadow-sm"
                        : "text-[#102C50] hover:bg-[#F5F8F2]"
                    }
                  `}
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className={
                      isActive
                        ? "shrink-0 text-[#38A946]"
                        : "shrink-0 text-[#214A92]"
                    }
                  />

                  <span className="text-[13px] font-semibold leading-5 sm:text-sm">
                    <span className="hidden lg:inline">{tab.label}</span>
                    <span className="lg:hidden">{tab.mobileLabel}</span>
                  </span>

                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-t-full bg-[#38A946]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION HEADER */}
        <div key={activeTab} className="animate-in fade-in duration-300">
          <div className="mb-4 flex items-center gap-3 sm:gap-4">
            <span className="h-[3px] w-9 rounded-full bg-[#00AFA9] sm:w-12" />

            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#214A92] sm:text-[10px] sm:tracking-[0.2em]">
              {activeContent.subtitle}
            </span>
          </div>

          <h2
            className="
              max-w-4xl
              text-[30px]
              font-semibold
              leading-[1.12]
              tracking-[-0.025em]
              text-[#102C50]
              sm:text-[36px]
              md:text-[40px]
              lg:text-[44px]
            "
          >
            {activeContent.title}
          </h2>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-8 grid grid-cols-1 gap-4
            sm:mt-10 sm:grid-cols-2 sm:gap-5
            lg:gap-6
          "
        >
          {activeContent.items.map((item: WeighingItem, index: number) => (
            <div
              key={item.title}
              className="
                  group relative 
                   rounded-2xl
                  border border-[#DDE4E9]
                  bg-white
                  p-5 pl-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(23,54,111,0.09)]
                  sm:p-6 sm:pl-7
                "
            >
              {/* LEFT ACCENT */}
              <div
                className="absolute left-0 top-0 h-full w-1 sm:w-[4px]"
                style={{
                  backgroundColor: item.color,
                }}
              />

              {/* TOP ROW */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.14em] sm:text-[10px]"
                  style={{
                    color: item.color,
                  }}
                >
                  Solution {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{
                    backgroundColor: `${item.color}12`,
                    color: item.color,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="
                    mt-4
                    text-[17px]
                    font-semibold
                    leading-snug
                    tracking-[-0.015em]
                    text-[#102C50]
                    sm:text-[19px]
                  "
              >
                {item.title}
              </h3>

              {/* HOVER LINE */}
              <div
                className="
                    absolute bottom-0 left-0 h-[3px] w-0
                    transition-all duration-500
                    group-hover:w-full
                  "
                style={{
                  backgroundColor: item.color,
                }}
              />
            </div>
          ))}
        </div>

        {/* TAB INDICATOR */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              aria-label={`Open ${tab.label}`}
              onClick={() => setActiveTab(tab.id)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "w-10 bg-[#214A92]"
                    : "w-2 bg-slate-300 hover:bg-[#38A946]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
