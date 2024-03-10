import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

export default async function Header() {
	const client = createClient();
	const settings = await client.getSingle("settings");

	return (
		<Bounded as="header" className="py-4 md:py-6 lg:py-8">
			<div className="gap-4 justify-between items-center flex sm:flex-row">
				<Link href="/">
					<Logo />
				</Link>

				<nav>
					<ul className="flex">
						{settings.data.navigation.map(({ link, label }) => (
							<li key={label}>
								<PrismicNextLink
									className="rounded-sm hover:text-white text-cyan-700 ml-2 block w-fit border border-cyan-700 hover:bg-cyan-800 p-3"
									field={link}
								>
									{label}
								</PrismicNextLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</Bounded>
	);
}
