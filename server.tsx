import dom from "react-dom/server";
import { SERVER_OPTIONS } from "./.gyoza/config";
import type React from "react";

export const render = async (
  Component: (props: any) => React.ReactElement<any, any>,
  req: Request,
) => {
  const html = await dom.renderToReadableStream(<Component req={req} />);
  await html.allReady;

  return new Response(html);
};

export default {
  async fetch(req: Request) {
    const fallbackElement = (await import("./app/libs/components/CDNModules"))
      .CDNModules;

    return await render(fallbackElement, req);
  },
  ...SERVER_OPTIONS({
    port: process.env?.SERVER_PORT ?? "8080",
    hostname: process.env?.SERVER_HOSTNAME ?? "0.0.0.0",
    mode: "development",
  }),
};
