import { $entryClient } from "@/entry-client";
import { $entryServer } from "@/entry-server";

const modules = {
    $entryClient,
    $entryServer
}

export function System() {
    return {
        [Symbol.for('createClient')]: modules['$entryClient'],
        [Symbol.for('createServer')]: modules['$entryServer'],
        create(target: 'Server' | 'Client') {
            return this[
                Symbol.for(`create${target}`)
            ]
        }
    }
}

const client = System().create('Client')

console.log(client());
