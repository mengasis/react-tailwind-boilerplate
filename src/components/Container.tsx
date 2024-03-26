import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

function Container(props: Props) {
	return (
		<div className="bg-white w-full min-w-[300px] min-h-[500px] max-w-[800px] p-10">
			{props.children}
		</div>
	);
}

export default Container;
