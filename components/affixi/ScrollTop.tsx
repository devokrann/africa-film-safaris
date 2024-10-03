"use client";

import React from "react";

import { Affix, ActionIcon, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import { IconChevronUp } from "@tabler/icons-react";

export default function ScrollTop() {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<Affix position={{ bottom: 20, right: 20 }} visibleFrom="md">
			<Transition transition="slide-up" mounted={scroll.y > 240}>
				{transitionStyles => (
					<ActionIcon size={32} style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
						<IconChevronUp size={24} />
					</ActionIcon>
				)}
			</Transition>
		</Affix>
	);
}
