import { type ClientOptions } from "@replit/object-storage";

declare namespace App {
	interface Storage {
		options: ClientOptions;
	}
}
