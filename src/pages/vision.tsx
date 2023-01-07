import Image from "next/image";

const VisionPage = () => {
	return (
		<div className="bg-[url('/assets/BG_1920X1080.jpg')] bg-contain">
			<main className="container mx-auto w-full pt-16">
				<section className="px-6 py-6 md:px-12 md:py-12">
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
				</section>
			</main>
		</div>
	);
};

export default VisionPage;
