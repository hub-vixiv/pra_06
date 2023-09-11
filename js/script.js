// js
$(function() {
  $('.open_btn').on('click',function(){// .btnをクリックすると〜
      $('.open_btn').toggleClass('active');// .btnにcloseというクラスが追加される
      $('.header_menu').toggleClass('active');// .btnにcloseというクラスが追加される
      $('.nav').toggleClass('active');// .btnにcloseというクラスが追加される
      // $('.nav').fadeToggle(500);// navの表示・非表示切り替わる
    });
  });

//jq 出てきたメニューをクリックした時
$('nav a').click(function(){
  $('nav').toggleClass('active');
  $('.header_menu').toggleClass('active');// .btnにcloseというクラスが追加される
  $('.open_btn').toggleClass('active')
});

 //ヘッダーを途中で表示
 $(function() {
  // 変数にクラスを入れる
  var btn = $('.header_top');
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 520) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });
  //スクロールしてトップへ戻る
  // btn.on('click',function () {
  //   $('body,html').animate({
  //     scrollTop: 0
  //   });
  // });
});


//スクロールでふわっと表示
function fade_up(){
    $('.fadeup').each(function(){ //fadeupというクラス名が
      var elemPos = $(this).offset().top-60;//要素より、60px上の位置
      var scroll = $(window).scrollTop(); //スクロールした距離
      var windowHeight = $(window).height();//ウィンドウの高さ
      if (scroll >= elemPos - windowHeight){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
}

//トップへ戻るボタンを途中で表示
$(function() {
  // 変数にクラスを入れる
  var btn = $('.to_pagetop');
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 720) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });
  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});

//背景画像を変更、戻し　jq
function change_bg(){
  $('.access').each(function(){ //fadeUpTriggerというクラス名が
    var access_position = $(this).offset().top;//要素より、50px上の
    var contact_position = $('.contact').offset().top;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= access_position - windowHeight){
      if(scroll < contact_position - windowHeight){
        $('body').css('background-color', 'rgba(0,0,0,0.4)');
      }else{
        $('body').css('background-color', 'black');
      }
    }else{
      $('body').css('background-color', 'black');
    }
  });
}

//サイドメニューの表示、非表示
function side_btn_show(){
  $('.gallery').each(function(){ //fadeUpTriggerというクラス名が
    var gallery_position = $(this).offset().top;//要素より、50px上の
    var access_position = $('.access').offset().top;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= gallery_position - windowHeight){
      if(scroll < access_position - windowHeight){
        $('.side_btn').css('right', '0px');
      }else{
        $('.side_btn').css('right', '-100%');
      }
    }else {
      $('.side_btn').css('right', '-100%');
    }
  });
}

// メインビジュアルの拡大・縮小
function mv_scale() {
  let scroll = $(window).scrollTop();
  // window.innerWidthで画面幅を取得
  // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
  if (window.innerWidth > 900) {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
    $('.main_visual img').css({
      'width': 100/3 + scroll/10  + '%'
    });
  // スマホ表示の場合の処理（画面幅が900px以下の場合）
  } else {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
    $('.main_visual img').css({
      'width': 100 - scroll/10  + '%'
    });
  }
}


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  fade_up();
  side_btn_show();/* アニメーション用の関数を呼ぶ*/
  change_bg();
  mv_scale();
});// ここまで画面をスクロールをしたら動かしたい場合の記述

  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    // $(window).on('load', function(){
    //   fadeAnime();/* アニメーション用の関数を呼ぶ*/
    // });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  

/**
 * スムーズスクロール
 */
$('a[href^="#"]').click(function(){
  // リンクを取得
  let href= $(this).attr("href");
  // ジャンプ先のid名をセット
  let target = $(href == "#" || href == "" ? 'html' : href);
  // トップからジャンプ先の要素までの距離を取得
  let position = target.offset().top-100;
  // animateでスムーススクロールを行う
  // 600はスクロール速度で単位はミリ秒
  $("html, body").animate({scrollTop:position}, 600, "swing");
  return false;
});
