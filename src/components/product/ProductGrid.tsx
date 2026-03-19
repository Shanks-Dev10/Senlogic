import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { productLists } from "@/data/products";

export default function Products() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="">
      <div className="md:max-w-7xl max-w-full mx-auto py-24 px-4  lg:px-12">
        <Tabs
          defaultValue="Category-1"
          className="flex flex-col justify-center items-center gap-5"
        >
          <TabsList className="bg-transparent gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {productLists.map((lists, index) => (
              <TabsTrigger
                key={index}
                value={lists.value}
                className="px-4 py-3 text-[#000] border border-gray-300 hover:bg-[#d2151e] hover:text-[#fff]
  data-[state=active]:bg-[#d2151e] data-[state=active]:text-white
  data-[state=active]:border-[#d2151e] rounded-full
  text-center text-sm leading-tight
  whitespace-normal break-words
  w-full"
              >
                {lists.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {productLists.map((item) => (
            <TabsContent key={item.value} value={item.value}>
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                {item.details.map((product) => (
                  <Link
                    to={`/product/${product.slug}`}
                    key={product.id}
                    onMouseEnter={() => setHovered(product.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="group relative bg-white overflow-hidden cursor-pointer
          shadow-sm hover:shadow-xl transition-shadow duration-500"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-[260px]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700
              group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div
                        className={`absolute inset-0 bg-black/60 transition-opacity duration-500
              ${hovered === product.id ? "opacity-80" : "opacity-0"}`}
                      />

                      {/* Hover CTA */}
                      <div
                        className={`absolute inset-0 flex flex-col items-center justify-center gap-3
              transition-all duration-500
              ${hovered === product.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                          }`}
                      >
                        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                          <ArrowUpRight size={20} className="text-white" />
                        </div>
                        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                          View Project
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div
                      className="px-5 py-4 flex items-center justify-between
            border-l-4 border-transparent group-hover:border-[#D2151E]
            transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-[13px] font-black text-[#111] uppercase tracking-wide group-hover:text-[#D2151E]">
                          {product.title}
                        </h3>
                        <p className="py-3">{product.shortDesc}</p>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-[#ccc] group-hover:text-[#D2151E]
              group-hover:translate-x-0.5 group-hover:-translate-y-0.5
              transition-all duration-300"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
