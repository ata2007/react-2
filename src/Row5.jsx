import React from "react";
import {
  FaGlobe, FaObjectUngroup, FaCashRegister, FaPassport,
  FaPaintBrush, FaCube, FaAppStoreIos, FaShopify
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe className="text-blue-700 text-4xl mb-4" />,
    title: "Web Development",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    number: "01"
  },
  {
    icon: <FaObjectUngroup className="text-blue-700 text-4xl mb-4" />,
    title: "UI / UX DESIGN",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    number: "02"
  },
  {
    icon: <FaCashRegister className="text-blue-700 text-4xl mb-4" />,
    title: "eCommerce Solution",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    number: "03"
  },
  {
    icon: <FaPassport className="text-blue-700 text-4xl mb-4" />,
    title: "CMS Development",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    number: "04"
  },
  {
    icon: <FaPaintBrush className="text-blue-700 text-4xl mb-4" />,
    title: "Web Design",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    number: "05"
  },
  {
    icon: <FaCube className="text-blue-700 text-4xl mb-4" />,
    title: "3D Printing",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    number: "06"
  },
  {
    icon: <FaAppStoreIos className="text-blue-700 text-4xl mb-4" />,
    title: "App Development",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    number: "07"
  },
  {
    icon: <FaShopify className="text-blue-700 text-4xl mb-4" />,
    title: "Marketing",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    number: "08"
  }
];

function Row5() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-3xl md:text-5xl font-extrabold text-blue-900 drop-shadow">
            My servi<span className="text-blue-700">ces</span>
          </p>
          <p className="text-xl md:text-2xl text-blue-800 font-semibold mt-2">Provide Wide Range of</p>
          <p className="text-xl md:text-2xl text-blue-800 font-semibold">Digital Services</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <span className="mb-2">{service.icon}</span>
              <p className="text-lg font-bold text-blue-900 mb-2">{service.title}</p>
              <p className="text-blue-800 mb-4">{service.desc}</p>
              <div className="flex items-center gap-2 mt-auto">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-lg shadow">{service.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Row5;