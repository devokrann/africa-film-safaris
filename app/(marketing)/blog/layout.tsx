import React from "react";

import { Metadata } from "next";

import Body from "@/layouts/Body";
import AsideBlog from "@/partials/aside/Blog";

export const metadata: Metadata = {
	title: { default: "Blog", template: "%s - Blog - Africa Film Safaris" },
};

export default function Blog({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <Body aside={{ right: { component: <AsideBlog />, width: { md: 33, lg: 25 } } }}>{children}</Body>;
}
