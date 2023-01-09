import Head from "next/head";
import Image from "next/image";

const LorePage = () => {
	return (
		<div className="bg-[url('/assets/BG_1920X1080.jpg')] bg-contain font-montserrat">
			<Head>
				<title>Qtopia | Lore</title>
			</Head>

			<div className="h-full w-full">
				<Image
					src={"/assets/1920X1080_Qtopia_vitagods_v2.png"}
					alt={"vitagods"}
					width="1920"
					height="1080"
					loading="eager"
					priority
				/>
			</div>
			<main className="container mx-auto w-full">
				<section className="-mt-24 flex justify-center">
					<div className="w-max rounded-3xl bg-white py-8 px-16 text-[#2f2e2e]">
						<div className="flex flex-col items-center gap-4 text-center font-montserrat md:text-left">
							<h1 className="text-4xl font-bold uppercase">
								Let there be happiness
							</h1>
							<p className="text-3xl">
								...and there
								<br />
								was...
							</p>
						</div>
					</div>
				</section>

				<div className="px-6 py-6 md:px-12 md:py-12">
					<div
						className={
							"my-2 w-full rounded-3xl bg-white bg-right-bottom px-4 py-8 text-[#2f2e2e] md:rounded-[4rem] md:bg-none md:px-16 md:py-16"
						}
					>
						<section className="mb-8 grid grid-cols-1 place-items-center gap-8 py-4">
							<h1 className="text-xl font-bold uppercase md:text-2xl lg:text-4xl">
								The Story
							</h1>
							<p className="text-lg md:text-xl">
								In the lands of Happiness, even normal folks
								live like demigods. Because of the blessings
								they receive from the Vitamin Gods, they are
								granted great strength and near-immortality. In
								return, the citizens plant and harvest
								VitaMelons, powerful plants of remembrance that
								gives the Vitamin Gods their powers.
							</p>
						</section>

						<section className="mb-8 grid grid-cols-1 place-items-center gap-8 py-4">
							<Image
								src={"/assets/lore/story_banner.jpg"}
								alt={"story_banner"}
								width="1920"
								height="700"
								loading="eager"
								priority
								className="z-10 w-full justify-self-center rounded-3xl"
							/>
							<div className="flex flex-col gap-8 text-center">
								<h2 className="text-lg font-bold uppercase md:text-xl lg:text-3xl">
									The Vitamin Gods
								</h2>
								<p className="text-lg md:text-xl">
									In the city of Medulla, the Vitamin Gods
									live among the people of Happiness. The
									Vitamin Gods are always ready to share their
									blessings with the citizens of Happiness.
									Each of the Vitamin Gods has a VitaMon
									companion, a magical being that represents
									their unique powers and abilities. The
									VitaMons are a constant presence in the city
									of Medulla, always by the side of their
									godly masters.
								</p>
								<div className="flex items-center justify-center">
									<button className="rounded-full py-2 px-8 text-xl uppercase text-[#14a8e8] ring-2 ring-[#14a8e8] hover:bg-[#14a8e8] hover:text-white hover:ring-white">
										<a
											href="https://whitepaper.qtopia.io/story/the-lore#vitamin-gods"
											target="_blank"
											rel="noopener noreferrer"
										>
											Learn More
										</a>
									</button>
								</div>
							</div>
						</section>

						<section className="mb-8 grid grid-cols-1 place-items-center gap-8 py-4 md:grid-cols-2">
							<Image
								src={"/assets/lore/Brainwashing_Dolores.webp"}
								alt={"Brainwashing_Dolores"}
								width="700"
								height="700"
								loading="eager"
								priority
								className="z-10 justify-self-end rounded-3xl"
							/>
							<div className="flex flex-col gap-8 text-center">
								<h2 className="text-lg font-bold uppercase md:text-xl lg:text-3xl">
									The Civil War
								</h2>
								<p className="text-lg md:text-xl">
									But the trouble is brewing in the midst of
									the Vitamin Gods. As the goddess of Healing
									and Restoration, Dolores was used to being a
									powerful and respected figure in the land of
									Happiness. But when she became jealous of
									her husband Carmine&apos;s popularity and
									fell victim to an evil plot by her sidekick
									Cinnabum, everything changed...
								</p>
								<div className="flex items-center justify-center">
									<button className="rounded-full py-2 px-8 text-xl uppercase text-[#14a8e8] ring-2 ring-[#14a8e8] hover:bg-[#14a8e8] hover:text-white hover:ring-white">
										<a
											href="https://whitepaper.qtopia.io/story/the-lore#the-civil-war"
											target="_blank"
											rel="noopener noreferrer"
										>
											Learn More
										</a>
									</button>
								</div>
							</div>
						</section>

						<section className="grid grid-cols-1 place-items-center gap-8 py-4 md:grid-cols-2">
							<div className="flex flex-col gap-8 text-center">
								<h2 className="text-lg font-bold uppercase md:text-xl lg:text-3xl">
									The Heroes
								</h2>
								<p className="text-lg md:text-xl">
									Determined to bring hope and healing to the
									land, the heroes set out to search for the
									lost art of cultivating the VitaMelons. They
									also seek out the lost pets of the gods, the
									VitaMons, hoping that they will lead them to
									the forgotten VitaGods that are wandering
									the land.
								</p>
								<div className="flex items-center justify-center">
									<button className="rounded-full py-2 px-8 text-xl uppercase text-[#14a8e8] ring-2 ring-[#14a8e8] hover:bg-[#14a8e8] hover:text-white hover:ring-white">
										<a
											href="https://whitepaper.qtopia.io/story/the-lore#the-heroes"
											target="_blank"
											rel="noopener noreferrer"
										>
											Learn More
										</a>
									</button>
								</div>
							</div>
							<Image
								src={"/assets/lore/vitamon-poster.webp"}
								alt={"vitamon-poster"}
								width="700"
								height="700"
								loading="eager"
								priority
								className="z-10 h-full justify-self-end rounded-3xl"
							/>
						</section>
					</div>
				</div>
			</main>
		</div>
	);
};

export default LorePage;
