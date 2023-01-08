/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();

	const [state, setState] = useState(false);

	const navItems = [
		{ name: "Home", link: "/" },
		{ name: "Vision", link: "/vision" },
		{ name: "Imagineverse", link: "/imagineverse" },
		// { name: "Contact", link: "/contact" },
		{ name: "Whitepaper", link: "https://whitepaper.qtopia.io/" },
	];

	return (
		<nav className="container sticky top-0 z-20 mx-auto w-full">
			<div className="absolute mt-6 w-full">
				<div className="flex flex-row justify-between gap-2 px-4">
					<Logo />
					<div
						className={`rounded-3xl bg-[#2f2e2e] p-2 ${
							state ? "block" : "hidden"
						}`}
					>
						{/* mobile */}
						<ul className="flex flex-col items-center justify-center gap-4 p-4 text-white">
							{navItems.map((item, idx) => {
								return (
									<li key={idx}>
										<NavLink
											name={item.name}
											link={item.link}
										/>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="h-16 w-16  rounded-full bg-[#2f2e2e] sm:hidden">
						<button
							className="flex transform items-center justify-center p-2 text-white transition duration-300 ease-in-out hover:scale-105 hover:text-[#14a8e8] focus:outline-none"
							onClick={() => setState(!state)}
						>
							{state ? <CloseIcon /> : <MenuIcon />}
						</button>
					</div>
					<div className="pointer-events-auto ml-auto hidden font-montserrat uppercase sm:flex">
						<NavItemContainer>
							<ul className="my-auto mx-4 flex h-full items-center gap-2 align-middle">
								{navItems.map((item) => {
									return (
										<li key={item.name}>
											<NavLink
												name={item.name}
												link={item.link}
												pathName={router.pathname}
											/>
										</li>
									);
								})}
							</ul>
						</NavItemContainer>
					</div>
				</div>
			</div>
		</nav>
	);
};

const NavItemContainer = ({
	children,
}: {
	children: JSX.Element | string | null;
}) => {
	return (
		<div className="h-16 rounded-full border-2 border-white border-opacity-20 bg-black bg-opacity-50 py-4 text-white">
			{children}
		</div>
	);
};

const Logo = () => {
	return (
		<Link href="/">
			<img
				className="h-16 w-auto md:h-24"
				src="/assets/logo.png"
				alt="Qtopia Logo"
			/>
		</Link>
	);
};

const NavLink = ({
	name,
	link,
	pathName,
}: {
	name: string;
	link: string;
	pathName?: string;
}) => {
	return (
		<Link
			href={link}
			className={`rounded-full px-4 py-2 text-base tracking-wide transition-all hover:bg-[#14a8e8] hover:text-white xl:text-lg ${
				pathName === link ? "bg-white text-[#2f2e2e]" : ""
			}`}
			rel="noopener noreferrer"
		>
			{name}
		</Link>
	);
};

const CloseIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-full w-full"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

const MenuIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-full w-full"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 8h16M4 16h16"
			/>
		</svg>
	);
};

export default Navbar;
