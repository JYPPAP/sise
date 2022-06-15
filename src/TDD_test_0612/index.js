function refineText(source, options) {
  return [normalizeWhiteSpace, compactWhiteSpace, maskBannedWords, trimWhiteSpace].reduce(
    (value, filter) => filter(value, options), source
  );
}

function trimWhiteSpace(source) {
  return source = source.trim();
}
function compactWhiteSpace(source) {
  return source.indexOf("  ") < 0 
  ? source 
  : compactWhiteSpace(source.replace("  ", " "));
}

function normalizeWhiteSpace(source) {
  return source.replace("\t", " ");
}

function maskBannedWords(source, options) {
  return options ? options.bannedWords.reduce(maskBannedWord, source) : source;
}

function maskBannedWord(source, bannedWord) {
  const mask = "*".repeat(bannedWord.length);
  return source.replace(bannedWord, mask);
}
module.exports = refineText;

