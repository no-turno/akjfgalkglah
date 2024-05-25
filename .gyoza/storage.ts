import { Client, type ClientOptions } from "@replit/object-storage";

export async function Bucket(options?: ClientOptions) {
	const clientOptions = {
		bucketId:
			options?.bucketId ?? process.env.REPLIT_DEFAULT_STORAGE_BUCKET_ID!,
	} satisfies ClientOptions;

	return new Client(clientOptions);
}
