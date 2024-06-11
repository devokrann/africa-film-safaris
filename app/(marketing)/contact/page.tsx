import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Anchor, Grid, GridCol, Group, Stack, Text, Title } from "@mantine/core";

import Page from "@/layouts/Page";
import Section from "@/layouts/Section";
import FormContact from "@/partials/forms/Contact";
import TemplateEmailContact from "@/templates/email/Contact";

import links from "@/data/links";

export const metadata: Metadata = {
	title: "Contact",
};

export default async function Contact() {
	return (
		<Page>
			{/* <TemplateEmailContact /> */}

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
								At Africa Film Safaris, we're passionate about simplifying filmmaking in Kenya. Our team
								of experienced filmmakers and local experts understands the challenges of on-location
								production firsthand. We've navigated the permits, scouted diverse locations, and built
								a network of reliable partners. Whether you're an independent filmmaker, a documentary
								team, or a mid-sized production, we offer comprehensive, stress-free support tailored to
								your unique needs. From securing permits and scouting locations to arranging logistics,
								equipment, and local talent, we'll handle every detail so you can focus on bringing your
								creative vision to life in the heart of East Africa.
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
						<Stack>
							<FormContact />
							<Text fz={"sm"} ta={"center"} fw={500}>
								See the{" "}
								<Anchor component={Link} href="/faq" inherit>
									FAQ's
								</Anchor>{" "}
								for more information.
							</Text>
						</Stack>
					</GridCol>
				</Grid>
			</Section>
		</Page>
	);
}
