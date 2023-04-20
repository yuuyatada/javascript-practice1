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
     //const userDataList = [
         //{id :123 , name: '高橋'},
         //{id :1021 , name: '鈴木'},
         //{id :6021 , name: '後藤'}
         //];
         
      //**検索IDを入力するinput要素
     //const searchIdInput = document.querySelector('#search-id-input');
     
     //** 検索結果を表示する要素
     //const searchResult = document.querySelector('#search-result');
     
     //文字が入力されるたびにチェックを行う
     //searchIdInput.addEventListener('keyup',() => {
         //検索IDを取得する
         //const searchId = Number(event.target.value);
        // findUser(searchId);
     //});
     
     //*ユーザーを検索する
     //function findUser(searchId) {
         //該当データを取得する
        // const targetData =userDataList.find((data) =>
         //data.id === searchId);
     
     //該当データが存在しなかったら「該当者なし」と表示して終了
     //if (targetData == null){
        // searchResult.textContent = '該当者なし';
        // return;
    // }
     
     //該当データの名前を表示する
     //searchResult.textContent = targetData.name;
    // }
    
    
    //データ
    //const userDataList = [
        //{id:2 , name:'鈴木'},
        //{id:10 , name:'田中'},
        //{id:4 , name:'佐藤'},
        //{id:29 , name:'鈴木'},
        //{id:101 , name:'小笠原'}
       // ];
        
        //表示を更新する
        //function updataList(){
            //let listHtml = '';
            
            //for(const data of userDataList){
            //listHtml += `<li>${data.id} : ${data.name}</li>`;
            //}
            //document.querySelector('.user_list').innerHTML = listHtml;
        //}
         //昇順にソート
        //function sortByAscending(){
            //userDataList.sort((a,b) => {
                //return a.id -b.id;
            //});
       // updataList();
        //}
        
        
        //降順にソート
        //function sortByDescending(){
           // userDataList.sort((a,b) => {
              //  return b.id -a.id;
           // });
       // updataList();
       // }
        
        //昇順ボタンをクリックしたときの処理
        //document.querySelector('.ascending').addEventListener('click',() => {
        //sortByAscending();
       // });
        
        //降順ボタンをクリックしたときの処理
       // document.querySelector('.descending').addEventListener('click', () =>
        //{
        //    sortByDescending();
       // });
        
        //最初に昇順にならべる
        //sortByAscending();
         
         //ある配列から条件を満たす別の配列を作る
         //const userDataList = [
             //{ name:'鈴木', age:18},
             //{ name:'田中', age:27},
             //{ name:'佐藤', age:32},
             //{ name:'高橋', age:41},
             //{ name:'小笠原', age:56}
             //];
             
             //button要素のイベント設定
            //document.querySelectorAll('.button').forEach((element) => {
            //element.addEventListener('click', (event) => {
                ///onClickButton(event);
            //});
          //});
          
          /**
           * ボタンがクリックされたときの処理
           */
           
           //function onClickButton(event) {
               //クリックされたボタン要素
               //const button = event.target;
               //ボタン要素からdata-ageを取得
               //const targetAge = button.dataset.age;
               // targetAge以上のユーザー配列を生成する
               //const filterdList = userDataList.filter((data) => data.age >=
               //targetAge);
               //配列を出力する
              // updateList(filterdList);
           //}
           /**
            * ユーザー配列を出力する
            */
            //function updateList(filterdList){
                //let listHtml = '';
                
                //for (const data of filterdList){
                    //listHtml += `<li>${data.name} : ${data.age}歳</li>`;
                //}
                //document.querySelector('.user_list').innerHTML = listHtml;
           // }
           
           //setInterval(() => {
               //現在時間を取得
             //  const now = new Date();
               //時間の数値を取得
               //const h = now.getHours();//時間(0~23)
               //const m = now.getMinutes();//分(0~59)
               //const s = now.getSeconds();//秒(0~59)
               
               //針の角度に反映する
               //短針
               //const degH = h * (360/12) + m *(360/12/60);
               //分針
               //const degM = m * (360/12);
               //秒針
               //const degS = s * (360/12);
               
               //const elementH = document.querySelector('.lineHour');
               //const elementM = document.querySelector('.lineMin');
               //const elementS = document.querySelector('.lineSec');
               
               //elementH.style.transform = `rotate(${degH}deg`;
               //elementM.style.transform = `rotate(${degM}deg`;
               //elementS.style.transform = `rotate(${degS}deg`;
           //},50);
            
               //ユーザーの操作に合わせてイベントを起こす
               //const button = document.querySelector('.button');
               //button.addEventListener('click', onClickButton);
               
               //function onClickButton(){
                //console.log('クリックされました');
               //}
               
               //document.querySelector('.button').addEventListener('click', () => {
                //alert('ボタンがクリックされました');
               //});
               
               //操作対象エリア
               //const logArea = document.querySelector('#log2');
               
               //対象エリア内でマウスボタンを押すとログを出力
               //logArea.addEventListener('mousedown', () => {
               // logArea.innerHTML = `マウスボタンを押した`;
               //});
               
               //対象エリア上でマウスボタンを離したらログを出力
               //logArea.addEventListener('mouseup', () => {
               // logArea.innerHTML = `マウスボタンを離した`
              // });
               
                //対象エリア上でマウスボタンを移動したら出力
               //logArea.addEventListener('mousemove', () => {
              //  logArea.innerHTML = `マウス移動した`
               //});
               
               /*動かすキャラ*/
               //const character = document.querySelector('.character');
               //ページ上でマウスボタンを押したら移動開始
               //document.addEventListener('mousedown',() => {
                //マウスの動きでキャラを動かす
                //document.addEventListener('mousemove', onMouseMove);
                //ページ上でマウスボタンを離したらキャラの移動を終了
                //document.addEventListener('mouseup', () => {
                // document.removeEventListener('mousemove',onMouseMove);
               // });
               //});
               
               //マウスが動いた際の処理
               //function onMouseMove(event){
              //  character.style.left = `${event.clientX - 100}px`;
              //  character.style.top = `${event.clientY - 100}px`;
              // }
              
              //テキストエリア
              //const textarea = document.querySelector('.textarea');
              //入力中の文字数
              //const string_num = document .querySelector('.string_num');
              
              //テキストエリアに入力されるとonkeyupが実行される
              //textarea.addEventListener('keyup', onKeyUp);
              
              //function onKeyUp(){
               //入力されたテキスト
               //const inputText = textarea.value;
               //文字数を反映
               //string_num.innerText = inputText.length;
              //}
           //ウインドウ幅を表示
           //const widthLog = document.querySelector('#widthLog');
           //ウインドウの高さを表示する要素
          // const heightLog = document.querySelector('#heightLog');
           
           //ウインドウがリサイズされるたびに処理する
           //window.addEventListener('resize', () => {
            //widthLog.innerText = `${window.innerWidth}px`;
           // heightLog.innerText = `${window.innerHeight}px`;
           //});
           
           //ウインドウ幅でブレイクポイントを設ける
           //const rectAngle = document.querySelector('.rectangle');
           
           //メディアクエリ情報
          // const mediaQueryList = matchMedia('(min-width: 600px)');
           
           //メディアクエリが変更されたタイミングで処理
           //mediaQueryList.addListener(onMediaQueryChange);
           
           //メディアクエリが変更された場合の関数
           //function onMediaQueryChange(mediaQueryList){
           // if (mediaQueryList.matches === true){
            // rectAngle.classList.add('big-size');
             //console.log('ウインドウサイズが600pxを超えました');
             //}else{
            // rectAngle.classList.remove('big-size');
             //console.log('ウインドウサイズが600pxを下回りました');
            // }
          // }
           //ページ表示に一度onMediaQueryChange()を実行する
          // onMediaQueryChange(mediaQueryList);
          
          //const boxElement = document.querySelector('#myBox');
          
         // boxElement.addEventListener('click',() => {
           //boxElement.innerHTML = 'クリックされました';
          //});
          
          //setTimeout(() => {
           //boxElement.dispatchEvent(new Event('click'));
         // },1000);
         
         //マウスホイールの有効
         //let enableMouseWheel = true;
         //チェックボックスをクリックしたときの処理
         //document
        /// .querySelector('#mouseWheelToggle')
         //.addEventListener('click',(event) => {
          //チェックボックスに値が入っていたら無効化する
          //enableMouseWheel = event.target.checked === false;
        // });
         
         //スクロール可能要素をマウスホイールしたときの反応
         //document
          //.querySelector('.scrollable-element')
        // .addEventListener('wheel',(event) => {
          //ホイール有効時は処理を抜ける
         // if (enableMouseWheel === true){
          // return;
        //  }
          //ホイール無効時はevent.preventDefault()を実行
          //event.preventDefault();
        // });
        
        //ドラッグ&ドロップ
        //const box = document.querySelector('.box');
       // box.addEventListener('dragenter',() => {
        // console.log('dragenterイベント');
       // });
        
       // box.addEventListener('dragover',() => {
        // console.log('dragoverイベント');
        //});
        
        // box.addEventListener('dragleave',() => {
        // console.log('dragleaveイベント');
        //});
        
        //const logElement = document.querySelector('#log');
        //logElement.innerHTML = 'こんにちは';
        
        //foo要素
        //const element = document.getElementById('foo');
        
        //各.box要素に対してループ
        //document.querySelectorAll('.box').forEach((targetBox) => {
         //.box要素をクリックしたときの処理
         //targetBox.addEventListener('click',() => {
          //クリックされた.box要素のテキストを表示
         // alert(`${targetBox.textContent}がクリックされました`);
         //});
       // });
       
       //const themeChangeButton = 
       //document.querySelector('.theme-change-button');
       //テーマ変更ボタンをクリックしたときの処理
       //themeChangeButton.addEventListener('click', () => {
        //body要素のクラスのtheme-darkを切り替える
        //document.body.classList.toggle('theme-dark');
       //});
       
       //const container = document.querySelector('.container');
       //const myBox = document.querySelector('#myBox');
       
       //3秒後に#mybox要素を.container要素の末尾に追加する
       //setTimeout(() => {
       //container.appendChild(myBox);
       //},3000);
       
       //const container = document.querySelector('.container');
       //挿入する.new-box要素
       //const newBox = `<div class="new-box box">.new-box要素</div>`;
       
      // setTimeout(() => {
        //container要素内先頭に.new-box要素を追加する
       // container.insertAdjacentHTML('afterbegin',newBox);
        //.container要素の直後に.new-box要素を追加する
       // container.insertAdjacentHTML('afterend',newBox);
      // },3000);
      
      //3秒後に処理を行う
      //setTimeout(() => {
       //const parentElement = document.querySelector('#parent');
       //const childElenment = document.querySelector('#child');
       //#child要素を取り除く
       //parentElement.removeChild(childElenment);
       //child要素を取り除く
       //childElenment.remove();
     // },3000);
     
     //setTimeout(() => {
      //#myBox要素を子ノードも含めて複製
     // const clonedBox = document.querySelector('#myBox').cloneNode(true);
     // document.querySelector('.container').appendChild(clonedBox);
    // },3000);
    
    //setTimeout(() => {
     //コンテナ
     //const container = document.querySelector('.container');
     //旧ボックス要素
     //const oldBox = document.querySelector('.old-box');
     //新ボックス要素。div要素を作り「新ボックス」というテキストノードを追加する
    // const newBox = document.createElement('div');
    // newBox.textContent = '新ボックス';
     
     //new-box,boxというcssクラスを追加
     //newBox.classList.add('new-box','box');
     //新旧ボックスを入れ替える
    // container.replaceChild(newBox,oldBox);
  //  },3000);

 //setTimeout(() => {
     //旧ボックス要素
     //const oldBox = document.querySelector('.old-box');
     //新ボックス要素。div要素を作り「新ボックス」というテキストノードを追加する
    // const newBox = document.createElement('div');
     //newBox.textContent = '新ボックス';
     
     //new-box,boxというcssクラスを追加
    // newBox.classList.add('new-box','box');
     //新旧ボックスの入れ替え
    // oldBox.replaceWith(newBox);
   // },3000);
   
   //const weatherInformation =
   //document.querySelector('#weather-information');
   //以下の文字列を出力
   //曇り（２３ど）
   //console.log(weatherInformation.textContent);
   
   const weatherElement = document.querySelector('#weather');
   //3秒間にweatherの中身を書き換える
   setTimeout(() => {
    weatherElement.textContent = '気温24°の予想です'
   },3000);


