import { renderToReadableStream } from "react-dom/server";
import { SERVER_OPTIONS } from "./.gyoza/config";

export const render = async (H: () => React.ReactElement, R: Request) => {
  const html = await renderToReadableStream(<H />);
  await html.allReady;
  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};

const options = SERVER_OPTIONS({
  port: process.env.SERVER_PORT,
  hostname: process.env.SERVER_HOSTNAME,
  mode: "development",
}) as {
  port: string;
  hostname: string;
  development: "development" | "production";
};

export default {
  async fetch(R: Request) {
    const html = await Bun.peek(
      await import("./app/routes/index").then((module) => module.default),
    );

    return await render(html, R);
  },
  ...(options
    ? {
        port: options.port,
        hostname: options.hostname,
        development: options.development === "development",
      }
    : {}),
};
