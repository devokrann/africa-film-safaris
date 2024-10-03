import React from "react";

import { Metadata } from "next";

import Link from "next/link";

import { Anchor, Stack, Text } from "@mantine/core";

import Page from "@/layouts/Page";
import Section from "@/layouts/Section";

import AccordionFaq from "@/components/accordions/Faq";

import faqs from "@/data/faqs";

export const metadata: Metadata = {
	title: "Faq",
};

export default async function Faq() {
	return (
		<Page>
			<Section containerized={"responsive"} padded shadowed>
				<Stack gap={48}>
					<AccordionFaq data={faqs} />

					<Text fz={"sm"} ta={"center"} fw={500}>
						Didn't find this page helpful?{" "}
						<Anchor component={Link} href="/contact" inherit>
							Send us a message
						</Anchor>{" "}
						instead.
					</Text>
				</Stack>
			</Section>
		</Page>
	);
}
