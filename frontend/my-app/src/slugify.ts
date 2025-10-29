function slugify(str: string) {
  // Trim leading/trailing whitespace and convert to lowercase
  str = str.trim().toLowerCase();

  // Remove accents and diacritics
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Replace invalid characters with spaces, then trim again
  str = str.replace(/[^a-z0-9\s-]/g, " ").trim();

  // Replace multiple spaces or hyphens with a single hyphen
  str = str.replace(/[\s-]+/g, "-");

  return str;
}

export default slugify;
