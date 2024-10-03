"use client";

import React from "react";

import NextImage from "next/image";

import { Modal, Image, Text, Box, Grid, GridCol, AspectRatio, Stack, Title, Group, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./Service.module.scss";

import links from "@/data/links";

import brandLight from "@/assets/icons/brand/logo-light.svg";
import brandDark from "@/assets/icons/brand/logo-dark.svg";

import { typeService } from "@/types/service";

export default function Service({ data, children }: { data: typeService; children: React.ReactNode }) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				centered
				title={
					<Text component="span" inherit fw={"bold"}>
						{data.title} Service
					</Text>
				}
				size={800}
				classNames={{
					header: classes.header,
					body: classes.body,
					close: classes.close,
				}}
			>
				<Grid>
					<GridCol span={{ base: 12, sm: 12, md: 6 }}>
						<AspectRatio
							ratio={1 / 1}
							className={classes.imageContainer}
							w={{ base: "100%", xs: "75%", sm: "66.66666%", md: "100%" }}
						>
							<Image src={data.image} alt={data.title} w={"100%"} loading="lazy" component={NextImage} />
						</AspectRatio>
					</GridCol>
					<GridCol span={{ base: 12, sm: 12, md: 6 }}>
						<Stack justify="space-between" gap={"xl"} h={"100%"}>
							<Stack>
								<Text fw={"bold"}>{data.statement}</Text>

								<Text>{data.description}</Text>

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

							<Group justify="end">
								<Image
									src={brandLight}
									alt={data.title}
									w={80}
									h={"auto"}
									loading="lazy"
									component={NextImage}
								/>
							</Group>
						</Stack>
					</GridCol>
				</Grid>
			</Modal>

			<Box onClick={open}>{children}</Box>
		</>
	);
}
