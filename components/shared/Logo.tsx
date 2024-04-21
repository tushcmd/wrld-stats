
import { URLS } from "@/lib/urls";
import { Earth } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

const Logo: FC = () => {
	return (
		<Link href={URLS.HOMEPAGE} className="flex items-center gap-2 component-focus rounded-md">
			<Earth  className="w-5 h-5 fill-current" />
			<h1 className="inline-flex flex-col gap-0 leading-none font-medium">
				<p>Wrld<span className="font-bold">Stats</span></p>
			</h1>
		</Link>
	);
};

export default Logo;