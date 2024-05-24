import { FALLBACK_CONSTANTS } from "./constants";
import type { App } from "../gyoza";

/**
 * @name REPLIT_CONFIG
 * @type function
 * @description Retrieves the Replit configuration.
 * @example
 * const config = await REPLIT_CONFIG({ generateTypes: true });
 * @version 1.0.0
 */
export async function REPLIT_CONFIG(options: {
    generateTypes?: boolean;
}): Promise<any> {
    const config = Bun.TOML.parse(
        await new Response(Bun.file(".replit")).text(),
    );

    if (options.generateTypes) {
        await Bun.write(
            "types/replit.d.ts",
            `export type ReplitConfig = ${Bun.inspect(config)}`,
        );
    }

    return config;
}

/**
 * @name SERVER_OPTIONS
 * @type function
 * @description Constructs server options based on input parameters.
 * @example
 * const options = SERVER_OPTIONS({ port: 8080, hostname: "localhost", mode: "development"});
 * @version 1.0.0
 */
export function SERVER_OPTIONS(options: {
    port: string,
    hostname: string,
    mode: "development" | "production",
}) {
    return {
        port: options.port,
        hostname: options.hostname,
        development: options.mode,
    };
}

/**
 * @name STORAGE_OPTIONS
 * @type function
 * @description Constructs storage options based on input parameters.
 * @example
 * const options = STORAGE_OPTIONS({ bucketId: "exampleBucket"});
 * @version 1.0.0
 */
export function STORAGE_OPTIONS({
    bucketId,
}: {
    bucketId?: string;
}): App.Storage["options"] {
    return {
        bucketId: process.env.REPLIT_DEFAULT_STORAGE_BUCKET_ID ?? bucketId,
    };
}
