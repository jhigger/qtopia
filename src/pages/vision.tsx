import Head from "next/head";
import Image from "next/image";

const VisionPage = () => {
	return (
		<div className="bg-[url('/assets/BG_1920X1080.jpg')] bg-contain">
			<Head>
				<title>Qtopia | Vision</title>
			</Head>

			<main className="container mx-auto w-full py-32">
				{/* <section className="px-6 py-6 md:px-12 md:py-12">
					<div
						className={
							"my-2 w-full rounded-3xl bg-white bg-right-bottom px-4 py-8 text-[#2f2e2e] md:rounded-[4rem] md:bg-none md:px-16 md:py-16"
						}
					>
						<div className="grid grid-cols-1 place-items-center md:grid-cols-3">
							<div className="flex flex-col gap-4 text-center font-montserrat md:text-left">
								<h1 className="text-xl font-bold uppercase md:text-2xl lg:text-4xl">
									Let there be
									<br />
									Happiness
								</h1>
								<p className="text-lg md:text-2xl">
									...and there
									<br />
									was...
								</p>
							</div>
							<div className="relative col-span-2 mx-8 my-4 flex items-center justify-center">
								<Image
									src={
										"/assets/1920X1080_Qtopia_vitagods_v2.png"
									}
									alt={"vitagods"}
									width="1920"
									height="1080"
									className="rounded-3xl"
									loading="eager"
									priority
								/>
							</div>
						</div>
					</div>
				</section> */}

				<div className="px-6 py-6 md:px-12 md:py-12">
					<div
						className={
							"my-2 w-full rounded-3xl bg-white bg-right-bottom px-4 py-8 text-[#2f2e2e] md:rounded-[4rem] md:bg-none md:px-16 md:py-16"
						}
					>
						<section className="mb-16 grid grid-cols-1 place-items-center gap-8 py-4">
							<h1 className="text-xl font-bold uppercase md:text-2xl lg:text-4xl">
								Our Vision
							</h1>
							<p className="text-lg md:text-xl">
								Qtopia is an ecosystem that combines the
								tangible world and metaverse, where NFT holders
								will be able to take part in the creation of a
								game and animation series, as well as collect
								limited-edition real-world merchandise!
							</p>
							<p className="text-lg font-bold uppercase text-[#14a8e8] md:text-xl lg:text-3xl">
								Love, Imagination, and Happiness for all!
							</p>
						</section>

						<section className="grid grid-cols-1 place-items-center gap-8 py-4 md:grid-cols-2">
							<div className="flex flex-col gap-8 text-center">
								<h2 className="text-lg font-bold uppercase md:text-xl lg:text-3xl">
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
								alt={"underwater"}
								width="700"
								height="700"
								loading="eager"
								priority
								className="z-10 justify-self-end rounded-3xl"
							/>
						</section>

						<section className="grid grid-cols-1 place-items-center gap-8 py-4 md:grid-cols-2">
							<Image
								src={"/assets/vision/imagineverse.jpg"}
								alt={"underwater"}
								width="700"
								height="700"
								loading="eager"
								priority
								className="z-10 justify-self-end rounded-3xl"
							/>
							<div className="flex flex-col gap-8 text-center">
								<h2 className="text-lg font-bold uppercase md:text-xl lg:text-3xl">
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

						<section className="grid grid-cols-1 place-items-center gap-8 py-4 md:grid-cols-2">
							<div className="flex flex-col gap-8 text-center">
								<h2 className="text-lg font-bold uppercase md:text-xl lg:text-3xl">
									Merchandise
								</h2>
								<p className="text-lg md:text-xl">
									Qtopia is teaming up with NoNoPanda to
									create a series of merchandise. NoNoPanda
									has worked with top brands around the world
									designing dolls, collectables, hardware,
									stationary, emoticons and more. Holders of
									our NFT will gain exclusive rights to
									purchase with our token. Holders of the
									special Genesis NFT will have access to the
									limited Genesis edition.
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
							<video
								className="z-10 justify-self-end rounded-3xl"
								width="700"
								height="700"
								src="https://d20wbi5cgoftj2.cloudfront.net/qtopiavideos/merchandise.mp4"
								poster="/assets/vision/merchandise.jpg"
								autoPlay
								loop
								muted
								playsInline
							></video>
						</section>

						<section className="grid grid-cols-1 place-items-center gap-8 py-4 md:grid-cols-2">
							<Image
								src={"/assets/vision/animation_series.png"}
								alt={"underwater"}
								width="700"
								height="700"
								loading="eager"
								priority
								className="z-10 justify-self-end rounded-3xl"
							/>
							<div className="flex flex-col gap-8 text-center">
								<h2 className="text-lg font-bold uppercase md:text-xl lg:text-3xl">
									Animation Series
								</h2>
								<p className="text-lg md:text-xl">
									With an experienced leadership team from
									DreamWorks and Tappy Yoka, we want to create
									top-quality animated content aimed to
									impress and entertain. NFT holders will gain
									special rights to be involved in the content
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
