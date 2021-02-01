const rockPaperScissors = function (rounds) {
  // round 횟수를 정할수있다 기본값 3
  rounds = rounds || 3;

  const result = [];
  const rps = ["rock", "paper", "scissors"];

  // 외워 그냥 재귀함수 활용법
  let infiFunc = function (count, arr) {
    if (count === 0) {
      // 카운트 -1 씩 재귀해서 3개가 채워지면 탈출
      result.push(arr);
      return;
    }
    // 외우자 외우자
    for (let i = 0; i < rps.length; i++) {
      let curr = rps[i];
      infiFunc(count - 1, arr.concat(curr));
    }
  };
  infiFunc(rounds, []);

  return result;
};
