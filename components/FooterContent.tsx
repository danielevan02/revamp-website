import Image from "next/image";
import React from "react";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
} from '@tabler/icons-react'

const FooterContent = () => {
  const socialMedia = [
    {
      name: 'facebook',
      icon: <IconBrandFacebookFilled />,
      link: "https://www.facebook.com/Gabag.Indonesia",
    },
    {
      name: 'instagram',
      icon: <IconBrandInstagram />,
      link: "https://www.instagram.com/gabagindonesia/",
    },
    {
      name: 'youtube',
      icon: <IconBrandYoutubeFilled />,
      link: "https://www.youtube.com/channel/UC2hMxlkIvWYfq-jBhHd2y0Q",
    },
  ];

  const detailMenu = [
    {
      title: "About Us",
      menu: ["Warranty", "Blog", "Event & Campaign", "Contact Us", "Career", "Gallery", "Join Reseller", "About Gabag"],
    },
    {
      title: "Customer Service",
      menu: ["Customer Order", "Track Shipment", "About Gabag Coin"],
    },
  ];
  return (
    <footer className="bg-slate-900 p-4 md:p-10 relative w-full">
      <div className="flex gap-5 justify-evenly flex-col md:flex-row">
        <div className="logo-content flex flex-col md:gap-10 gap-5 items-center">
          <Image src="/logo-footer.png" width={1000} height={1000} alt="logo" className="w-36 md:w-52 h-28 md:h-36 object-cover" />
          <div className="flex flex-col text-white-200 text-center">
            <span>Our Contact:</span>
            <span>+62 811-8242-224</span>
          </div>
          <div className="social-media flex justify-center gap-2">
            {socialMedia.map((item, i) => (
              <a
                href={item.link}
                key={i}
                className={`rounded-full bg-white-200 p-2 transition-all duration-200 hover:text-white
                    ${
                      item.name === "youtube"
                        ? "hover:bg-red-600"
                        : item.name === "instagram"
                        ? "hover:bg-pink-500"
                        : "hover:bg-blue-600"
                    }
                  `}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-20 mb-10">
          {detailMenu.map((item, i) => (
            <div key={i} className="text-white-200">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <ul>
                {item.menu.map((menu, i) => (
                  <li key={i}>{menu}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <span className="absolute bottom-1 left-1/2 z-10 text-white-200 -translate-x-1/2 w-full text-center line-clamp-1">
        Copyright&copy;2024 Daniel Evan{" "}
      </span>
    </footer>
  );
};

export default FooterContent;
