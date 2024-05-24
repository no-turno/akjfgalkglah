import type { ClientOptions } from "@replit/object-storage";
import type { FileSystemRouter, ShellPromise } from "bun";

declare namespace App {
	interface Storage {
		options: ClientOptions;
	}

	type $Router = FileSystemRouter;

	interface $Routers {
		"server:router": $Router;
		"client:router": $Router;
		[key: `${string}:router`]: $Router;
	}
}

declare module "bun" {
	interface Env {
		SERVER_PORT: `${3000 | 4000 | 5173 | 8080 | 80 | 8000 | 8001 | 8002 | 8003 | 8004 | 8005 | 8006 | 8007}`;
		SERVER_HOSTNAME: `${"0.0.0.0" | string}`;
		NODE_ENV?: string | `${"dev" | "prod" | "test" | ":stealth:"}`;
	}

	interface Shell {
		nu$hell: (
			command: TemplateStringsArray,
			...expressions: string[]
		) => ShellPromise;
	}
}
