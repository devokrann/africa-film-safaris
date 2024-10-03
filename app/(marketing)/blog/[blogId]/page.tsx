import React from "react";

import { Metadata } from "next";
import NextImage from "next/image";

import { AspectRatio, Card, CardSection, Stack, Text, Title, Image } from "@mantine/core";

import Page from "@/layouts/Page";
import Section from "@/layouts/Section";
import MediaImage from "@/components/media/Image";

import link from "@/handlers/parsers/string/link";

import dataBlogs from "@/data/blogs";

import { typeParams } from "./layout";

export const generateMetadata = ({ params }: typeParams): Metadata => {
	return { title: link.unlinkify(params.blogId) };
};

export default function BlogDetails({ params }: typeParams) {
	const blogData = dataBlogs.find(blog => link.linkify(blog.titleLink) == params.blogId);

	return (
		<Page padded>
			<Section>
				<Card bg={"inherit"} c={"inherit"}>
					<Stack gap={"xl"}>
						<CardSection>
							<AspectRatio ratio={1920 / 1080}>
								{blogData?.image ? (
									<Image
										src={blogData?.image}
										alt={blogData?.title}
										w={"100%"}
										loading="lazy"
										component={NextImage}
									/>
								) : (
									<MediaImage alt={"placeholder"} width={1920} height={1080} />
								)}
							</AspectRatio>
						</CardSection>

						<Stack gap={"xl"}>
							<Stack gap={"xs"}>
								<Title order={3}>{blogData?.title}</Title>
								<Text
									fz={"sm"}
									fw={"bold"}
									c="light-dark(var(--mantine-color-secLight-8),var(--mantine-color-priLight-8))"
								>
									{blogData?.date}
								</Text>
							</Stack>

							<Text>{blogData?.description}</Text>
						</Stack>
					</Stack>
				</Card>
			</Section>
		</Page>
	);
}
