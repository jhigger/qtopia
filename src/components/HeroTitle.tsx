import CTA from "../components/CTA";

const HeroTitle = () => {
	return (
		<section className="px-6 py-6 md:px-12 md:py-12">
			<div className="grid grid-cols-1 rounded-3xl bg-white px-4 py-8 text-xl text-white">
				<h1 className="text-center font-montserrat text-3xl font-bold uppercase tracking-wider text-[#2f2e2e] md:text-5xl xl:text-6xl">
					Qtopia:
					<br /> Social-Gamefi
					<br /> Ecosystem
				</h1>
				<CTA />
			</div>
		</section>
	);
};

export default HeroTitle;
