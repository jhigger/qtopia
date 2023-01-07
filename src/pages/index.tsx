/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import CTA from "../components/CTA";
import HeroImage from "../components/HeroImage";
import HeroTitle from "../components/HeroTitle";
import TheCollections from "../components/TheCollections";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Qtopia</title>
			</Head>

			<div className="min-h-screen bg-[url('/assets/BG_1920X1080.jpg')] bg-contain bg-center">
				<HeroImage />
				<main className="container mx-auto w-full">
					<HeroTitle />
					<CTA />
					<TheCollections />
				</main>
			</div>
		</>
	);
};

export default Home;
