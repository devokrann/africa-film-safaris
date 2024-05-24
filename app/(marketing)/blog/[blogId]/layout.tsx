import React from "react";

import Body from "@/layouts/Body";

export interface typeParams {
	params: { blogId: string };
}

export default function BlogDetails({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <Body>{children}</Body>;
}
