import { Content } from "@prismicio/client";
import { SliceComponentProps, JSXMapSerializer, PrismicRichText } from "@prismicio/react";

import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { PrismicNextLink } from "@prismicio/next";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" size="sm" className="text-center font-semibold mb-4">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => <p className="text-center mb-8 text-slate-600">{children}</p>,
};

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
	return (
		<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className="shadow-xl max-w-4xl rounded-md grid place-items-center m-auto md:px-12 px-4 py-12 bg-gradient-to-tr from-cyan-100 via-white to-emerald-100">
				<PrismicRichText field={slice.primary.heading} components={components} />
				<PrismicRichText field={slice.primary.body} components={components} />
				<Button field={slice.primary.button_link}>{slice.primary.button_text}</Button>
			</div>
		</Bounded>
	);
};

export default CallToAction;
