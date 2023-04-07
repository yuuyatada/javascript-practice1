/**秒用エレメント*/
//const secondElement = document.querySelector('.second');

//15秒後をゴールにする//
//const goalTime = new Date().getTime() + 15 * 1000;

//update();

//**毎フレーム実行される関数*/
//function update(){
    //現在時刻//
    //const currentTime = new Date().getTime();
    
    //目標時刻までの残り//
    //const leftTime = goalTime - currentTime;
    //タイマーが0未満の時カウントを停止させる
    //if(leftTime < 0) {
      //secondElement.innerText = 'time up!';
      //return;
    //}
    
    //secondElement.innerText = (leftTime / 1000).toFixed(2);
    
    //requestAnimationFrame(update);
//}

//文字列を指定の長さにする
//時間
//const hourElement = document.querySelector('.hour');
//分
//const minuteElement = document.querySelector('.minute');
//秒
//const secondElement = document.querySelector('.second');

//update();

//現在時間を表示する処理
//function update(){
    //const currentTime = new Date();
    
//秒の表示
//const second = currentTime.getSeconds();
//secondElement.innerText = addZeroPadding(second);

//const minute = currentTime.getMinutes();
//minuteElement.innerText = addZeroPadding(minute);

//const hour = currentTime.getHours();
//hourElement.innerText = addZeroPadding(hour);

//次のフレームで再度update()を実行する
//requestAnimationFrame(update);
//}

/**
 *@parm num
 * @returns {string}
 */
 //function addZeroPadding(num) {
     //return String(num).padStart(2, '0');
 //}
 
 //文字列をURLエスケープする場合
 
 //document.querySelector('#tweetButton').addEventListener('click',
 //() => {
     //ツイート内容を取得
     //let tweetText = document.querySelector('tweetTextArea').value;
     
     //半角スペースと#javascriptをツイート文言に追加する
     //tweetText += ' #JavaScript';
     
     //エンコードする
     //const encodedText = encodeURIComponent(tweetText);
     
     //ツイート用リンクを作成する
     //const tweetURL =
     //'https://twitter.com/intent/tweet?text=${encodedText}';
     
     //ツイート用リンクを開く
     //window.open(tweetURL);
     
 //});
 
 //API等から出力するユーザーデータの配列
 //const userList = [
     //{id: 1,name: '田中',address:'田中'},
     //{id: 2,name: '鈴木',address:'宮城'},
    // {id: 3,name: '高橋',address:'福岡'}
     //];
     
     //コンテナー
     
     //const container = document.querySelector('.container');
     
     //userListの配列の各要素についてのループ
     //userList.forEach((userDate) => {
         //各要素を書き足す
         //container.innerHTML += `
        // <div class="card">
         //<h2>${userDate.name}</h2>
         //<p>出身地:${userDate.address}</p>
         //</div>
         //`;
     //});
     
     
     
     //idキーとnameキーを持つユーザーデータの配列
     const userDataList = [
         {id :123 , name: '高橋'},
         {id :1021 , name: '鈴木'},
         {id :6021 , name: '後藤'}
         ];
         
      //**検索IDを入力するinput要素
     const searchIdInput = document.querySelector('#search-id-input');
     
     //** 検索結果を表示する要素
     const searchResult = document.querySelector('#search-result');
     
     //文字が入力されるたびにチェックを行う
     searchIdInput.addEventListener('keyup',() => {
         //検索IDを取得する
         const searchId = Number(event.target.value);
         findUser(searchId);
     });
     
     //*ユーザーを検索する
     function findUser(searchId) {
         //該当データを取得する
         const targetData =userDataList.find((data) =>
         data.id === searchId);
     
     //該当データが存在しなかったら「該当者なし」と表示して終了
     if (targetData == null){
         searchResult.textContent = '該当者なし';
         return;
     }
     
     //該当データの名前を表示する
     searchResult.textContent = targetData.name;
     }
         
 



