# slugify-pl

A simplified, lightweight version of the popular [slugify](https://www.npmjs.com/package/slugify) library, working only with Polish diacritics (ą,ć,ę,ł,ń,ó,ś,ź,ż).

In result it's smaller and faster than original slugify. Bundle size is 385B compared to 3.39KB (gzip) of original slugify.

## Differences between `slugify-pl` and `slugify` packages

- Only Polish diacritics are supported
- The `lower` option is true by default, lowercasing all slugs
- The `locale` option has been removed
- Special characters (eg. `$ -> dollar` or `> -> greater`) are not mapped to words. Instead, `slugify-pl` removes unrecognized symbols (with one exception: `% -> procent`)

## Installation

```bash
npm install slugify-pl
```

```bash
pnpm install slugify-pl
```

```bash
bun add slugify-pl
```

## Usage

```ts
import slugify from "slugify-pl";

slugify("Ala ma kota"); // "ala-ma-kota"

slugify("Kot ma Ale", {
  replacement: "-", // replace spaces with replacement character, defaults to `-`
  remove: undefined, // remove characters that match regex, defaults to `undefined`
  lower: false, // convert to lower case, defaults to `false`
  strict: false, // strip special characters except replacement, defaults to `false`
  trim: true, // trim leading and trailing replacement chars, defaults to `true`
}); // "kot-ma-ale"
```
