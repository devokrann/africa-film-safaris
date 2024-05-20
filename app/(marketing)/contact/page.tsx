import React from "react";

import { Metadata } from "next";

import { Anchor, Grid, GridCol, Group, Stack, Text, Title } from "@mantine/core";

import Page from "@/layouts/Page";
import Section from "@/layouts/Section";
import FormContact from "@/partials/forms/Contact";

import links from "@/data/links";

export const metadata: Metadata = {
	title: "Contact",
};

export default async function Contact() {
	return (
		<Page>
			<Section containerized={"responsive"} padded shadowed>
				<Grid gutter={64}>
					<GridCol span={{ base: 12, md: 6 }}>
						<Stack>
							<Title
								order={2}
								fz={"xl"}
								c={"light-dark(var(--mantine-color-secLight-7),var(--mantine-color-secDark-4))"}
							>
								Reach Out
							</Title>
							<Text fz={"xl"} tt={"uppercase"} fw={"bold"}>
								Don't hesitate to ask us a question
							</Text>
							<Text>
								Nulla facilisi. Praesent non mauris ac ligula ullamcorper vehicula. Praesent mollis,
								nibh in venenatis iaculis, mauris eros iaculis quam, ut aliquam nisi nunc vitae quam.
								Fusce faucibus, felis at fermentum convallis, nunc neque aliquam turpis, ut varius ipsum
								nisi eu magna. Sed euismod laoreet nisi, eu iaculis elit scelerisque non.
							</Text>
							<Stack gap={"xs"}>
								{links.contact.map(item => (
									<Group key={item.label} gap={"xs"}>
										<item.icon size={20} color="var(--mantine-color-secLight-7)" />
										<Anchor
											href={item.link}
											target={item.target ? item.target : undefined}
											inherit
											fz={"sm"}
											c={"light-dark(inherit,var(--mantine-color-secDark-4))"}
										>
											{item.label}
										</Anchor>
									</Group>
								))}
							</Stack>
						</Stack>
					</GridCol>
					<GridCol span={{ base: 12, md: 6 }}>
						<FormContact />
					</GridCol>
				</Grid>
			</Section>
		</Page>
	);
}
