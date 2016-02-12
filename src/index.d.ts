declare module toml {
  interface TOML {
    parse(value: string): any;
  }
}

declare var toml: toml.TOML;

export = toml;
