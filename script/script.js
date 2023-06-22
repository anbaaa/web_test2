// JavaScript Document

//메뉴
$(".navi li").mouseover(function( ){        
            $(".submenu").stop( ).slideDown( );    
        });

$(".navi li").mouseleave(function( ){
            $(".submenu").stop().slideUp( );
        });   
		
//슬라이딩 이미지
 var imgs=2;
  var now=0;

  start( );

  function start(){
  $(".imgslide>a").eq(0).siblings( ).animate({height:"-350px"});
  
  setInterval(function(){
  now = now==imgs?0:now+=1;
  $(".imgslide>a").eq(now-1).animate({height:"-350px"});   
  $(".imgslide>a").eq(now).animate({height:"350px"});},3000); 
  }

//탭메뉴
var tabBtn = $(".tab_btn>ul>li");    //각각의 버튼을 변수에 저장
var tabCont = $(".tab_cont>div");   //각각의 콘텐츠를 변수에 저장
tabCont.hide( ).eq(0).show();         //컨텐츠 내용 숨기기
tabBtn.click(function(e){            //버튼이 타겟(순서)을 변수에 저장
e.preventDefault();
var target = $(this);
var index = target.index();        //버튼의 순서를 변수에 저장
tabBtn.removeClass("active");     //버튼의 클래스를 삭제
target.addClass("active");        //타겟의 클래스를 추가
tabCont.css("display","none"); 
tabCont.eq(index).css("display","block");
 }); 

// 모달
 $(".cc").click(function( ) {
	 $(".modal").show( );
	 });
 $(".button button").click(function( ) {
	 $(".modal").hide( ); 
 	});	 
