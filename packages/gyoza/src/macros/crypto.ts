export const handlers = {
    _crypto_randomUUID_() {
        return crypto.randomUUID()
    },
     _crypto_btoa_(param: string) {
        return btoa(param)
    },
     _bun_password_hash_(param: string) {
        return Bun.inspect({hash: Bun.password.hashSync(param, 'argon2id')})
    }
}
export function __CRYPTO__(handler: keyof typeof handlers, param: any) {
    return handlers[handler](param)
}