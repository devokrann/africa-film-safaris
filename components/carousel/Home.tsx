"use client";

import { useRef } from "react";

import Link from "next/link";

import { Button, Center, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";

import Autoplay from "embla-carousel-autoplay";

import NextImage from "next/image";

import Section from "@/layouts/Section";

import classes from "./Home.module.scss";

import bg1 from "@/assets/images/backgrounds/carousel/bg-1.webp";
import bg2 from "@/assets/images/backgrounds/carousel/bg-2.webp";
import bg3 from "@/assets/images/backgrounds/carousel/bg-3.webp";
import bg4 from "@/assets/images/backgrounds/carousel/bg-4.webp";

const slides = [
	{
		image: bg1,
		alt: "bg1",
		link: "#1",
	},
	{
		image: bg2,
		alt: "bg2",
		link: "#2",
	},
	{
		image: bg3,
		alt: "bg3",
		link: "#3",
	},
	{
		image: bg4,
		alt: "bg4",
		link: "#4",
	},
];

export default function Home() {
	const autoplay = useRef(Autoplay({ delay: 5000 }));

	return (
		<Carousel
			withControls={false}
			withIndicators={false}
			slideGap={0}
			loop
			slidesToScroll={1}
			classNames={{ root: classes.root, slide: classes.slide }}
			plugins={[autoplay.current]}
			// onMouseEnter={autoplay.current.stop}
			// onMouseLeave={autoplay.current.reset}
		>
			{slides.map(slide => (
				<CarouselSlide key={slide.alt}>
					<Image
						src={slide.image}
						alt={slide.alt}
						h={{ base: 960, xs: 720 }}
						loading="lazy"
						component={NextImage}
						className={classes.image}
					/>
					<div className={classes.overlay}></div>

					<Section containerized={"responsive"} padded={180}>
						<Flex direction={"column"} gap={"xl"} justify="center" align={{ base: "center", sm: "start" }}>
							<Flex
								direction={"column"}
								align={{ base: "center", sm: "start" }}
								w={{ base: "100%", sm: "75%", md: "66%" }}
								gap={"xs"}
							>
								<Title order={1} ta={{ base: "center", sm: "start" }}>
									Your Stress-Free Kenyan Film Adventure Starts Here
								</Title>
								<Text fz={"xl"} ta={{ base: "center", sm: "start" }}>
									We handle the logistics, you focus on your creative vision.
								</Text>
							</Flex>

							<Flex direction={{ base: "column", sm: "row" }} align={"center"} gap={"xs"}>
								<Button color="secLight.7" component={Link} href={"/contact"}>
									Tell Us About Your Project
								</Button>
								<Button color="priLight.8" component={Link} href={"/services"}>
									Explore Our Services
								</Button>
							</Flex>
						</Flex>
					</Section>
				</CarouselSlide>
			))}
		</Carousel>
	);
}
