import { Content } from "@prismicio/client";
import { SliceComponentProps, JSXMapSerializer, PrismicRichText, PrismicImage } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import clsx from "clsx";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" size="lg" className="">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => <p className="max-w-md font-body text-lg text-slate-600">{children}</p>,
};

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps = SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
	return (
		<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className="grid md:grid-cols-2 place-items-center gap-8">
				<PrismicImage className={clsx("rounded-lg", slice.variation === "imageRight" && "md:order-2")} field={slice.primary.image} />
				<div className="grid gap-4">
					<PrismicRichText components={components} field={slice.primary.heading} />

					<PrismicRichText components={components} field={slice.primary.body} />
				</div>
			</div>
		</Bounded>
	);
};

export default TextWithImage;
