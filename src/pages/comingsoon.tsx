const ComingSoonPage = () => {
	return (
		<main className="relative h-screen w-screen">
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
			</video>
			<div className="absolute top-0 left-0 h-full w-full bg-gray-900 bg-opacity-50 bg-clip-padding backdrop-blur-sm backdrop-filter">
				<div className="flex h-full flex-col items-center justify-center p-4">
					<h1 className="py-4 text-center font-montserrat text-6xl font-bold leading-5 text-white">
						Coming Soon
					</h1>
				</div>
			</div>
		</main>
	);
};

export default ComingSoonPage;
