import React from "react";

import Link from "next/link";

import { Grid, GridCol } from "@mantine/core";

import Page from "@/layouts/Page";
import Section from "@/layouts/Section";
import CardBlog from "@/components/cards/Blog";

import dataBlogs from "@/data/blogs";

export default function Blog() {
	return (
		<Page padded>
			<Section>
				<Grid>
					{dataBlogs.map(blog => (
						<GridCol key={blog.title} span={{ base: 12, sm: 6 }}>
							<CardBlog data={blog} />
						</GridCol>
					))}
				</Grid>
			</Section>
		</Page>
	);
}
