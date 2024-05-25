import { renderToReadableStream } from "react-dom/server";
import { SERVER_OPTIONS } from "./.gyoza/config";

const js = String.raw;

export const render = async (H: () => React.ReactElement, R: Request) => {
	const html = await renderToReadableStream(H(), {
		get bootstrapScriptContent() {
			return js`const env = ${Bun.inspect(Bun.env)}`;
		},
	});
	return html;
};

const options = SERVER_OPTIONS({
	port: "3000",
	hostname: process.env.SERVER_HOSTNAME,
	mode: "development",
}) as {
	port: string;
	hostname: string;
	development: "development" | "production";
};

const HTML = await import("./app/routes/index").then(
	(module) => module.default,
);

const Entry = await HTML();

export default {
	...(options
		? {
				port: options.port,
				hostname: options.hostname,
			}
		: {}),

	async fetch(R: Request) {
		return new Response(await render(() => Entry, R), {
			headers: {
				"content-type": "text/html; charset=utf-8",
			},
		});
	},
};
