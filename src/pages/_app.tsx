import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
	const router = useRouter();
	return (
		<>
			{router.pathname !== "/comingsoon" && <Navbar />}
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
