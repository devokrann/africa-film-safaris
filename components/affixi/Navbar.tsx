"use client";

import React from "react";

import { Affix, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import classes from "./Navbar.module.scss";

export default function Navbar({ children }: { children: React.ReactNode }) {
	const [scroll] = useWindowScroll();

	return (
		<Affix position={{ left: 0, top: 0, right: 0 }}>
			<Transition transition="slide-down" mounted={scroll.y > 240}>
				{transitionStyles => (
					<div className={classes.affix} style={transitionStyles}>
						{children}
					</div>
				)}
			</Transition>
		</Affix>
	);
}
