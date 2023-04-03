/**秒用エレメント*/
const secondElement = document.querySelector('.second');

//15秒後をゴールにする//
const goalTime = new Date().getTime() + 15 * 1000;

update();

//**毎フレーム実行される関数*/
function update(){
    //現在時刻//
    const currentTime = new Date().getTime();
    
    //目標時刻までの残り//
    const leftTime = goalTime - currentTime;
    
    if(leftTime < 0) {
      secondElement.innerText = 'time up!';
      return;
    }
    
    secondElement.innerText = (leftTime / 1000).toFixed(2);
    
    requestAnimationFrame(update);
}