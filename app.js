
//厳格モードにする
'use strict';

//ボタンの参照を取得
const switcher = document.querySelector('.btn');

//clickイベントのイベントハンドラーを追加(ハンドラー関数を定義)ライト・ダークの切り替え
//クリック時にライト スタイルではなくダーク スタイルを適用し、もう一度クリックするとダークではなくライト スタイルを適用
switcher.addEventListener('click',function(){    
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');    
    //HTMLのBodyのクラス名を取得
    const className = document.body.className;
    //クラス名がライトの場合ダーク表示、ダークの場合ライト表示
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
})

