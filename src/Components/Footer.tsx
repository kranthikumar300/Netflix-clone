const Footer = () => {
  const ContactLinks = [
    { name: "FAQ", url: "https://help.netflix.com/en/node/412" },
    { name: "Help Centre", url: "https://help.netflix.com/en" },
    {
      name: "Account",
      url: "https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount&serverState=%7B%22realm%22%3A%22growth%22%2C%22name%22%3A%22IDENTIFICATION%22%2C%22clcsSessionId%22%3A%22d93cd8b1-e681-4fb5-a169-0d4b5c46ac7c%22%2C%22sessionContext%22%3A%7B%22session-breadcrumbs%22%3A%7B%22funnel_name%22%3A%22loginWeb%22%7D%2C%22login.navigationSettings%22%3A%7B%22nextPage%22%3A%22https%3A%2F%2Fwww.netflix.com%2Fyouraccount%22%7D%7D%7D",
    },
    { name: "Media Centre", url: "https://media.netflix.com/en/" },
    { name: "Jobs", url: "https://jobs.netflix.com/" },
    { name: "Ways to Watch", url: "https://help.netflix.com/en/node/14361" },
    { name: "Terms of Use", url: "https://help.netflix.com/legal/termsofuse" },
    {
      name: "Only on Netflix",
      url: "https://www.netflix.com/in/browse/genre/839338",
    },
    { name: " Privacy", url: "https://help.netflix.com/legal/privacy" },
    { name: "Speed Test", url: "https://fast.com/" },
    { name: "Legal Notices", url: "https://help.netflix.com/legal/notices" },
    { name: "Contact Us", url: "https://help.netflix.com/en/contactus" },
  ];

  return (
    <>
      <footer className="min-h-96 bg-[#111111]">
        <div className="flex flex-col justify-center gap-5 p-4">
          <div>
            <a href="tel:000-800-919-1743" className="text-gray-500 p-4">
              Questions?{" "}
              <span className="underline">Call 000-800-919-1743</span>
            </a>
          </div>
          <div className="flex justify-around items-center">
            <p className="text-gray-500 p-4 max-w-xl text-center">
              Stream movies and TV shows inspired by the Netflix experience.
              Discover trending content, explore genres, and enjoy a smooth,
              responsive interface with fast loading and modern animations.
              Designed for seamless entertainment, intuitive navigation, and a
              cinematic viewing experience across all devices.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Gmail Address"
                className="border-2 border-gray-400 text-gray-400 w-96 py-3 px-2"
              />

              <button className="bg-red-600 text-white font-semibold py-3 px-4 rounded-sm cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 p-2 text-center">
            {ContactLinks.map((link) => (
              <a
                className="text-gray-500 p-2"
                href={link.url}
                key={link.name}
                target="_blank"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="text-center p-4">
            <h1 className="text-gray-500 py-2">Netflix India</h1>
            <p className="text-gray-500 text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
