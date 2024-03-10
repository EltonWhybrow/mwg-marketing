import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

export default async function Footer() {
	const client = createClient();
	const settings = await client.getSingle("settings");

	return (
		<Bounded as="footer">
			<div className="flex sm:flex-row flex-col items-center justify-between gap-4">
				<Link href="/">
					<Logo />
				</Link>

				<p className="text-cyan-700">
					&copy;{new Date().getFullYear()} {settings.data.site_title}
				</p>

				<ul className="flex">
					{settings.data.navigation.map(({ link, label }) => (
						<li key={label}>
							<PrismicNextLink
								field={link}
								className="rounded-sm hover:text-white text-cyan-700 ml-2 block w-fit border border-cyan-700 hover:bg-cyan-800 p-3"
							>
								{label}
							</PrismicNextLink>
						</li>
					))}
				</ul>
			</div>
		</Bounded>
	);
}
