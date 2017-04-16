$(function(){ 
//变色的初始	
	$('#changeNav').css('display','block');
	$('.zhj_twoNav').css('display','none');
    $('.zhj_threeNav').css('display','none');
    $(".nav_pro").click(function(){ 
        $.scrollTo('#pro',1000);
//  点击滑动事件
    setInterval(function(){
        if($(document.body).scrollTop <= 200){
          $('#changeNav').css('display','block');
          $('.zhj_twoNav').css('display','none');
          $('.zhj_threeNav').css('display','none');
        }else if($(document.body).scrollTop >=200){
          $('#changeNav').css('display','none');
          $('.zhj_twoNav').css('display','none');
          $('.zhj_threeNav').css('display','none');        	
        }
    },0)
          $('#liOne').css('width','10px').css('height','10px').css('background','rgba(255,255,255,0)').css('border','1px solid white').css('position','absolute').css('left','-4px');
          $('#liTwo').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');
$('#liTree').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');
$('#liFour').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');  

    });
  
    $(".nav_news").click(function(){ 
        $.scrollTo('#news',1000);
//  点击滑动事件
    setInterval(function(){
        if($(document.body).scrollTop <= 700){
        $('#changeNav').css('display','none');
        $('.zhj_twoNav').css('display','block');
        $('.zhj_threeNav').css('display','none');
        }else if($(document.body).scrollTop >=900){
        $('#changeNav').css('display','none');
        $('.zhj_twoNav').css('display','none');
        $('.zhj_threeNav').css('display','none');        	
        }
    },0)

          $('#liTwo').css('width','10px').css('height','10px').css('background','rgba(255,255,255,0)').css('border','1px solid white').css('position','absolute').css('left','-4px');
        $('#liOne').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');        $('#liTree').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');      
        $('#liFour').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');        
    });         
    
    $(".nav_ser").click(function(){ 
        $.scrollTo('#ser',1000); 
//  点击滑动事件
    setInterval(function(){
        if($(document.body).scrollTop <= 1200){
        $('#changeNav').css('display','none');
        $('.zhj_twoNav').css('display','block');
        $('.zhj_threeNav').css('display','none');
        }else if($(document.body).scrollTop >=1500){
        $('#changeNav').css('display','none');
        $('.zhj_twoNav').css('display','none');
        $('.zhj_threeNav').css('display','none');        	
        }
    },0)
          $('#liTree').css('width','10px').css('height','10px').css('background','rgba(255,255,255,0)').css('border','1px solid white').css('position','absolute').css('left','-4px');
        $('#liOne').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');        $('#liTwo').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');      
        $('#liFour').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');           
    }); 
    
    $(".nav_con").click(function(){ 
        $.scrollTo('#con',1000); 
        $('#changeNav').css('display','none');
        $('.zhj_twoNav').css('display','none');
          $('.zhj_threeNav').css('display','none');
          $('#liFour').css('width','10px').css('height','10px').css('background','rgba(255,255,255,0)').css('border','1px solid white').css('position','absolute').css('left','-4px');
        $('#liOne').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');        $('#liTree').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0');  
        $('#liTwo').css('width','5px').css('height','5px').css('background','white').css('position','absolute').css('left','0'); 
    });    
    

//点击变换who we are 与 why attr
// 初始
  $('#who').css('color','white');
  $('#why').css('color','#CCCCCC');
  
   $('#who').click(function(){
   	$('#who').css('color','white');
   	$('#why').css('color','#CCCCCC');
   	  $('#pro').css('transition','0.6s').css('transform','translate(0px)');
   },false);
  
     $('#why').click(function(){
     	$('#why').css('color','white');
     	$('#who').css('color','#CCCCCC');
   	  $('#pro').css('transition','0.6s').css('transform','translate(-1364px)');
   },false);
  
//点击第二个banner图里第一个info
$('#one_click').click(function(){
$('.zhj_promidsTwo').css('display','block'); 	 $('.zhj_promidsinfo').css('display','none');	
},false);

$('#info1').click(function(){
$('.zhj_promidsTwo').css('display','none'); 
$('.zhj_promidsinfo').css('display','block');
$('.zhj_promidsinfoTwo').css('display','none');
  },false);
  
//点击第二个banner图里第一个gallery  
 $('#info1').click(function(){
 	$('#info1').css('color','white');
 	$('#gallery1').css('color','#CCCCCC');
  	$('.zhj_promidsTwo').css('display','none');
  	$('.zhj_promidsinfo').css('display','block');
  	$('.zhj_info').css('transform','translateX(0px)');	
  },false);
  $('#gallery1').click(function(){
  	$('#info1').css('color','#CCCCCC');
 	$('#gallery1').css('color','white');
  	$('.zhj_promidsTwo').css('display','none');
  	$('.zhj_promidsinfo').css('display','block');
  	$('.zhj_info').css('transform','translateX(-1364px)').css('transition','0.6s');	
  },false);
  
//info里的悬浮翻转效果
$('#infoOne').hover(function(){
	$('#infoOne').css('transition','1s');
	 $('#infoOne').css('transform','rotateY(180deg)');
	 $('.zhj_cooling1').css('z-index','-999');
	 $('.zhj_coolingText1').css('z-index','9999');
},function(){
	$('#infoOne').css('transition','1s');
	 $('#infoOne').css('transform','rotateY(0deg)');
	 $('.zhj_cooling1').css('z-index','999');
	 $('.zhj_coolingText1').css('z-index','-999');
});

$('#infoTwo').hover(function(){
	$('#infoTwo').css('transition','1s');
	 $('#infoTwo').css('transform','rotateY(180deg)');
	 $('.zhj_cooling2').css('z-index','-999');
	 $('.zhj_coolingText2').css('z-index','9999');
},function(){
	$('#infoTwo').css('transition','1s');
	 $('#infoTwo').css('transform','rotateY(0deg)');
	 $('.zhj_cooling2').css('z-index','999');
	 $('.zhj_coolingText2').css('z-index','-999');
});
  
  $('#infoThree').hover(function(){
	$('#infoThree').css('transition','1s');
	 $('#infoThree').css('transform','rotateY(180deg)');
	 $('.zhj_cooling3').css('z-index','-999');
	 $('.zhj_coolingText3').css('z-index','9999');
},function(){
	$('#infoThree').css('transition','1s');
	 $('#infoThree').css('transform','rotateY(0deg)');
	 $('.zhj_cooling3').css('z-index','999');
	 $('.zhj_coolingText3').css('z-index','-999');
});
  
   $('#infoFour').hover(function(){
   $('#infoFour').css('transition','1s');
	 $('#infoFour').css('transform','rotateY(180deg)');
	 $('.zhj_cooling4').css('z-index','-999');
	 $('.zhj_coolingText4').css('z-index','9999');
},function(){
	$('#infoFour').css('transition','1s');
	 $('#infoFour').css('transform','rotateY(0deg)');
	 $('.zhj_cooling4').css('z-index','999');
	 $('.zhj_coolingText4').css('z-index','-999');
});
  
  
   $('#infoBottom1').hover(function(){
   $('#infoBottom1').css('transition','1s');
	 $('#infoBottom1').css('transform','rotateY(180deg)');
	 $('.zhj_cooling5').css('z-index','-999');
	 $('.zhj_coolingText5').css('z-index','9999');
},function(){
	$('#infoBottom1').css('transition','1s');
	 $('#infoBottom1').css('transform','rotateY(0deg)');
	 $('.zhj_cooling5').css('z-index','999');
	 $('.zhj_coolingText5').css('z-index','-999');
}); 
  
 $('#infoBottom2').hover(function(){
   $('#infoBottom2').css('transition','1s');
	 $('#infoBottom2').css('transform','rotateY(180deg)');
	 $('.zhj_cooling6').css('z-index','-999');
	 $('.zhj_coolingText6').css('z-index','9999');
},function(){
	$('#infoBottom2').css('transition','1s');
	 $('#infoBottom2').css('transform','rotateY(0deg)');
	 $('.zhj_cooling6').css('z-index','999');
	 $('.zhj_coolingText6').css('z-index','-999');
});
  
   $('#infoBottom3').hover(function(){
   $('#infoBottom3').css('transition','1s');
	 $('#infoBottom3').css('transform','rotateY(180deg)');
	 $('.zhj_cooling7').css('z-index','-999');
	 $('.zhj_coolingText7').css('z-index','9999');
},function(){
	$('#infoBottom3').css('transition','1s');
	 $('#infoBottom3').css('transform','rotateY(0deg)');
	 $('.zhj_cooling7').css('z-index','999');
	 $('.zhj_coolingText7').css('z-index','-999');
}); 
  
    $('#infoBottom4').hover(function(){
   $('#infoBottom4').css('transition','1s');
	 $('#infoBottom4').css('transform','rotateY(180deg)');
	 $('.zhj_cooling8').css('z-index','-999');
	 $('.zhj_coolingText8').css('z-index','9999');
},function(){
	$('#infoBottom4').css('transition','1s');
	 $('#infoBottom4').css('transform','rotateY(0deg)');
$('.zhj_cooling8').css('z-index','999');
	 $('.zhj_coolingText8').css('z-index','-999');
});  


//点击info里面的箭头 向右向左滑动
    $('#arrowLeft').click(function(){
    	$('#info1').css('color','#CCCCCC');
    	$('#gallery1').css('color','white');
    	$('.zhj_info').css('transition','1s');
    	$('.zhj_info').css('transform','translate(-1364px)');   	
    },false);

$('#arrowRight').click(function(){
	    $('#info1').css('color','white');
    	$('#gallery1').css('color','#CCCCCC');
    	$('.zhj_info').css('transition','1s');
    	$('.zhj_info').css('transform','translate(0px)');   	
    },false);

//第二个info里  里面有个搜索图标
$('.imgOne').css('transform','scale(1.5)').css('transition','0.6s');
$('.imgTwo').css('transform','scale(1.5)').css('transition','0.6s');
$('.imgThree').css('transform','scale(1.5)').css('transition','0.6s');
$('.imgFour').css('transform','scale(1.5)').css('transition','0.6s');
$('.imgFive').css('transform','scale(1.5)').css('transition','0.6s');
$('.shadeOne').hover(function(){
	$('.imgOne').css('transform','scale(1)');
	$('.zhj_shadowOne').css('z-index','999')
},function(){
	$('.imgOne').css('transform','scale(1.5)');
	$('.zhj_shadowOne').css('z-index','-999')
},false);

$('.shadeTwo').hover(function(){
	$('.imgTwo').css('transform','scale(1)');
	$('.zhj_shadowTwo').css('z-index','999')
},function(){
	$('.imgTwo').css('transform','scale(1.5)');
	$('.zhj_shadowTwo').css('z-index','-999')
},false);

$('.shadeThree').hover(function(){
	$('.imgThree').css('transform','scale(1)');
	$('.zhj_shadowThree').css('z-index','999')
},function(){
	$('.imgThree').css('transform','scale(1.5)');
	$('.zhj_shadowThree').css('z-index','-999')
},false);

$('.shadeFour').hover(function(){
	$('.imgFour').css('transform','scale(1)');
	$('.zhj_shadowFour').css('z-index','999')
},function(){
	$('.imgFour').css('transform','scale(1.5)');
	$('.zhj_shadowFour').css('z-index','-999')
},false);

$('.shadeFive').hover(function(){
	$('.imgFive').css('transform','scale(1)');
	$('.zhj_shadowFive').css('z-index','999')
},function(){
	$('.imgFive').css('transform','scale(1.5)');
	$('.zhj_shadowFive').css('z-index','-999')
},false);


//第三个banner图里的info  遮罩层
$('.picturesOne').css('transform','scale(1.5)').css('transition','0.6s');
$('.picturesTwo').css('transform','scale(1.5)').css('transition','0.6s');
$('.picturesThree').css('transform','scale(1.5)').css('transition','0.6s');
$('.picturesFour').css('transform','scale(1.5)').css('transition','0.6s');
$('.picturesFive').css('transform','scale(1.5)').css('transition','0.6s');
$('.picturesSix').css('transform','scale(1.5)').css('transition','0.6s');
$('.picturesSeven').css('transform','scale(1.5)').css('transition','0.6s');
$('.picturesEight').css('transform','scale(1.5)').css('transition','0.6s');
$('.maskOne').hover(function(){
	$('.picturesOne').css('transform','scale(1)');
	$('.zhj_shadowTwoOne').css('z-index','999')
},function(){
	$('.picturesOne').css('transform','scale(1.5)');
	$('.zhj_shadowTwoOne').css('z-index','-999')
},false);

$('.maskTwo').hover(function(){
	$('.picturesTwo').css('transform','scale(1)');
	$('.zhj_shadowTwoTwo').css('z-index','999')
},function(){
	$('.picturesTwo').css('transform','scale(1.5)');
	$('.zhj_shadowTwoTwo').css('z-index','-999')
},false);
$('.maskThree').hover(function(){
	$('.picturesThree').css('transform','scale(1)');
	$('.zhj_shadowTwoThree').css('z-index','999');
},function(){
	$('.picturesThree').css('transform','scale(1.5)');
	$('.zhj_shadowTwoThree').css('z-index','-999');
},false);

$('.maskFour').hover(function(){
	$('.picturesFour').css('transform','scale(1)');
	$('.zhj_shadowTwoFour').css('z-index','999')
},function(){
	$('.picturesFour').css('transform','scale(1.5)');
	$('.zhj_shadowTwoFour').css('z-index','-999');
},false);

$('.maskFive').hover(function(){
	$('.picturesFive').css('transform','scale(1)');
	$('.zhj_shadowTwoFive').css('z-index','999')
},function(){
	$('.picturesFive').css('transform','scale(1.5)');
	$('.zhj_shadowTwoFive').css('z-index','-999');
},false);

$('.maskSix').hover(function(){
	$('.picturesSix').css('transform','scale(1)');
	$('.zhj_shadowTwoSix').css('z-index','999')
},function(){
	$('.picturesSix').css('transform','scale(1.5)');
	$('.zhj_shadowTwoSix').css('z-index','-999');
},false);

$('.maskSeven').hover(function(){
	$('.picturesSeven').css('transform','scale(1)');
	$('.zhj_shadowTwoSeven').css('z-index','999')
},function(){
	$('.picturesSeven').css('transform','scale(1.5)');
	$('.zhj_shadowTwoSeven').css('z-index','-999');
},false);

$('.maskEight').hover(function(){
	$('.picturesEight').css('transform','scale(1)');
	$('.zhj_shadowTwoEight').css('z-index','999')
},function(){
	$('.picturesEight').css('transform','scale(1.5)');
	$('.zhj_shadowTwoEight').css('z-index','-999');
},false);

//第一个遮罩层
//第三个banner图里的info  遮罩层
$('.bImgOne').css('transform','scale(1.5)').css('transition','0.6s');
$('.bImgTwo').css('transform','scale(1.5)').css('transition','0.6s');
$('.bImgThree').css('transform','scale(1.5)').css('transition','0.6s');
$('.bImgFour').css('transform','scale(1.5)').css('transition','0.6s');
$('.bImgFive').css('transform','scale(1.5)').css('transition','0.6s');
$('.bImgSix').css('transform','scale(1.5)').css('transition','0.6s');
$('.bImgSeven').css('transform','scale(1.5)').css('transition','0.6s');
$('.bImgEight').css('transform','scale(1.5)').css('transition','0.6s');

$('.liOne').hover(function(){
	$('.bImgOne').css('transform','scale(1)');
	$('.zhj_zzOne').css('z-index','999')
},function(){
	$('.bImgOne').css('transform','scale(1.5)');
	$('.zhj_zzOne').css('z-index','-999')
},false);

$('.liTwo').hover(function(){
	$('.bImgTwo').css('transform','scale(1)');
	$('.zhj_zzTwo').css('z-index','999')
},function(){
	$('.bImgTwo').css('transform','scale(1.5)');
	$('.zhj_zzTwo').css('z-index','-999')
},false);

$('.liThree').hover(function(){
	$('.bImgThree').css('transform','scale(1)');
	$('.zhj_zzThree').css('z-index','999');
},function(){
	$('.bImgThree').css('transform','scale(1.5)');
	$('.zhj_zzThree').css('z-index','-999');
},false);

$('.liFour').hover(function(){
	$('.bImgFour').css('transform','scale(1)');
	$('.zhj_zzFour').css('z-index','999')
},function(){
	$('.bImgFour').css('transform','scale(1.5)');
	$('.zhj_zzFour').css('z-index','-999');
},false);

$('.liFive').hover(function(){
	$('.bImgFive').css('transform','scale(1)');
	$('.zhj_zzFive').css('z-index','999')
},function(){
	$('.bImgFive').css('transform','scale(1.5)');
	$('.zhj_zzFive').css('z-index','-999');
},false);

$('.liSeven').hover(function(){
	$('.bImgSeven').css('transform','scale(1)');
	$('.zhj_zzSeven').css('z-index','999')
},function(){
	$('.bImgSeven').css('transform','scale(1.5)');
	$('.zhj_zzSeven').css('z-index','-999');
},false);

$('.liSix').hover(function(){
	$('.bImgSix').css('transform','scale(1)');
	$('.zhj_zzSix').css('z-index','999')
},function(){
	$('.bImgSix').css('transform','scale(1.5)');
	$('.zhj_zzSix').css('z-index','-999');
},false);

$('.liEight').hover(function(){
	$('.bImgEight').css('transform','scale(1)');
	$('.zhj_zzEight').css('z-index','999')
},function(){
	$('.bImgEight').css('transform','scale(1.5)');
	$('.zhj_zzEight').css('z-index','-999');
},false);


//点击第二个banner图里的第二个info与Gallery
   $('#info2').click(function(){
   	$('#info2').css('color','white');
   	$('#gallery').css('color','#CCCCCC');
   	$('.zhj_promidsTwo').css('display','none');
   	$('.zhj_ammonia').css('display','none');
   	$('.zhj_promidsinfo').css('display','none')
   	$('.zhj_promidsinfoTwo').css('display','block');
   	$('.zhj_infoTwo').css('transform','translate(0px)').css('transition','0.2s');
   },false);

   $('#gallery').click(function(){
   	$('#gallery').css('color','white');
   	$('#info2').css('color','#CCCCCC');
   	$('.zhj_promidsinfo').css('display','none');
   	
   	$('.zhj_promidsTwo').css('display','none');
     $('.zhj_promidsinfoTwo').css('display','block')
   	$('.zhj_infoTwo').css('transform','translate(-1364px)').css('transition','0.2s');
   },false);

//第三个banner图里的info与gallery3
   $('#info3').click(function(){
   	$('#gallery3').css('color','#CCCCCC');
  	$('#info3').css('color','white');
   	$('.zhj_bannerThree').css('display','none');
   	$('.zhj_promidsinfoThree').css('display','block');
   $('.zhj_shareOur').css('transition','0.6s');
$('.zhj_shareOur').css('transform','translateX(0px)'); 	   	
   },false);


  $('#gallery3').click(function(){
  	$('#gallery3').css('color','white');
  	$('#info3').css('color','#CCCCCC');
  	$('.zhj_bannerThree').css('display','none')
  	$('.zhj_promidsinfoThree').css('display','block')
   	 $('.zhj_shareOur').css('transition','0.6s');
$('.zhj_shareOur').css('transform','translateX(-1364px)'); 	 	
   },false);


//banner2中的向左滑向右滑

//向右
 $(".zhj_topRight").click(function(){
 	$(".zhj_wrapperGallery ul").animate({marginLeft:"-1364px"},600,function(){
 		$(".zhj_wrapperGallery ul>li").eq(0).appendTo($(".zhj_wrapperGallery ul"));
 		$(".zhj_wrapperGallery ul").css('marginLeft','0px');
 	});
 });

//向左
     $(".zhj_topLeft").click(function(){
     	$(".zhj_wrapperGallery ul").css("marginLeft","-1364px");
     		$(".zhj_wrapperGallery ul>li").eq(4).prependTo($(".zhj_wrapperGallery ul"));
     		$(".zhj_wrapperGallery ul").animate({marginLeft:"0px"},600);

     });



//  点击第三个banner图 里的小图标回第三个banner主页面
     $(".maskOne").click(function(){
     	$(".zhj_bannerThree").css('display','block');
     	$(".zhj_promidsinfoThree").css('display','none');  	
     },false);

     $(".maskTwo").click(function(){
     	$(".zhj_bannerThree").css('display','block');
     	$(".zhj_promidsinfoThree").css('display','none');  	
     },false);


     $(".maskThree").click(function(){
     	$(".zhj_bannerThree").css('display','block');
     	$(".zhj_promidsinfoThree").css('display','none');  	
     },false);

     $(".maskFour").click(function(){
     	$(".zhj_bannerThree").css('display','block');
     	$(".zhj_promidsinfoThree").css('display','none');  	
     },false);






}); 