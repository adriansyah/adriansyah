import Github from "../../../../public/github.svg";
import LinkedIn from "../../../../public/linkedin.svg";
import { MailIcon } from "@heroicons/react/outline";

export const Socials = () => {
  const socialLinks = [
    {
      name: "Github",
      logo: <Github className="h-6 w-6" />,
      href: "https://github.com/adriansyah",
    },
    {
      name: "LinkedIn",
      logo: <LinkedIn className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/adriansyahk",
    },
    {
      name: "Email",
      logo: <MailIcon className="h-6 w-6" />,
      href: "mailto:adriansyahk@gmail.com",
    },
  ];
  return (
    <div className="flex">
      {socialLinks.map((social) => (
        <a
          className="mb-5 mr-2 text-gray-400 hover:text-gray-500"
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="sr-only">{social.name}</span>
          {social.logo}
        </a>
      ))}
    </div>
  );
};
