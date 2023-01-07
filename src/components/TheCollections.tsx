/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const TheCollections = () => {
	const collections = [
		{
			bg: "bg-white",
			title: "Phoebe",
			subTitle: "The Fox",
			collectionSize: "5,555",
			desc: "Genesis Mint.",
			marketPlace: "#",
			image: "/assets/sneak peak_silhouette.png",
		},
	];

	return (
		<section className="mt-16 px-6 py-6 md:px-12 md:py-12 xl:mt-48">
			{collections.map((item, idx) => {
				return (
					<CollectionItem
						key={`collection-${idx}`}
						bg={item.bg}
						title={item.title}
						subTitle={item.subTitle}
						collectionSize={item.collectionSize}
						desc={item.desc}
						marketPlace={item.marketPlace}
						image={item.image}
					/>
				);
			})}
		</section>
	);
};

type CollectionItemProps = {
	bg: string;
	title: string;
	subTitle: string;
	collectionSize: string;
	desc: string | JSX.Element;
	marketPlace?: string;
	image?: string;
};
const CollectionItem = ({
	bg,
	title,
	subTitle,
	collectionSize,
	desc,
	marketPlace,
	image,
}: CollectionItemProps) => {
	return (
		<div
			className={
				bg +
				" relative my-2 w-full rounded-3xl bg-right-bottom px-4 py-8 text-[#2f2e2e] sm:bg-left-bottom md:my-5 md:rounded-[4rem] md:bg-none md:px-16 md:py-16"
			}
		>
			<div className="flex justify-between font-montserrat md:px-4 xl:px-8">
				<div className="flex flex-col text-left">
					<span className="text-4xl md:text-8xl">{title}</span>
					<span className="text-xl md:text-2xl">{subTitle}</span>
				</div>
				<div className="flex flex-col text-right">
					<span className="text-4xl md:text-5xl xl:text-7xl">
						{collectionSize}
					</span>
					<span className="text-xs md:text-lg xl:text-xl">
						Collection Size
					</span>
				</div>
			</div>
			<div className="grid grid-cols-1 pt-10 md:grid-cols-2 md:pt-0">
				<div className="hidden justify-items-start md:flex">
					{image && (
						<div className="relative mx-8 my-4 flex items-center justify-center">
							<Image
								src={image}
								alt={`Image of ${title}`}
								width="320"
								height="320"
								className=" rounded-3xl"
								loading="eager"
								priority
							/>
						</div>
					)}
				</div>
				<div className="flex flex-col justify-between md:pr-12 xl:pr-6">
					<div className="font-sans pb-12 text-2xl md:pb-0">
						<div className="pb-4 text-base font-semibold uppercase md:text-2xl md:font-bold md:normal-case">
							About the Collection
						</div>
						<p className="text-lg leading-tight md:text-xl">
							{desc}
						</p>
					</div>
					{marketPlace && (
						<div className="flex flex-col pt-8">
							<a
								// href={marketPlace}
								// target="_blank"
								// rel="noreferrer"
								className="flex cursor-pointer items-center justify-center rounded-full bg-white py-4 px-8 font-montserrat text-sm tracking-widest ring-1 ring-[#14a8e8] transition-all hover:bg-[#14a8e8] hover:text-white enabled:hover:translate-y-0.5 disabled:pointer-events-none disabled:cursor-default md:text-lg lg:text-2xl"
							>
								Coming Soon!
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TheCollections;
