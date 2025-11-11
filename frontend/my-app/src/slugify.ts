export default function slugify(str: string) {
  // Handle undefined, null, or non-string values
  if (!str || typeof str !== "string") {
    return "";
  }

  // Trim leading/trailing whitespace and convert to lowercase
  str = str.trim().toLowerCase();

  // Remove accents and diacritics
  str = str.replace(new RegExp(/\s/g), "");
  str = str.replace(new RegExp(/[àáâãäå]/g), "a");
  str = str.replace(new RegExp(/æ/g), "ae");
  str = str.replace(new RegExp(/ç/g), "c");
  str = str.replace(new RegExp(/[èéêë]/g), "e");
  str = str.replace(new RegExp(/[ìíîï]/g), "i");
  str = str.replace(new RegExp(/ñ/g), "n");
  str = str.replace(new RegExp(/[òóôõö]/g), "o");
  str = str.replace(new RegExp(/œ/g), "oe");
  str = str.replace(new RegExp(/[ùúûü]/g), "u");
  str = str.replace(new RegExp(/[ýÿ]/g), "y");
  str = str.replace(new RegExp(/\W/g), "");
  return str;
  // Rest of your slugify logic...
}
