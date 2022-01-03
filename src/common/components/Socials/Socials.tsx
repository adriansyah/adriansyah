import Github from "../../../../public/github.svg";
export const Socials = () => {
  const socialLinks = [
    {
      name: "Github",
      logo: <Github />,
      href: "www.github.com",
    },
    {
      name: "LinkedIn",
      logo: <Github />,
      href: "www.github.com",
    },
  ];
  return (
    <div>
      {socialLinks.map((social) => (
        <a
          className="text-gray-400 hover:text-gray-500"
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="sr-only">{social.name}</span>
          {/* {social.logo} */}
        </a>
      ))}
    </div>
  );
};
