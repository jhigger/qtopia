import Head from "next/head";

const ComingSoonPage = () => {
	return (
		<main className="relative h-screen w-screen">
			<Head>
				<title>Qtopia | Coming Soon!</title>
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
				<source src="/assets/imagine480.webm" type="video/webm" />
				<source
					src="https://d20wbi5cgoftj2.cloudfront.net/qtopiavideos/imagine.mp4"
					type="video/mp4"
				/>
			</video>
			<div className="absolute top-0 left-0 h-full w-full bg-gray-900 bg-opacity-50 bg-clip-padding backdrop-blur-sm backdrop-filter">
				<div className="flex h-full flex-col items-center justify-center p-4">
					<h1 className="py-4 text-center font-montserrat text-6xl font-bold text-white">
						Coming Soon!
					</h1>
				</div>
			</div>
		</main>
	);
};

export default ComingSoonPage;
