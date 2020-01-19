/*참여하기 버튼*/
function setMainBtn(){
	$(".main-btn").click(function(){
	 	$(".send-layer").show();
	 	 setBounceEffect($('.door-top'), $(".door-bottom"));
	 })
}
/*송금하기 레이어 닫기*/
function setCloseLayer(){
	$(".close-btn").click(function(){
	 	$(".send-layer").hide();
	 	$('.door-top').css("top","-100px")
	 	$('.door-top').css("bottom","-100px")
	 })
}	 	 
/*레이어 바운스 효과*/
 function setBounceEffect(tp,bt) {
  var interval = 100;
  var distance = 3;
  var times = 2;
  var damping = 0.3;

    for (var i = 0; i < (times + 1); i++) {
      var amt = Math.pow(-1, i) * distance / (i * damping);
      $(tp).animate({top: amt}, 100);
      $(tp).animate({top:0}, interval);
      $(bt).animate({bottom: amt}, 100);
      $(bt).animate({ bottom: 0}, interval);
  }
}
/*로딩시*/
$(window).load(function(){
    $(".lorder-warp").fadeOut();
    dropCoin();
 
});
/*메인 코인 drop*/
function dropCoin(){
   var $liList = $(".move-coins li");
   $liList.each(function(index) {
    var idx = index + 1;
    var coin = ".coin0" + idx;
    $(coin).addClass("drop");
  });
}
/*인트로코인 애니메이션 감지*/
function whichTransitionEvent(){
 var ani = document.querySelector(".coin-L03");
ani.addEventListener("animationstart", function(e) {
}, false);
ani.addEventListener("animationend", function(e) {
    $(".drop-coins").hide();
    $(".m-wrap").css("overflow-y", "scroll");
    }, false);
}
/*스크롤시 이벤트*/   
function scrollEvent(){
  $(".m-wrap").scroll(function() {
  var scroll = $(this).scrollTop();
    if (scroll >= 100) {
      $(".neon-border").addClass("blink");
    } else {
      //$(".neon-border").removeClass("blink");
    }
      var pos = 10-scroll;
      $(".main-btn").css("bottom",pos);
  });
}

$(function(){
	setMainBtn();
	setCloseLayer();
  scrollEvent();
  whichTransitionEvent();

});
