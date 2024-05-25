"use server";

import Styles from "./_style";
export default async function Index() {
	return (
		<html lang="en">
			<head>
				<title>app</title>
			</head>
			<body>
				<Styles />
				<p>hello</p>
			</body>
		</html>
	);
}
