import "./globals.css";
import type { Metadata } from "next";
import clsx from "clsx";
import { Nunito, Nunito_Sans } from "next/font/google";
import { createClient, repositoryName } from "@/prismicio";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrismicText } from "@prismicio/react";

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
		title: settings.data.site_title || "Beto CMS ",
		description: settings.data.meta_description || "A better content management",
		openGraph: {
			images: [settings.data.og_image.url || ""],
		},
	};
}

export default async function RootLayout({
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
				<div className="opacity-50 inset-0 bg-gradient-to-tr from-cyan-50 to-emerald-50 z-[-1] fixed"></div>
				<PrismicPreview repositoryName={repositoryName} />
			</body>
		</html>
	);
}
