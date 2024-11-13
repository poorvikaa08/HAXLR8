import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/assets/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/assets/services.png",
        label: "Services",
        href: "/services",
      },
      {
        icon: "/assets/records.png",
        label: "Medical Records",
        href: "/records",
      },
      {
        icon: "/assets/appointment.png",
        label: "Appointments",
        href: "/appointments",
      },
      {
        icon: "/assets/about.png",
        label: "About",
        href: "/about",
      },
      {
        icon: "/assets/contact.png",
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/assets/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/assets/settings.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/assets/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

// export default function Menu(){
  const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        //used section instead of i
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>
          {section.items.map((item) => (
            //item instead of i
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <Image src={item.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
