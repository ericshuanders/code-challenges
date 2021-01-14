//Solution for hackerrank Drawing Book Problem:
//Given a book of 'n' pages long, and given that you can turn a page only one at a time, what is the minimum number of page-turns you must make to reach page "p"?
//Full problem at https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
  let backwards = Math.floor((n - p) / 2);
  let forwards = Math.ceil((p - 1) / 2);
  if (n - p === 1 && n % 2 === 1) {
    backwards = 0;
  }
  if (n - p === 1 && n % 2 === 0) {
    backwards = 1;
  }
  console.log(backwards);
  console.log(forwards);
  return backwards < forwards ? backwards : forwards;
}
