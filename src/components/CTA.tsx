import { FaBook, FaTwitter, FaDiscord } from "react-icons/fa";

const CTA = () => {
	const iconLinks = [
		{
			icon: <FaBook />,
			link: "https://whitepaper.qtopia.io",
			name: "Whitepaper",
		},
		{
			icon: <FaTwitter />,
			link: "https://twitter.com/QtopiaNFT",
			name: "Twitter",
		},
		{
			icon: <FaDiscord />,
			link: "https://discord.com/invite/qtopia",
			name: "Discord",
		},
	];

	return (
		<div className="w-full max-w-screen-xl p-4 text-[#2f2e2e]">
			<ul className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row">
				{iconLinks.map((item, idx) => {
					return (
						<li
							key={idx}
							className="z-10 w-max rounded-full border transition duration-300 ease-in-out hover:scale-110 hover:bg-[#fc8a32] hover:text-white"
						>
							<a
								href={item.link}
								rel="noreferrer"
								className="flex items-center justify-start gap-4 px-4 py-2 md:justify-center"
							>
								<div className="py-2">{item.icon}</div>
								<span className="text-base uppercase">
									{item.name}
								</span>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CTA;
