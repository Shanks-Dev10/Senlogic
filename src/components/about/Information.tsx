import { MapPin, Mail, Smartphone, Clock } from "lucide-react";

export default function ContactStrip() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Senlogic Automation Private Limited",
      text1: "No:52,Pudupedu village, Nandambakkam Post, kunrathur(Via)",
      text2: "Chennai - 600 069",
    },
    {
      icon: Mail,
      title: "E-mail",
      text1: "marketing@senlogicgroup.com",
      text2: "www.senlogicgroup.com",
    },
    {
      icon: Smartphone,
      title: "Phone Numbers",
      text1: "Mobile : +91 9380018943",
    },
    {
      icon: Clock,
      title: "Office Hours",
      text1: "Mon To Sat – 09.00–6.00",
      text2: "Sunday – Close",
    },
  ];

  return (
    <section className="bg-[#D2151E] py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="relative bg-gray-100 rounded-lg p-6 overflow-hidden"
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.text1}
              </p>

              <p className="text-gray-600 text-sm">
                {item.text2}
              </p>

              {/* Background Icon */}
              <Icon
                size={80}
                className="absolute right-4 bottom-2 text-gray-300 opacity-40"
              />
            </div>
          );
        })}

      </div>
    </section>
  );
}