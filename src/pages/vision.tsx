import Head from "next/head";
import Image from "next/image";

const VisionPage = () => {
	return (
		<div className="bg-[url('/assets/BG_1920X1080.jpg')] bg-contain font-montserrat">
			<Head>
				<title>Qtopia | Vision</title>
			</Head>

			<main className="container mx-auto w-full py-32">
				<div className="px-6 py-6 md:px-12 md:py-12">
					<div
						className={
							"my-2 w-full rounded-3xl bg-white bg-right-bottom px-4 py-8 text-[#2f2e2e] md:rounded-[4rem] md:bg-none md:px-16 md:py-16"
						}
					>
						<section className="mb-8 grid grid-cols-1 place-items-center gap-8 py-4">
							<h1 className="font-owl text-xl font-bold uppercase md:text-2xl lg:text-4xl">
								Our Vision
							</h1>
							<p className="text-lg md:text-xl">
								Qtopia is an ecosystem that combines the
								tangible world and metaverse, where NFT holders
								will be able to take part in the creation of a
								game and animation series, as well as collect
								limited-edition real-world merchandise!
							</p>
							<p className="font-owl text-lg font-bold uppercase text-[#14a8e8] md:text-xl lg:text-3xl">
								Love, Imagination, and Happiness for all!
							</p>
						</section>

						<section className="mb-8 grid grid-cols-1 place-items-center gap-8 py-4 md:grid-cols-2">
							<div className="order-last flex flex-col gap-8 text-center md:-order-last">
								<h2 className="font-owl text-lg font-bold uppercase md:text-xl lg:text-3xl">
									Play To Own Game
								</h2>
								<p className="text-lg md:text-xl">
									We will be producing both PC and
									Mobile-friendly games with lore and
									storytelling. Discover the unforgettable
									Kingdom of Happiness, and follow our
									heroes&apos; adventures as they unravel the
									mystery of the Kingdom. Meet interesting
									characters, play with friends, and
									accumulate tokens!
								</p>
								<div className="flex items-center justify-center">
									<button className="rounded-full py-2 px-8 text-xl uppercase text-[#14a8e8] ring-2 ring-[#14a8e8] hover:bg-[#14a8e8] hover:text-white hover:ring-white">
										<a
											href="https://whitepaper.qtopia.io/game/the-game"
											target="_blank"
											rel="noopener noreferrer"
										>
											Learn More
										</a>
									</button>
								</div>
							</div>
							<Image
								src={"/assets/vision/play_earn.jpg"}
								alt={"play_earn"}
								width="700"
								height="700"
								loading="eager"
								priority
								className="z-10 justify-self-end rounded-3xl"
							/>
						</section>

						<section className="mb-8 grid grid-cols-1 place-items-center gap-8 py-4 md:grid-cols-2">
							<Image
								src={"/assets/vision/imagineverse.jpg"}
								alt={"imagineverse"}
								width="700"
								height="700"
								loading="eager"
								priority
								className="z-10 justify-self-end rounded-3xl"
							/>
							<div className="flex flex-col gap-8 text-center">
								<h2 className="font-owl text-lg font-bold uppercase md:text-xl lg:text-3xl">
									Welcome to The ImagineVerse
								</h2>
								<p className="text-lg md:text-xl">
									Join your friends and guild in our infinite
									version of the metaverse. Designed to be
									infinitely scrollable without a fixed
									center, the ImagineVerse presents equal
									opportunities for all players. Socialize,
									chat, engage, and stake your land to earn
									rewards.
								</p>
								<div className="flex items-center justify-center">
									<button className="rounded-full py-2 px-8 text-xl uppercase text-[#14a8e8] ring-2 ring-[#14a8e8] hover:bg-[#14a8e8] hover:text-white hover:ring-white">
										<a
											href="https://whitepaper.qtopia.io/the-imagine-verse/the-imagine-verse"
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
							<div className="order-last flex flex-col gap-8 text-center md:-order-last">
								<h2 className="font-owl text-lg font-bold uppercase md:text-xl lg:text-3xl">
									Merchandise
								</h2>
								<p className="text-lg md:text-xl">
									Holders of the special Genesis NFT will have
									access to the limited Genesis edition.
								</p>
								<div className="flex items-center justify-center">
									<button className="rounded-full py-2 px-8 text-xl uppercase text-[#14a8e8] ring-2 ring-[#14a8e8] hover:bg-[#14a8e8] hover:text-white hover:ring-white">
										<a
											href="https://whitepaper.qtopia.io/merchandise/epic-loots"
											target="_blank"
											rel="noopener noreferrer"
										>
											Learn More
										</a>
									</button>
								</div>
							</div>
							<Image
								src={"/assets/vision/Merch.jpg"}
								alt={"Merch"}
								width="700"
								height="700"
								loading="eager"
								priority
								className="z-10 justify-self-end rounded-3xl"
							/>
						</section>

						<section className="grid grid-cols-1 place-items-center gap-8 py-4 md:grid-cols-2">
							<Image
								src={
									"/assets/vision/Phoebe-and-Dragon_flying.jpg"
								}
								alt={"Phoebe-and-Dragon_flying"}
								width="700"
								height="700"
								loading="eager"
								priority
								className="z-10 justify-self-end rounded-3xl"
							/>
							<div className="flex flex-col gap-8 text-center">
								<h2 className="font-owl text-lg font-bold uppercase md:text-xl lg:text-3xl">
									Animation Series
								</h2>
								<p className="text-lg md:text-xl">
									With an experienced leadership team from
									Tappy Yoka, we want to create top-quality
									animated content aimed to impress and
									entertain. NFT holders will gain special
									rights to be involved in the content
									creation process.
								</p>
								<div className="flex items-center justify-center">
									<button className="rounded-full py-2 px-8 text-xl uppercase text-[#14a8e8] ring-2 ring-[#14a8e8] hover:bg-[#14a8e8] hover:text-white hover:ring-white">
										<a
											href="https://whitepaper.qtopia.io/animation-series"
											target="_blank"
											rel="noopener noreferrer"
										>
											Learn More
										</a>
									</button>
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>
		</div>
	);
};

export default VisionPage;
