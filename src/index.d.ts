// toml.d.ts
declare module TOML {
    export function parse(value:string):any;
}

declare module "toml" {
    export = TOML;
}
