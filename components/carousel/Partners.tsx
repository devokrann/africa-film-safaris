"use client";

import { useRef } from "react";

import { Center, Image } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";

import Autoplay from "embla-carousel-autoplay";

import NextImage from "next/image";

import classes from "./Partner.module.scss";

import partner1 from "@/assets/images/partners/partner-1.webp";
import partner2 from "@/assets/images/partners/partner-2.webp";
import partner3 from "@/assets/images/partners/partner-3.webp";

const partners = [
	{
		image: partner1,
		alt: "partner1",
		link: "#1",
	},
	{
		image: partner2,
		alt: "partner2",
		link: "#2",
	},
	{
		image: partner3,
		alt: "partner3",
		link: "#3",
	},
];

export default function Partners() {
	const autoplay = useRef(Autoplay({ delay: 2000 }));

	return (
		<Carousel
			withControls={false}
			withIndicators={false}
			py={{ base: "xl", sm: 48, md: 96 }}
			slideSize={{ base: "100%", xs: "50%", sm: "33.333333%", md: "20%" }}
			slideGap={"xs"}
			loop
			slidesToScroll={1}
			classNames={{ root: classes.root }}
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
		>
			{partners.concat(partners).map(partner => (
				<CarouselSlide key={partner.link}>
					<Center h={"100%"} component={"a"} href={partner.link} target="_blank" title={partner.alt}>
						<Image
							src={partner.image}
							alt={partner.alt}
							w={"100%"}
							loading="lazy"
							// radius={"md"}
							component={NextImage}
						/>
					</Center>
				</CarouselSlide>
			))}
		</Carousel>
	);
}
