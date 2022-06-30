import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");
  li.className = "list-row";
  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  //button（完了）タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //li以下を初期化
    addTarget.textContent = null;

    //pタグ生成
    const p2 = document.createElement("p");
    p2.innerText = text; //button(戻る)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻る";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(li)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //liタグの子要素に各要素を追加
    addTarget.appendChild(p2);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button（削除）タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //liタグの子要素に各要素の設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
