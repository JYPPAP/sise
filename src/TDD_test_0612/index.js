function refineText(source, options) {
  /* [reduce] 메서드
  배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
  함수 배열을 reduce를 이용해 순차적으로 값을 적용시킨다.
  value : 누적값
  filter : 현잿값
  filter(value, options) : 변경중인 현잿값
  source : 초기값

  source에 함수를 순차적으로 적용시키고 그 결과인 value를 반환한다.

  ? filter는 현잿값이긴 한데, 뭐지? 함수만 저렇게 딸랑 놔둬도 정상적으로 되는건가?
   */

  /* [filter] 메서드
  filter는 각 요소를 한 번씩 순회한다.
  내부의 값으로 배열에서 하나씩 가져온 값인 num
  배열의 인덱스 값인 index
  배열 그 자체인 arr이 있다.
  let numbers = [1, 4, 9]
  let parameters = numbers.filter((num, index, arr) =>
    {console.log("num: " + num, "index: "+index+"|",arr)})
  num: 1 index: 0| (3) [1, 4, 9]
  num: 4 index: 1| (3) [1, 4, 9]
  num: 9 index: 2| (3) [1, 4, 9]
   */
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

