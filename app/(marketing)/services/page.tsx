import React from "react";

import { Metadata } from "next";

import { Grid, GridCol, Stack, Text, Title } from "@mantine/core";

import Page from "@/layouts/Page";
import Section from "@/layouts/Section";
import CardService from "@/components/cards/Service";

import services from "@/data/services";

export const metadata: Metadata = {
	title: "Services",
};

export default async function Services() {
	return (
		<Page>
			<Section containerized={"responsive"} padded={96} shadowed>
				<Stack gap={96}>
					<Stack gap={"xl"}>
						<Title ta={"center"} order={2}>
							Your One-Stop-Shop for Stress-Free Filming in Kenya
						</Title>
						<Text ta={"center"}>
							We offer a comprehensive range of services tailored to your production needs, ensuring a
							smooth and successful Kenyan film adventure.
						</Text>
					</Stack>

					<Grid>
						{services.map(service => (
							<GridCol key={service.title} span={{ base: 12, sm: 6, md: 4 }}>
								<CardService data={service} />
							</GridCol>
						))}
					</Grid>
				</Stack>
			</Section>
		</Page>
	);
}
