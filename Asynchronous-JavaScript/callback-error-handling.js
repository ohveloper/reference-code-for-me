const somethigGonnaHappen = (callback) => {
  waitingUntillSomethingHappens();

  if (isSomethingGood) {
    // 첫번째 인자는 에러, 두번째는 데이터
    callback(null, something);
  }

  if (isSomethingBad) {
    // 첫번재 인자는 에러, 두번째 인자는 데이터
    callback(something, null);
  }
};

somethigGonnaHappen((err, data) => {
  if (err) {
    console.log("ERR!!");
    return;
  }
  return data;
});
