import React from "react";

import NextImage from "next/image";
import Link from "next/link";

import { AspectRatio, Grid, GridCol, Stack, Text, Title, Image, Button } from "@mantine/core";

import Page from "@/layouts/Page";
import Section from "@/layouts/Section";
import CardHomeWhy from "@/components/cards/home/Why";
import CardHomeHelp from "@/components/cards/home/Help";
import CardHomeKenya from "@/components/cards/home/Kenya";

import dataPages from "@/data/pages";
import { IconArrowRight } from "@tabler/icons-react";

export default function Home() {
	return (
		<Page>
			<Section containerized={"responsive"} padded={96} shadowed>
				<Stack gap={48}>
					<Stack gap={"xl"}>
						<Title ta={"center"} order={2}>
							Why Filmmakers Struggle
						</Title>
					</Stack>

					<Grid justify="center">
						{dataPages.home.why.map(item => (
							<GridCol key={item.title} span={{ base: 12, sm: 6, md: 4 }}>
								<CardHomeWhy data={item} />
							</GridCol>
						))}
					</Grid>
				</Stack>
			</Section>
			<Section containerized={"responsive"} padded={96} shadowed>
				<Stack gap={48} align="center">
					<Stack gap={"xl"}>
						<Title ta={"center"} order={2}>
							How We Help
						</Title>
						<Text ta={"center"}>
							We offer a comprehensive range of services tailored to your production needs, ensuring a
							smooth and successful Kenyan film adventure.
						</Text>
					</Stack>

					<Grid justify="center" gutter={{ base: "xl", sm: "md" }}>
						{dataPages.home.help.map(item => (
							<GridCol key={item.title} span={{ base: 12, sm: 6, md: 4 }}>
								<CardHomeHelp data={item} />
							</GridCol>
						))}
					</Grid>

					<Button
						variant="subtle"
						color="priLight.8"
						rightSection={<IconArrowRight size={20} stroke={1.5} />}
						component={Link}
						href={"/services"}
					>
						More services
					</Button>
				</Stack>
			</Section>
			<Section containerized={"responsive"} padded={96} shadowed>
				<Stack gap={48} align="center">
					<Stack gap={"xl"}>
						<Title ta={"center"} order={2}>
							Why Kenya?
						</Title>
						<Text ta={"center"}>Stunning Locations, Deep Talent Pool, Film-Friendly Environment</Text>
					</Stack>

					<Grid justify="center" w={"100%"}>
						{dataPages.home.whyKenya.map(item => (
							<GridCol key={item.title} span={{ base: 12, sm: 6, lg: 3 }}>
								<CardHomeKenya data={item} />

								{/* <AspectRatio ratio={1920 / 1080}>
									<Image
										src={item.image}
										alt={item.title}
										w={"100%"}
										loading="lazy"
										radius={"md"}
										component={NextImage}
									/>
								</AspectRatio> */}
							</GridCol>
						))}
					</Grid>

					{/* <Button
						variant="subtle"
						rightSection={<IconArrowRight size={20} />}
						component={Link}
						href={"#about/why-kenya"}
					>
						Why Kenya
					</Button> */}
				</Stack>
			</Section>
		</Page>
	);
}
