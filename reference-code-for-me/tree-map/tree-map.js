const Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function (child) {
  let node = new Tree(child);
  // node.value = child;
  this.children.push(node);
  return node;
};

Tree.prototype.map = function (callback) {
  // Array.from(arguments)[1]
  // ,47번쨰줄에서 node가 호출될때,
  // 49번째 줄애서 넘겨준 전달인자중 1번째를 받아서 어레이에 담고 그걸 노드로 삼는다.
  // 그게 없다면 그냥 현재 노드의 벨류를 받아서 콜백 함수를 적용시킨후 바꿔준다
  let node = Array.from(arguments)[1] || new Tree(callback(this.value));

  // children이 있다는 가정하에 반복문을 돌지만 없다면 맨마지막줄로 이동해서 node를 리턴해주고 끝낸다
  // 그때 가장 최상단 루트노드는 벨류 값과 빈배열만 있기때문에
  // 다른 전달인자를 받지 못하고 콜백함수만을 거친 벨류를 벨류로 하는 새로운 노드를 리턴한후 끝낸다
  for (let i = 0; i < this.children.length; i++) {
    // 반복문에서 자식요소가 있다는걸 확인했으니 자식요소의 벨류를 콜백함수로 전달한후에 새로운 노드에 addChild를 해준다
    node.addChild(callback(this.children[i].value));

    // 만약 현재 자식노드에 자식이 또 있다면
    if (this.children[i].children) {
      // 현재 자식노드를 다시 맵핑해준다
      // 이때 현재 자식노드를 함께 넘겨줘서 새로운 노드에 적용할수 있도록 한다
      this.children[i].map(callback, node.children[i]);
    }
  }

  return node;
};
