import Head from "next/head";
import Image from "next/image";

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-[url('/assets/BG_1920X1080.jpg')] bg-contain font-montserrat">
			<Head>
				<title>Qtopia | Lore</title>
			</Head>

			<main className="container mx-auto w-full py-32">
				<div className="px-6 py-6 md:px-12 md:py-12">
					<div className="my-2 w-full rounded-3xl bg-white bg-right-bottom p-8 text-[#2f2e2e] md:rounded-[4rem] md:bg-none md:p-16">
						<section className="mb-8 grid grid-cols-1 place-items-center gap-8 py-4">
							<h1 className="font-owl text-xl font-bold uppercase md:text-2xl lg:text-4xl">
								About Our Team
							</h1>
						</section>

						<section className="mb-8 grid grid-cols-1 place-items-center gap-8 py-4">
							<div className="flex flex-col gap-8 text-center">
								<div className="grid grid-cols-1 place-items-center items-center gap-8 md:grid-cols-2">
									<Image
										src={"/assets/about/daniel_chou.jpg"}
										alt={"daniel_chou"}
										width="400"
										height="400"
										loading="eager"
										priority
										className="col-span-1 rounded-3xl"
									/>
									<div className="col-span-1">
										<h2 className="font-owl text-xl font-bold uppercase lg:text-3xl">
											Daniel Chou
										</h2>
										<p className="text-xl font-semibold">
											Vision, Strategies, and Execution
										</p>
									</div>
								</div>
								<p className="text-lg md:text-xl">
									With over 15 years of experience in the
									gaming industry, Daniel Chou has proven
									himself to be a master of building and
									scaling remote teams. He has successfully
									led fully-remote offices with a team of 75+
									employees and has developed the innovative
									PACT hiring practice, which has been
									implemented by numerous startups. In
									addition to his expertise in remote work,
									Daniel has a track record of launching
									profitable titles with top companies such as
									Zynga, Playstudios, WMS (Scientific Games),
									Koolbit, Timegate, SEGA, Fox Cub Games, and
									Mino Games. As a consultant, he has helped
									numerous startups achieve success through
									his proactive, assertive, communicative, and
									transparent approach. With his extensive
									knowledge and successful track record,
									Daniel is looking to launch Qtopia into the
									stratosphere!
								</p>
							</div>
						</section>

						<section className="mb-8 grid grid-cols-1 place-items-center gap-8 py-4">
							<div className="flex flex-col gap-8 text-center">
								<div>
									<h2 className="font-owl text-xl font-bold uppercase lg:text-3xl">
										Onyx Gallegos
									</h2>
									<p className="text-xl font-semibold">
										Head of GrowthExecution
									</p>
								</div>
								<p className="text-lg md:text-xl">
									Onyx is a web3-native entrepreneur who has
									launched multiple sold-out NFTs, including
									Utility Ape&apos;s Engage-to-Earn tools.
									With Onyx at the helm of expansion, Utility
									Ape explosively grew the Qtopia community
									from 0 to 37,000 verified users in just one
									week. In addition to managing Utility Ape,
									Onyx has also successfully sold out three
									generations of mint collections, with a
									total of over a dozen sold-out mints under
									his belt. Onyx&apos;s expertise and track
									record make him a valuable asset to the
									Qtopia team and community.
								</p>
							</div>
						</section>

						<section className="mb-8 grid grid-cols-1 place-items-center gap-8 py-4">
							<div className="flex flex-col gap-8 text-center">
								<div>
									<h2 className="font-owl text-xl font-bold uppercase lg:text-3xl">
										The Qtopia Heroes
									</h2>
									<p className="text-xl font-semibold">
										Studio Supported by 10+
									</p>
								</div>
								<p className="text-lg md:text-xl">
									Our designers and developers have a wealth
									of experience in the gaming industry, with
									many of them having worked on successful
									titles for decades. The design team has also
									been a key part of the Qtopia project,
									having contributed to the creation and
									development of multiple successful projects
									and animations within the company. We are
									confident that with their expertise and
									dedication, Qtopia will continue to thrive
									and provide an immersive and enjoyable
									experience for all of our players
								</p>
							</div>
						</section>

						<h2 className="text-center text-lg font-bold md:text-xl">
							For any business inquiries, please contact Daniel
							Chou: daniel@qtopia.io
						</h2>
					</div>
				</div>
			</main>
		</div>
	);
};

export default AboutPage;
