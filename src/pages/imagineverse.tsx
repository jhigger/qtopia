import Head from "next/head";
import Image from "next/image";

const ImagineVersePage = () => {
	return (
		<main className="gradient min-h-screen font-montserrat text-white">
			<Head>
				<title>Qtopia | ImagineVerse</title>
			</Head>

			<video
				className="h-full w-full object-cover object-center"
				width="100%"
				height="100%"
				autoPlay
				loop
				muted
				playsInline
			>
				<source src="/assets/imagine.webm" type="video/webm" />
				<source
					src="https://d20wbi5cgoftj2.cloudfront.net/qtopiavideos/imagine.mp4"
					type="video/mp4"
				/>
			</video>

			<div className="container mx-auto -mt-14 flex w-full justify-center">
				<div className="z-10 w-max rounded-3xl bg-white p-8 text-xl">
					<h1 className="text-center font-montserrat text-5xl font-bold uppercase text-[#2f2e2e] ">
						Welcome to Imagineverse
					</h1>
				</div>
			</div>

			<section className="relative overflow-visible">
				<div className="container mx-auto h-[44rem] w-full">
					<div className=" grid grid-cols-2 place-items-center py-24">
						<div>
							<h3 className="my-4 p-4 text-2xl">
								Have a land of your own. Design, decorate,{" "}
								<br /> and host events! Random surprises awaits{" "}
								<br /> land owners!
							</h3>
							<div className="flex items-center justify-center">
								<button className="rounded py-2 px-8 text-xl uppercase ring-2 ring-white hover:bg-white hover:text-[#14a8e8]">
									<a
										href="https://whitepaper.qtopia.io/the-imagine-verse/the-imagine-verse"
										target="_blank"
										rel="noopener noreferrer"
									>
										See More
									</a>
								</button>
							</div>
						</div>
						<Image
							src={"/assets/10X10_Underwater.png"}
							alt={"underwater"}
							width="700"
							height="700"
							loading="eager"
							priority
							className="z-10 justify-self-end"
						/>
					</div>
				</div>
				<div className="clip-triangle-right absolute top-0 right-0 h-full w-[50vw] bg-[url('/assets/BG_1920X1080.jpg')] bg-cover bg-no-repeat" />
			</section>
			<section className="relative bg-white">
				<div className="container mx-auto h-[44rem] w-full">
					<div className=" grid grid-cols-2 place-items-center py-24">
						<Image
							src={"/assets/Door Illustration v3-01.png"}
							alt={"underwater"}
							width="700"
							height="700"
							loading="eager"
							priority
							className="z-10 justify-self-end rounded-3xl"
						/>
						<div>
							<h3 className="my-4 p-4 text-2xl text-[#2f2e2e]">
								Form a Guild to unlock the Door of <br />{" "}
								Opportunities that instanlty takes you and{" "}
								<br /> your guild to a completely new space
								never <br /> seen before!
							</h3>
							<div className="flex items-center justify-center">
								<button className="rounded py-2 px-8 text-xl uppercase text-[#14a8e8] ring-2 ring-[#14a8e8] hover:bg-[#14a8e8] hover:text-white">
									<a
										href="https://whitepaper.qtopia.io/the-imagine-verse/doors-of-oppurtunities"
										target="_blank"
										rel="noopener noreferrer"
									>
										See More
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="clip-triangle-left absolute top-0 left-0 h-full w-[50vw] bg-[url('/assets/BG_1920X1080.jpg')] bg-cover bg-no-repeat" />
			</section>
			<section className="relative">
				<div className="container mx-auto h-[44rem] w-full">
					<div className="grid grid-cols-2 place-items-center pt-24">
						<div>
							<h3 className="my-4 p-4 text-2xl">
								Special-themed guild halls for 40-60 <br />{" "}
								players to socialize, prepare for <br /> guild
								hunts. Set up shops to loan <br /> out
								characters and gears!
							</h3>
							<div className="flex items-center justify-center">
								<button className="rounded py-2 px-8 text-xl uppercase ring-2 ring-white hover:bg-white hover:text-[#14a8e8]">
									<a
										href="https://whitepaper.qtopia.io/the-imagine-verse/guild-halls"
										target="_blank"
										rel="noopener noreferrer"
									>
										See More
									</a>
								</button>
							</div>
						</div>
						<Image
							src={"/assets/10X10_Pirate-Island-v4.png"}
							alt={"underwater"}
							width="700"
							height="700"
							loading="eager"
							priority
							className="z-10 justify-self-end rounded-3xl"
						/>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ImagineVersePage;
