//Javascript Dyanamic class setting, based on:
//http://www.alistapart.com/articles/switchymclayout

window.onload = setScreenClass; 
window.onresize = setScreenClass;

//  Following transition classes will be declared:
//
//	classname		  screenwidth
//	------------------------------------------
//	pda_v			  240px			
//	pda_h			  320px			
//	ultralow		  320px -  640px	
//	screen_lo		  640px -  880px	
//	screen_med		  880px - 1050px	
//	screen_hi		 1050px - 1250px	
//  screen_higher    1250px - 1490px
//	screen_wide		 1490px - 1715px
//  screen_ultrawide > 1280px			

function setScreenClass(){
	var fmt = document.documentElement.clientWidth;
	var cls = (fmt<=240)?'pda_ver':(fmt>240&&fmt<=320)?'pda_hor':(fmt>320&&fmt<=640)?'screen_ultralow':(fmt>640&&fmt<=855)?'screen_low':(fmt>855&&fmt<=1000)?'screen_med':(fmt>1000&&fmt<=1235)?'screen_high':(fmt>1235&&fmt<=1460)?'screen_higher':(fmt>1460&&fmt<=1695)?'screen_wide':'screen_ultrawide';
	document.getElementById('count').innerHTML=fmt+'px -> '+cls;
	document.body.className=cls;
};
