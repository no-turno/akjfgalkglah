export interface Server { }

export interface Client { }

export interface Route {
	name: string;
	handler<T extends (Client | Server)>(mod: T): {
		module: T,
		platform: Set<{
			readonly type: 'member',
			readonly isBoot: boolean
		}>
	}
}

export interface Gyoza<__client__ = Server, __server__ = Server> {
	System: {
		client: __client__,
		server: __server__,
		routers: Set<Route>
	}
}

declare namespace Gyoza {
	export {
		Server,
		Client,
		Route,
		Gyoza
	}
}

declare module "gyoza" {
	
}