window.addEventListener('load',function(){
	function $(obj){
		return document.querySelectorAll(obj);
	};
	
	var topBar = document.getElementById('topBar');
	var oLi = topBar.getElementsByTagName('li');	
    var sideLi=document.getElementsByClassName('zhj_sideBar')[0];
    var Sli=sideLi.getElementsByTagName('li');

//********************************************
//点击第二个banner图的显示与隐藏
var oOne=document.getElementById('one_click');
var oBlockOne=document.getElementById('blockOne');
var oTwo=document.getElementById('two_click');
var oBtwo=document.getElementById('blockTwo');
var oImgOne=document.getElementById('oImgOne');
var oImgTwo=document.getElementById('oImgTwo');
var oBanerTwo=document.getElementById('news');
var chu=document.getElementsByClassName('zhj_ammonia')[0]
var banner2=document.getElementsByClassName('zhj_promidsinfoTwo')[0];
var banner1=document.getElementsByClassName('zhj_bannerTwo')[0];

var off = true;
var off1 = true;
oOne.onclick=function(){
	oBtwo.style.display='none';
	oImgTwo.style.transform='rotate(0deg)';
	banner2.style.display='none';
	oOne.style.color='white';
	oTwo.style.color='#CCCCCC';
	oBanerTwo.style.transition='0.6s';
	oBanerTwo.style.transform='translate(0px)';
	if(off){
	oBlockOne.style.display='block';
	oImgOne.style.transform='rotate(180deg)';
	off=false;
	}else{
	oBlockOne.style.display='none';
	oImgOne.style.transform='rotate(0)';
	off=true;
	}
	
}
oTwo.onclick=function(){
	oBlockOne.style.display='none';
	oImgOne.style.transform='rotate(0deg)';
	oTwo.style.color='white';
	oOne.style.color='#CCCCCC';	
	oBanerTwo.style.transition='0.6s';
    chu.style.display='block';
	banner1.style.transform='translate(-1364px)';
	if(off1){
	oBtwo.style.display='block';
	oImgTwo.style.transform='rotate(180deg)';
	off1=false;
	}else{
	oBtwo.style.display='none';
	oImgTwo.style.transform='rotate(0deg)';
	off1=true;
	}
	
}

//*******************************************
//点击nav时换颜色与背景
oLi[0].style.color='#ffffff';
oLi[0].style.backgroundColor='#13a79d';
	oLi[0].onclick=function(){
	  for(var i=0;i<oLi.length;i++){
				oLi[i].style.color='#13a79d';
				oLi[i].style.backgroundColor='white';
			};
			oLi[0].style.color='#ffffff';
			oLi[0].style.backgroundColor='#13a79d';
	}
	oLi[1].onclick=function(){
	  for(var i=0;i<oLi.length;i++){
				oLi[i].style.color='#13a79d';
				oLi[i].style.backgroundColor='white';
			};
			oLi[1].style.color='#ffffff';
			oLi[1].style.backgroundColor='#13a79d';
	}
	oLi[2].onclick=function(){
	  for(var i=0;i<oLi.length;i++){
				oLi[i].style.color='#13a79d';
				oLi[i].style.backgroundColor='white';
			};
			oLi[2].style.color='#ffffff';
			oLi[2].style.backgroundColor='#13a79d';		
	};
	oLi[3].onclick=function(){
	  for(var i=0;i<oLi.length;i++){
				oLi[i].style.color='#13a79d';
				oLi[i].style.backgroundColor='white';
			};
			oLi[3].style.color='#ffffff';
			oLi[3].style.backgroundColor='#13a79d';		
	};

//滑动事件
    var docum = document.getElementsByTagName('body')[0];
    var allLi=document.getElementsByClassName('zhj_sideBar')[0];
    var sideLi=allLi.getElementsByTagName('li');
//  小nav条
    var navOne=document.getElementsByClassName('zhj_who')[0];
    var navTwo=document.getElementsByClassName('zhj_twoNav')[0];
    var navThree=document.getElementsByClassName('zhj_threeNav')[0];
    var topUl=document.getElementById('topUl');
    var topLi=topUl.getElementsByTagName('li');

	setInterval(function(){
       if(docum.scrollTop <= 500){
       	   for(var i=0;i<sideLi.length;i++){
       	   	  sideLi[i].style.width='5px';
       	   	  sideLi[i].style.height='5px';
       	   	  sideLi[i].style.background='white';
       	   	  sideLi[i].style.position='absolute';
       	   	  sideLi[i].style.left='0';
       	   	  topLi[i].style.background='white';
       	   	  topLi[i].style.color='#13A79D';
       	   };
       	   sideLi[0].style.width='10px';
       	   sideLi[0].style.height='10px';
       	   sideLi[0].style.background='rgba(255,255,255,0)';
       	   sideLi[0].style.position='absolute';
       	   sideLi[0].style.left='-3px';
       	   sideLi[0].style.border='1px solid white';
       	   topLi[1].style.transition='0.5s';
       	   topLi[0].style.background='#13A79D';
       	   topLi[0].style.color='white';
       	   
//     	   小1nav出现
           if(docum.scrollTop <=200){          	
       	     navOne.style.display='block';
       	     navTwo.style.display='none';
       	     navThree.style.display='none';
           }else if(docum.scrollTop >=200){
           	 navOne.style.display='none';
       	     navTwo.style.display='none';
       	     navThree.style.display='none';
           };

     	   
       }else if(docum.scrollTop >= 500 && docum.scrollTop <=1100){
       	  for(var i=0;i<sideLi.length;i++){
       	   	  sideLi[i].style.width='5px';
       	   	  sideLi[i].style.height='5px';
       	   	  sideLi[i].style.background='white';
       	   	  sideLi[i].style.position='absolute';
       	   	  sideLi[i].style.left='0';
       	   	  topLi[i].style.background='white';
       	   	  topLi[i].style.color='#13A79D';
       	  };
       	   sideLi[1].style.width='10px';
       	   sideLi[1].style.height='10px';
       	   sideLi[1].style.background='rgba(255,255,255,0)';     	   
       	   sideLi[1].style.border='1px solid white'; 
       	   sideLi[1].style.position='absolute';
       	   sideLi[1].style.left='-3px';
       	   topLi[1].style.transition='0.5s';
       	   topLi[1].style.background='#13A79D';
       	   topLi[1].style.color='white';
//     	   小2nav出现
       	   if(docum.scrollTop <=700){          	
       	     navOne.style.display='none';
       	     navTwo.style.display='block';
       	     navThree.style.display='none';
           }else if(docum.scrollTop >=900){
           	 navOne.style.display='none';
       	     navTwo.style.display='none';
       	     navThree.style.display='none';
           };
       	   
       	   
       }else if(docum.scrollTop >= 1100 && docum.scrollTop <= 1600){
       	  for(var i=0;i<sideLi.length;i++){
       	   	  sideLi[i].style.width='5px';
       	   	  sideLi[i].style.height='5px';
       	   	  sideLi[i].style.background='white';
       	   	  sideLi[i].style.position='absolute';
       	   	  sideLi[i].style.left='0';
       	   	  topLi[i].style.background='white';
       	   	  topLi[i].style.color='#13A79D';
       	   }
       	   sideLi[2].style.width='10px';
       	   sideLi[2].style.height='10px';
       	   sideLi[2].style.background='rgba(255,255,255,0)';     	   
       	   sideLi[2].style.border='1px solid white'; 
       	   sideLi[2].style.position='absolute';
       	   sideLi[2].style.left='-3px'; 
       	   topLi[2].style.transition='0.5s';
       	   topLi[2].style.background='#13A79D';
       	   topLi[2].style.color='white';
//     	   小3nav出现
       	   if(docum.scrollTop >=1250 && docum.scrollTop <=1500){          	
       	     navOne.style.display='none';
       	     navTwo.style.display='none';
       	     navThree.style.display='block';
           }else{
           	 navOne.style.display='none';
       	     navTwo.style.display='none';
       	     navThree.style.display='none';
           };      	   
       }else if(docum.scrollTop >= 1600){
       	  for(var i=0;i<sideLi.length;i++){
       	   	  sideLi[i].style.width='5px';
       	   	  sideLi[i].style.height='5px';
       	   	  sideLi[i].style.background='white';
       	   	  sideLi[i].style.position='absolute';
       	   	  topLi[i].style.background='white';
       	   	  topLi[i].style.color='#13A79D';
       	  };
       	   sideLi[3].style.width='10px';
       	   sideLi[3].style.height='10px';
       	   sideLi[3].style.background='rgba(255,255,255,0)';     	   
       	   sideLi[3].style.position='absolute';
       	   sideLi[3].style.border='1px solid white'; 
       	   sideLi[3].style.position='absolute';
       	   sideLi[3].style.left='-3px';
       	   topLi[3].style.transition='0.5s';
       	   topLi[3].style.background='#13A79D';
       	   topLi[3].style.color='white';
       };  
    },0);

//第二个banner图第二个info下的	Gallery部分里的轮播
//var yidong=document.getElementsByClassName('zhj_wrapperGallery')[0];
//var btnLeft=document.getElementsByClassName('zhj_topLeft')[0];
//var btnRight=document.getElementsByClassName('zhj_topRight')[0];
//var wraLi=document.getElementsByClassName('zhj_wrapperGallery')[0];
//var allLi=wraLi.getElementsByTagName('li');
//var num=0;

//banner2中的轮播图向左滑与向右滑
//向右滑
//  btnRight.onclick=function(){
//  	num++;
//  	if(num==5){
//    	num=0
//    };
//  	  yidong.style.transition='1s';
//  	  yidong.style.position='absolute';
//  	  yidong.style.left=-num*1364+'px';
//
//  };
//向左滑
//  btnLeft.onclick=function(){
//  	  num--;
//  	  if(num==-1){
//    	num=4
//    };
//  	  yidong.style.transition='1s';
//  	  yidong.style.position='absolute';
//  	  yidong.style.left=-num*1364+'px';
//     
//  };
 

//banner3中的轮播图向左滑与向右滑
var leftT=document.getElementsByClassName('zhj_GalleryThreeLeft')[0];
var rightT=document.getElementsByClassName('zhj_GalleryThreeRight')[0];
var zonghua=document.getElementsByClassName('zhj_wrapperGalleryThree')[0];
var num1=0;
var timer=null;
//向右滑
    rightT.onclick=function(){
    	num1++;
    	if(num1==8){
      	num1=7;
      };
    	  zonghua.style.transition='1s';
    	  zonghua.style.position='absolute';
    	  zonghua.style.left=-num1*1364+'px';
    };
//向左滑
    leftT.onclick=function(){
    	  num1--;
    	  if(num1==-1){
      	num1=0;
      };
    	  zonghua.style.transition='1s';
    	  zonghua.style.position='absolute';
    	  zonghua.style.left=-num1*1364+'px';
    };	
},false);