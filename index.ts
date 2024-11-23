const charMap: Record<string, string> = {
  "%": "procent",
  ą: "a",
  Ą: "A",
  ć: "c",
  Ć: "C",
  ę: "e",
  Ę: "E",
  ł: "l",
  Ł: "L",
  ń: "n",
  Ń: "N",
  ó: "o",
  Ó: "O",
  ś: "s",
  Ś: "S",
  ź: "z",
  Ź: "Z",
  ż: "z",
  Ż: "Z",
};

function slugify(
  string: string,
  options?: {
    strict?: boolean;
    lower?: boolean;
    replacement?: string;
    remove?: string;
    trim?: boolean;
  }
) {
  const replacement = options?.replacement || "-";

  let slug = string
    .normalize()
    .split("")
    .reduce((result, ch) => {
      let appendChar = charMap[ch] || ch;
      if (appendChar === replacement) appendChar = " ";
      return (
        result +
        appendChar
          // remove not allowed characters
          .replace(options?.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "")
      );
    }, "");

  if (options?.strict) {
    slug = slug.replace(/[^A-Za-z0-9\s]/g, "");
  }

  if (options?.trim || options?.trim === undefined) {
    slug = slug.trim();
  }

  // Replace spaces with replacement character, treating multiple consecutive
  // spaces as a single space.
  slug = slug.replace(/\s+/g, replacement);

  if (options?.lower || options?.lower === undefined) {
    slug = slug.toLowerCase();
  }

  return slug;
}

export default slugify;
