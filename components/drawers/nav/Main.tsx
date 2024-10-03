"use client";

import React from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";
import NextImage from "next/image";

import { Burger, Drawer, NavLink, Image } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import brandLight from "@/assets/icons/brand/icon-light.svg";

import MediaImage from "@/components/media/Image";

import { typeMenuNavbar } from "@/types/components/menu";

import classes from "./Main.module.scss";

export default function Main({ data, ...restProps }: { data: typeMenuNavbar[] } & React.ComponentProps<typeof Burger>) {
	const [opened, { toggle, close }] = useDisclosure(false);
	const pathname = usePathname();
	const mobile = useMediaQuery("(max-width: 36em)");

	const navMobile = data.map(link => {
		const subLinks =
			link.subLinks &&
			link.subLinks.map(subLink => (
				<NavLink
					className={classes.link}
					fw={"bold"}
					key={subLink.link}
					component={Link}
					href={subLink.link}
					label={subLink.label}
					active={pathname == subLink.link}
					onClick={() => close()}
				/>
			));

		return !subLinks ? (
			<NavLink
				className={classes.link}
				fw={"bold"}
				key={link.link}
				component={Link}
				href={link.link}
				label={link.label}
				active={pathname == link.link}
				onClick={() => close()}
				leftSection={link.leftSection ? <link.leftSection size={14} /> : undefined}
				rightSection={link.rightSection ? <link.rightSection size={14} /> : undefined}
			/>
		) : (
			<NavLink
				// className={classes.link}
				fw={"bold"}
				key={link.link}
				component={Link}
				href={link.link}
				label={link.label}
				active={pathname == link.link}
				opened={link.subLinks?.find(sl => sl.link == pathname)?.link == pathname ? true : undefined}
				leftSection={link.leftSection ? <link.leftSection size={14} /> : undefined}
				rightSection={link.rightSection ? <link.rightSection size={14} /> : undefined}
			>
				{subLinks}
			</NavLink>
		);
	});

	return (
		<>
			<Drawer
				opened={opened}
				onClose={close}
				withCloseButton={false}
				size={"200"}
				classNames={{
					body: classes.body,
					close: classes.close,
					content: classes.content,
					header: classes.header,
					inner: classes.inner,
					overlay: classes.overlay,
					root: classes.root,
					title: classes.title,
				}}
				title={<Image src={brandLight} w={32} h={32} alt="AFS" component={NextImage} loading="lazy" />}
			>
				{navMobile}
			</Drawer>

			<Burger opened={opened} onClick={toggle} size={mobile ? "sm" : "sm"} {...restProps} />
		</>
	);
}
