import React from "react";

import { Button, Card, Divider, Grid, GridCol, Stack, Text, Title } from "@mantine/core";

import Section from "@/layouts/Section";
import CardAsideBlog from "@/components/cards/aside/Blog";

import dataBlogs from "@/data/blogs";

import classes from "./Blog.module.scss";

export default function Blog() {
	return (
		<Section padded>
			<Stack gap={48}>
				<Section>
					<Card className={classes.card}>
						<Stack align="center" gap={"lg"}>
							<Stack gap={"xs"}>
								<Title ta={"center"} order={3} lh={1}>
									Have an Idea in Mind?
								</Title>
								<Text ta={"center"} className={classes.desc}>
									Let's start you project
								</Text>
							</Stack>
							<Button
								color="light-dark(var(--mantine-color-priLight-8),var(--mantine-color-priLight-8))"
								variant="outline"
								component="a"
								href="tel:+254716046074"
							>
								Contact Us
							</Button>
						</Stack>
					</Card>
				</Section>

				<Section>
					<Stack gap={"lg"}>
						<Title order={2} fz={"xl"} lh={1}>
							Related Blogs
						</Title>
						<Divider color="light-dark(var(--mantine-color-secDark-4),var(--mantine-color-secDark-4))" />
						<Grid>
							{dataBlogs.map(blog => (
								<GridCol key={blog.title} span={12}>
									<CardAsideBlog data={blog} />
								</GridCol>
							))}
						</Grid>
					</Stack>
				</Section>
			</Stack>
		</Section>
	);
}
