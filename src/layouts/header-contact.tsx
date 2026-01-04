import {
  CallIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

const contacts = [
  {
    name: "Linkedin",
    href: "#",
    icon: <LinkedinIcon className="text-secondary h-8 w-8" />,
  },
  {
    name: "+1 (514) 730 - 5534",
    href: "#",
    icon: <CallIcon className="text-secondary h-8 w-8" />,
  },
  {
    name: "info@lexo-800.com",
    href: "#",
    icon: <MailIcon className="text-secondary h-8 w-8" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <InstagramIcon className="text-secondary h-8 w-8" />,
  },
  {
    name: "Facebook",
    href: "#",
    icon: <FacebookIcon className="text-secondary h-8 w-8" />,
  },
];

export default function HeaderContact() {
  return (
    <header className="bg-primary py-6 w-full">
      <ul className=" text-secondary flex items-center justify-center divide-x-2">
        {contacts.map((item) => {
          return (
            <li key={item.name} className="px-4">
              <a href={item.href} className="flex items-center gap-2">
                {item.icon} <span className="text-lg font-semibold">{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
