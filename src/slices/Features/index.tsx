import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import CalendarIcon from "@/components/CalendarIcon";
import HourglassIcon from "@/components/HourglassIcon";
import BargraphIcon from "@/components/BargraphIcon";
import CloverIcon from "@/components/CloverIcon";

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as="h2" size="md" className="text-center mb-10">
			{children}
		</Heading>
	),
	heading3: ({ children }) => (
		<Heading as="h3" size="sm" className="mb-3 font-medium sm:text-left text-center">
			{children}
		</Heading>
	),
	paragraph: ({ children }) => <p className="text-base font-body mb-3 font-medium text-slate-600 sm:text-left text-center">{children}</p>,
};

const icons = {
	calendar: <CalendarIcon />,
	hourglass: <HourglassIcon />,
	bargraph: <BargraphIcon />,
	clover: <CloverIcon />,
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
	return (
		<>
			{slice.variation === "default" && (
				<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
					<PrismicRichText components={components} field={slice.primary.heading} />
					<div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 sm:place-items-start place-items-center">
						{slice.items.map((item, index) => (
							<div key={index} className="max-w-sm grid sm:place-items-start place-items-center">
								{item.icon && <div className="mb-5">{icons[item.icon]} </div>}
								<PrismicRichText components={components} field={item.title} />
								<PrismicRichText components={components} field={item.description} />
							</div>
						))}
					</div>
				</Bounded>
			)}
			{slice.variation === "gridWith3" && (
				<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
					<PrismicRichText components={components} field={slice.primary.heading} />
					<div className="mx-auto grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-x-8 gap-y-12 place-items-center">
						{slice.items.map((item, index) => (
							<div key={index} className="max-w-sm grid sm:place-items-start place-items-center">
								{item.icon && <div className="mb-5">{icons[item.icon]} </div>}
								<PrismicRichText components={components} field={item.title} />
								<PrismicRichText components={components} field={item.description} />
							</div>
						))}
					</div>
				</Bounded>
			)}
		</>
	);
};

export default Features;
