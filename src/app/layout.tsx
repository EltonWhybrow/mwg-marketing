import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { Nunito, Nunito_Sans } from "next/font/google";
import { createClient } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-nunito-sans",
});

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const settings = await client.getSingle("settings");
	return {
		title: settings.data.site_title || "MWG Marketing",
		description: settings.data.meta_description || "MWG marketing funnel",
		openGraph: {
			images: [settings.data.og_image.url || ""],
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
			<PrismicPreview repositoryName={repositoryName} />
			{/* mwg-marketing */}
		</html>
	);
}
