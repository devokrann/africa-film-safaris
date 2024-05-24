import React from "react";

import NextImage, { StaticImageData } from "next/image";
import { Metadata } from "next";

import { Grid, GridCol, Stack, Text, Image, Title, AspectRatio, Center, Group } from "@mantine/core";

import Page from "@/layouts/Page";
import Section from "@/layouts/Section";
import CarouselPartners from "@/components/carousel/Partners";

import story1 from "@/assets/images/services/service-7.webp";
import story2 from "@/assets/images/services/service-3.webp";
import story3 from "@/assets/images/services/service-8.webp";
import story4 from "@/assets/images/services/service-6.webp";

import partner1 from "@/assets/images/partners/partner-1.webp";
import partner2 from "@/assets/images/partners/partner-2.webp";
import partner3 from "@/assets/images/partners/partner-3.webp";

export const metadata: Metadata = {
	title: "About",
};

export default async function About() {
	const partners = [
		{
			image: partner2,
			link: "https://kcaa.or.ke/",
			label: "Kenya Civil Aviation Authority",
		},
		{
			image: partner1,
			link: "https://www.kfcb.go.ke/",
			label: "Kenya Film Clasifiaction Board",
		},
		{
			image: partner3,
			link: "https://www.kws.go.ke/",
			label: "Kenya Wildlife Service",
		},
	];

	const getCard = (image: StaticImageData) => (
		<AspectRatio ratio={1920 / 1080}>
			<Image src={image} alt={"Our Story"} w={"100%"} loading="lazy" radius={"md"} component={NextImage} />
		</AspectRatio>
	);

	return (
		<Page>
			<Section containerized={"responsive"} padded={96} shadowed>
				<Stack gap={"xl"}>
					<Title ta={"center"} order={2}>
						Filmmakers Helping Filmmakers
					</Title>
					<Text ta={"center"}>
						Empowering filmmakers to tell authentic Kenyan stories through seamless production support.
					</Text>
				</Stack>
			</Section>

			<Section containerized={"responsive"} padded={96} shadowed>
				<Grid gutter={48}>
					<GridCol span={{ base: 12, md: 6 }}>
						<Stack gap={"xl"}>
							<Stack gap={"xs"}>
								<Text
									component="span"
									ta={{ base: "center", md: "start" }}
									inherit
									tt={"uppercase"}
									fw={"bolder"}
									color="light-dark(var(--mantine-color-secLight-7),var(--mantine-color-priLight-8))"
								>
									Story
								</Text>
								<Title ta={{ base: "center", md: "start" }} order={2}>
									Story Behind Africa Film Safaris
								</Title>
								<Text ta={{ base: "center", md: "start" }}>
									We started Africa Film Safaris after experiencing the unique challenges of filming
									in Kenya firsthand. As filmmakers ourselves, we understand the frustrations and want
									to pave the way for others.
								</Text>
							</Stack>

							<Stack gap={"xs"}>
								<Text
									component="span"
									ta={{ base: "center", md: "start" }}
									inherit
									tt={"uppercase"}
									fw={"bolder"}
									color="light-dark(var(--mantine-color-secLight-7),var(--mantine-color-priLight-8))"
								>
									Passion for Kenya
								</Text>
								<Title ta={{ base: "center", md: "start" }} order={2}>
									We Are The Best At Our Profession
								</Title>
								<Text ta={{ base: "center", md: "start" }}>
									Kenya offers an unparalleled setting for filmmakers – diverse landscapes, a rich
									cultural heritage, and a growing film community. We're passionate about showcasing
									this potential and the stories only Kenya can tell.
								</Text>
							</Stack>
						</Stack>
					</GridCol>
					<GridCol span={{ base: 12, md: 6 }}>
						<Grid>
							<GridCol span={{ base: 12, xs: 6 }}>{getCard(story1)}</GridCol>
							<GridCol span={{ base: 12, xs: 6 }}>{getCard(story2)}</GridCol>
							<GridCol span={{ base: 12, xs: 6 }}>{getCard(story3)}</GridCol>
							<GridCol span={{ base: 12, xs: 6 }}>{getCard(story4)}</GridCol>
						</Grid>
					</GridCol>
				</Grid>
			</Section>

			<Section
				containerized={"responsive"}
				padded={96}
				shadowed
				bg={"light-dark(var(--mantine-color-priLight-8),var(--mantine-color-priLight-8))"}
			>
				{/* <CarouselPartners /> */}

				<Stack gap={"xl"}>
					<Stack c={"bgLight.0"}>
						<Title ta={"center"} order={2}>
							Our Partners
						</Title>
						<Text ta={"center"}>Some of the companies we've worked with.</Text>
					</Stack>

					<Grid justify="center">
						{partners.map(partner => (
							<GridCol key={partner.link} span={{ base: 12, xs: 4, sm: 3, lg: 2 }}>
								<Center>
									<a href={partner.link} title={partner.label} target="_blank">
										<Center
											p={"xl"}
											h={160}
											bg={"white"}
											style={{ borderRadius: "var(--mantine-radius-md)" }}
										>
											<Image
												src={partner.image}
												alt={partner.label}
												loading="lazy"
												h={"100%"}
												component={NextImage}
											/>
										</Center>
									</a>
								</Center>
							</GridCol>
						))}
					</Grid>
				</Stack>
			</Section>
		</Page>
	);
}
