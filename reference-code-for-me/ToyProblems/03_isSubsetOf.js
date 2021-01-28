const isSubsetOf = function (base, sample) {
  // naive solution: O(M * N)
  // return sample.every((item) => base.includes(item));

  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      // base : [3,4,5,6,7,8,9,10.....1000]
      // sample : [950, 1000] 일때 950 을 검사해봤으면 1000을 검사할때는
      // base에서 950이 위치한 인덱스 다음부터 검사를 하면 되기 때문에
      // 해당 인덱스를 리턴 해준다
      // 하여 시간 복잡도는 최대 O(N * logN) 이된다
      // 처음에만 처음부터 끝에 가깝게 검사해봐야하수있고 그 이후부터는 해당 번째부터 들어가기때문에 팍팍 줄어든다
      else if (item < arr[i]) return -1;
      // sort 를 했기때문에 sample의 0번쨰가 base보다 작으면 무조건 아웃이다
    }
    // 예) base = [4,5,6,7]
    //     sample = [3,4,5,6] 작으면 무조건 아웃
    //     sample = [5,8] 검사를 시작할 가치가 있음
    return -1;
  };

  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    // 샘플의 탐색은 변하면 안되기때문에 따로 반복한다
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};
