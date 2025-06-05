import React from "react";

const brands = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" }
];

function Row8() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center drop-shadow">
          Trusted by <span className="text-blue-700">Top Brands</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                title={brand.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Row8;