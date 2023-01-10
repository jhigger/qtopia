import CTA from "../components/CTA";

const HeroTitle = () => {
	return (
		<section className="-mt-32 flex justify-center">
			<div className="z-10 grid w-max grid-cols-1 rounded-3xl bg-white p-8 text-xl text-white">
				<div className="text-center font-montserrat text-3xl font-bold uppercase text-[#2f2e2e] md:text-5xl xl:text-6xl">
					<h1 className="leading-wide pb-4 font-bold">Qtopia:</h1>
					<p className="text-xl md:text-3xl xl:text-4xl">
						Social-Gamefi Ecosystem
					</p>
				</div>
				<CTA />
			</div>
		</section>
	);
};

export default HeroTitle;
