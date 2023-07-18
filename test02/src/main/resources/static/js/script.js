// 팝업창을 사용한 제이쿼리 코드
jQuery(document).ready(function(){
	
	// 로컬 스토리지 확인하여 팝업창 보여주기
    if (localStorage.getItem('popup') != 'no') {
        $(".popup_bg").show();
        $(".popup").show();
    }

    // 팝업창 드래그 가능하게 만들기
    $(".popup").draggable();
    $(".popup").css('cursor','move');

    // 닫기 버튼 클릭시 팝업창 닫기
    $(".close_btn").on("click", function() {
        $(".popup_bg").hide();
        $(".popup").hide();

        // 로컬 스토리지 설정
        if ($(".jquery_cookie input").is(":checked")) {
            var date = new Date();
            date.setDate(date.getDate() + 1);
            localStorage.setItem('popup', 'no');
            localStorage.setItem('popupExpires', date);
        }
    });

    // 로컬 스토리지 만료일 확인하여 삭제
    var popupExpires = localStorage.getItem('popupExpires');
    if (popupExpires) {
        if (Date.now() > Date.parse(popupExpires)) {
            localStorage.removeItem('popup');
            localStorage.removeItem('popupExpires');
        }
    }
	
//상단 로그인 마우스 hover 시 효과
    $(".form_fo .menu a").hover(function(){
        $(this).css("background-color", "#008cdf");
        $(this).css("color", "#ffffff");
    }, function(){
        $(this).css("background-color", "#ffffff");
        $(this).css("color", "#000000");
    });
	
//상단 인증센터 마우스 hover 시 효과
	$(".form_fo2 .menu a").hover(function(){
        $(this).css("background-color", "#eaeaea");
        $(this).css("color", "#ffffff");
    }, function(){
        $(this).css("background-color", "#ffffff");
        $(this).css("color", "#000000");
    });
	
// 중앙 메뉴들 호버 효과 부여
	$(".color_no1 a").hover(function(){
        $(this).css("background-color", "#ffffff");
        $(this).css("color", "#008cdf");
    }, function(){
        $(this).css("background-color", "#008cdf");
        $(this).css("color", "#ffffff");
    });
	
	$(".color_no2 a").hover(function(){
        $(this).css("background-color", "#ffffff");
        $(this).css("color", "#3a8dfd");
    }, function(){
        $(this).css("background-color", "#3a8dfd");
        $(this).css("color", "#ffffff");
    });
	
	$(".Specify_Zoning_Q a").hover(function(){
        $(this).css("background-color", "#0082cd");
        $(this).css("color", "#000000");
    }, function(){
        $(this).css("background-color", "#ffffff");
        $(this).css("color", "#000000");
    });
	
// 금융상품 컨텐츠 더보기 버튼과 접기 버튼 영역 지정
	var more_btn = $('.main_serv_one_line_more');
	var btn_text = $('.more_text');
	var main = $('#main_cent_pd');
	more_btn.click(function(event){
		event.preventDefault();
		if(main.width()=='915'){
 			main.stop().animate({width:'1420px'},500);
			btn_text.text('접기');
			btn_text.removeClass('more_text')
			btn_text.addClass('back_text')
		} else if(main.width()=='1420'){
 			main.stop().animate({width:'915px'},500);
			btn_text.text('펼치기');
			btn_text.removeClass('back_text')
			btn_text.addClass('more_text')
		} else {
			return;
		};
	});

//금융상품 컨텐츠에 마우스 hover 시 효과
	var main_link = $('.main_serv_image_line>a');
	var timer;
	function move_icon (target){
		target.animate({'top':'-10px'},500)
		target.animate({'top':'0px'},500)
	};
	
	main_link.hover(
		function(){
			var hover_link = $(this);
			var hover_img = hover_link.find('.image_outer');
			move_icon(hover_img);
			timer=setInterval(function(){
				move_icon(hover_img);
			},1000);
		},
		function(){
			var hover_link = $(this);
			var hover_img = hover_link.find('.image_outer');
			hover_img.stop(true,false).animate({'top':'0px'},200);
			clearInterval(timer);
		}
	);
});

// 서비스 부문 컨텐츠 더보기 버튼과 접기 버튼 슬라이드쇼 효과 부과
jQuery(document).ready(function(){
	var currentIndex = 0;
	var items = $('.main_serv_image_line2');
	var itemAmt = items.length;
	var cycleItems = function(){
		var item = $('.main_serv_image_line2').eq(currentIndex);
		items.hide();
		item.css('display','block');
	};
	
	var autoSlide = function(){
		if (currentIndex === itemAmt - 1){
			currentIndex = 0;
		} else {
			currentIndex++;
		}
		cycleItems();
	};
	
	var slideShow = setInterval(autoSlide, 3000); // 슬라이드쇼 제어 변수
	
	var more_btn2 = $('.main_serv_one_line_more2');
	var btn_text2 = $('.more_text2');
	var main_product = $('#main_product_servuce_pd');
	more_btn2.click(function(event){
		event.preventDefault();
		if(main_product.width()=='480'){
			main_product.stop().animate({width:'1420px'},500);
			items.show(); // 모든 아이템 표시
			btn_text2.text('접기');
			btn_text2.removeClass('more_text2');
			btn_text2.addClass('back_text2');
			clearInterval(slideShow); // 슬라이드쇼 일시정지
		} else if(main_product.width()=='1420') {
			main_product.stop().animate({width:'480px'},500);
			cycleItems(); // 첫 아이템만 표시하고 나머지 숨김
			btn_text2.text('펼치기');
			btn_text2.removeClass('back_text2');
			btn_text2.addClass('more_text2');
			slideShow = setInterval(autoSlide, 3000); // 슬라이드쇼 다시 시작
		} else {
			return;
		};
	});
});

// 툴팁 제이쿼리 효과 주기
jQuery(document).ready(function(){
	var title_tool_tip = $('<div class="title_tool_tip"></div>').appendTo('body');

	function update_title_position(x,y){
		title_tool_tip.css({left: x+20, top: y+30});
	}

	function show_title(){
		title_tool_tip.stop().css('opacity',0).show().animate({opacity:1},300);
	};
	function hide_title(){
		title_tool_tip.hide(); 
	};
	
	$('[title]').each(function(){
		var anchor = $(this);
		var title_text = anchor.attr('title');
		anchor.attr('title','');
		anchor.hover(
			function(){
				title_tool_tip.text(title_text);
				show_title();
			anchor.mousemove(function(event){
				update_title_position(event.pageX,event.pageY);
			});	
			},
			function(){
				hide_title();
			}
		);
	});
});

// 메인 헤더 부분 효과 주기
jQuery(document).ready(function(){
$('.main_slide_img').width();
		
	var main_slide_img = $('.slider_text_imgage');
	var text_banner = $('.slider_text'); 
	var slide_control_btn = $('.control_button');
	var current = 0;
	var slide_timer;
	var slide_click_time = 'no'
	var prev_click_current;

 	slide_control_btn.click(function(){
		if(slide_click_time=='yes'){
			return;
		} else{
		slide_click_time='yes'
		setTimeout (function(){slide_click_time="no"},300);
		click_current = $(this).index();
		clearInterval(slide_timer);
		click_slide_total(click_current, prev_click_current);
		slide_interval();
		if(slide_play=='no'){
			slide_play='yes'
			slide_play_btn.css('background','url(images/main_header_btn/slides_btn_pause_new0919.png) no-repeat');
		};	
		}
	});
	
  	var slide_play = 'yes'
	var slide_play_btn = $('.main_header_img_play_btn')
	
	function slide_play_func(){
		if(slide_play == 'yes'){
			clearInterval(slide_timer);
			slide_play = 'no'
			slide_play_btn.css('background','url(images/main_header_btn/slides_btn_play_new0919.png) no-repeat');
		}else if (slide_play == 'no'){
			slide_interval();
			slide_play = 'yes'
			slide_play_btn.css('background','url(images/main_header_btn/slides_btn_pause_new0919.png) no-repeat');
		}		
	};
	
	slide_play_btn.click(function(){
		slide_play_func();
	});
	
 	$('.main_header_img_control_right_btn').click(function(){
		var btn_current = current-1
		if(btn_current<0){btn_current=slide_control_btn.size()-1;};
		slide_control_btn.eq(btn_current).trigger('click');
		if(slide_play=='no'){
			slide_play='yes'
			slide_play_btn.css('background','url(images/main_header_btn/slides_btn_pause_new0919.png) no-repeat');
		};	
	}); 
 	$('.main_header_img_control_left_btn').click(function(){
		var btn_current = current+1
		if(btn_current>=slide_control_btn.size()){btn_current=0;};
		slide_control_btn.eq(btn_current).trigger('click');
		if(slide_play=='no'){
			slide_play='yes'
			slide_play_btn.css('background','url(images/main_header_btn/slides_btn_pause_new0919.png) no-repeat');
		};	
	}); 
	
	$('.slide_text_anchor').hover(
		function(){
			clearInterval(slide_timer);
			slide_play = 'no';
			slide_play_btn.css('background','url(images/main_header_btn/slides_btn_play_new0919.png) no-repeat');
		},
		function(){
			slide_interval();
			slide_play = 'yes';
			slide_play_btn.css('background','url(images/main_header_btn/slides_btn_pause_new0919.png) no-repeat');
		}
	);
	
	function slide_total(){
		var prev_img = main_slide_img.eq(current);
		var slide_img_width = main_slide_img.width();
 		var prev_text_banner = text_banner.eq(current);
		move_banner(prev_img,'0%','-100%',0,162);
		setTimeout(function(){
			prev_img.css('z-index','2');
			prev_img.hide();	
			},500);
		fadein_banner(prev_text_banner,1,0,slide_img_width);
		slide_control_btn.eq(current).removeClass('active').stop().animate({'width':'10px'},300);
		current++;
		if(current >= main_slide_img.size()){current=0;};
		var next_img = main_slide_img.eq(current);
		var next_text_banner=text_banner.eq(current);
		next_img.show();
		move_banner(next_img,'100%','0%',-162,0);
		next_img.css('z-index','3');
		fadein_banner(next_text_banner,0,1,slide_img_width);
		slide_control_btn.eq(current).addClass('active').stop().animate({'width':'10px'},300);
	}

 	function click_slide_total(click_current, prev_click_current){
		if(prev_click_current){current=prev_click_current};
		if(current==click_current){return;}
		else {
		var prev_img = main_slide_img.eq(current);
		var slide_img_width = main_slide_img.width();
		var prev_text_banner = text_banner.eq(current);
		prev_img.show();
		move_banner(prev_img,'0%','-100%',0,162);
		setTimeout(function(){
			prev_img.css('z-index','2');
			prev_img.hide();
			},500);
		fadein_banner(prev_text_banner,1,0,slide_img_width);
		slide_control_btn.eq(current).removeClass('active').stop().animate({'width':'10px'},300);
		var next_img = main_slide_img.eq(click_current);
		var next_text_banner=text_banner.eq(click_current);
		next_img.show();
		move_banner(next_img,'100%','0%',-162,0);
		next_img.css('z-index','3');
		fadein_banner(next_text_banner,0,1,slide_img_width);
		slide_control_btn.eq(click_current).addClass('active').stop().animate({'width':'10px'},300);
		prev_click_current = click_current;
		current=click_current;
		}
	} 
	
	function slide_interval(){
		slide_timer = setInterval(function(){
				slide_total();
			},2000);		
	}
	slide_interval();

	function move_banner (tg,start,end,top_start,top_end){
 		tg.css({left:start, top:top_start}).stop().animate({left:end, top:top_end},500);
	};
	function fadein_banner (tg,op1,op2,img_width){		
		if(op1==1){
			tg.css({opacity:op1, left:0}).stop().animate({left:-img_width, opacity:op2},500,function(){
				tg.css('display','none');
			});
		} else if(op1==0){
			tg.css('display','block')
			tg.css({opacity:op1,left:img_width}).stop().animate({left:'0', opacity:op2},500);
		};
		
	};
});

/* 탭메뉴 하단 작은 광고 메뉴 2개 hover 슬라이드 업 다운 */
jQuery(document).ready(function(){
	$('.slide_outer_box').each(function(){
		var outer_box = $(this);
		outer_box.hover(
			function(){
				outer_box.find('a').stop(false,true).animate({'margin-top':'-204px'},500);
			},
			function(){
				outer_box.find('a').stop(false,false).animate({'margin-top':'0px'},500);
			}
		);
	});
// 날씨 정보 업데이트 코드
$.getJSON('https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=340bc1104ce25a5366261987de99f010&units=metric',
		function(data){
			var $minTemp=data.main.temp_min;
			var $maxTemp = data.main.temp_max;
			var $cTemp = data.main.temp;
			var $pressure = data.main.pressure;
			var $humidity = data.main.humidity;
			
			var $now = new Date(Date.now());
			var month = $now.getMonth()+1
			var $cDate = $now.getFullYear() + '년 ' + month + '월 '+$now.getDate()+'일 '+$now.getHours()+'시 '+ $now.getMinutes()+'분 ';
			var $wIcon = data.weather[0].icon;
						
			$('.cDate').append($cDate);
			$('.clowtemp').append($minTemp);
			$('.ctemp').append($cTemp);
			$('.chightemp').append($maxTemp);
			$('.pressure').append($pressure);
			$('.humidity').append($humidity);
			$('.cicon').append('<img src="http://openweathermap.org/img/wn/'+$wIcon+'.png"/>');
			
		});
	});

// 펀드 혜택 기간까지 남은 시간
	function unit(x){
		var m = x%10;
		return m
	}
	function tenth(y){
		var m = y/10%10;
		m = Math.floor(m);
		return m;
	}
	function hund(z){
		var m = z/100;
		m = Math.floor(m);
		return m;
	}
	
	function ddaycount(){
		img_array = [
			'images/event/num0.gif',
			'images/event/num1.gif',
			'images/event/num2.gif',
			'images/event/num3.gif',
			'images/event/num4.gif',
			'images/event/num5.gif',
			'images/event/num6.gif',
			'images/event/num7.gif',
			'images/event/num8.gif',
			'images/event/num9.gif'
		]
		doomsday = new Date('Nov 1, 2024 00:00:00');
		today = new Date();
		howfar = doomsday - today;
		if(howfar>0){
			setTimeout('ddaycount()',1000);
		}else{
			clearTimeout('ddaycount()')
			document.getElementById('countment').innerHTML="<p>펀드 이벤트가 끝났습니다</p>"
			return false;
		}
		
		days = Math.floor(howfar/(1000*60*60*24));
		hours = Math.floor(howfar/(1000*60*60));
		mins = Math.floor(howfar/(1000*60));
		secs = Math.floor(howfar/(1000));
		
		d = days;
		h = hours-days*24;
		m = mins-hours*60;
		s = secs-mins*60;
		
		if(d<10){
			d='00'+d
		}else if(d<100){
			d='0'+d
		}
		if(h<10){h='0'+h}
		if(m<10){m='0'+m}
		if(s<10){s='0'+s}
		
		document.getElementById('day100').setAttribute("src",img_array[hund(d)]);
		document.getElementById('day100').setAttribute("alt", "숫자 "+hund(d));
		document.getElementById('day10').setAttribute("src",img_array[tenth(d)]);
		document.getElementById('day10').setAttribute("alt", "숫자 "+tenth(d));
		document.getElementById('day1').setAttribute("src",img_array[unit(d)]);
		document.getElementById('day1').setAttribute("alt", "숫자 "+unit(d));
		document.getElementById('hour10').setAttribute("src",img_array[tenth(h)]);
		document.getElementById('hour10').setAttribute("alt", "숫자 "+tenth(h));
		document.getElementById('hour1').setAttribute("src",img_array[unit(h)]);
		document.getElementById('hour1').setAttribute("alt", "숫자 "+unit(h));
		document.getElementById('min10').setAttribute("src",img_array[tenth(m)]);
		document.getElementById('min10').setAttribute("alt", "숫자 "+tenth(m));
		document.getElementById('min1').setAttribute("src",img_array[unit(m)]);
		document.getElementById('min1').setAttribute("alt", "숫자 "+unit(m));
		document.getElementById('sec10').setAttribute("src",img_array[tenth(s)]);
		document.getElementById('sec10').setAttribute("alt", "숫자 "+tenth(s));
		document.getElementById('sec1').setAttribute("src",img_array[unit(s)]);
		document.getElementById('sec1').setAttribute("alt", "숫자 "+unit(s));
	}
	
// 로그인 부분 가이드 텍스트
$(function(){
	var gray_color = 'gray_color'
	$('#ol_before>form> fieldset > input').each(function(){
		var place_text = this.defaultValue;
		var all_input = $(this);
		all_input.focus(function(){
			if(all_input.val()===place_text){
				all_input.val('');
				all_input.removeClass(gray_color);
			};
		});
		all_input.blur(function(){
			if(all_input.val()===''){
				all_input.val(place_text);
				all_input.addClass(gray_color);
			};
		});
		if(all_input.val()===place_text){
			all_input.addClass(gray_color);
		};
	});

// 로그인 부분 호버 효과
	$(".login_anchor").hover(function(){
        $(this).css("background-color", "#ffffff");
        $(this).css("color", "#000000");
    }, function(){
        $(this).css("background-color", "#f0f1f3");
        $(this).css("color", "#000000");
    });
	
// 탭 컨텐츠를 이용한 펀드 소개
	var tab = $('.event_tab_box a');
	var tab_con = $('.event_cont');
	var last_tab;
	var last_con;
	tab.show();
	last_tab = tab.filter('.active_no');
	last_con = $(last_tab.attr('href'));
	tab_con.hide();
	last_con.show();

	tab.click(function(event){
		event.preventDefault();
		var current_tab = $(this);
		var current_con = $(current_tab.attr('href'));

		last_con.stop(false,true).slideUp(240,function(){
			last_tab.removeClass('active_no');
			current_tab.addClass('active_no');
			current_con.stop(true,true).slideDown(240);
			last_tab = current_tab;
			last_con = current_con;
		});
	});
	
	/* 하단 애니메이션 메뉴 */
	var box1 = $('.box_wrap > .box1');
	var box2 = $('.box_wrap > .box2');
	var box3 = $('.box_wrap > .box3');
	var box4 = $('.box_wrap > .box4');
	
	box1.hover(
		function(){
			box1.stop().animate({width:'1370px',left:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box2.stop().animate({width:'0px',left:'1420px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box3.stop().animate({width:'0px',right:'-360px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box4.stop().animate({width:'0px',right:'-360px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box1.find('h3').stop().animate({height:'70px','font-size':'25px','line-height':'70px','margin-bottom':'25px'},500);
			box1.find('.con_m').stop().animate({'margin-top':'50px'},500);
		},
		function(){
			box1.stop().animate({width:'320px',left:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box2.stop().animate({width:'320px',left:'353px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box3.stop().animate({width:'320px',right:'353px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box4.stop().animate({width:'320px',right:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box1.find('h3').stop().animate({height:'55px','font-size':'22px','line-height':'50px','margin-bottom':'15px'},500);
			box1.find('.con_m').stop().animate({'margin-top':'12px'},500);
		}
	);
	box2.hover(
		function(){
			box1.stop().animate({width:'0px',left:'-340px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box2.stop().animate({width:'1370px',left:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box3.stop().animate({width:'0px',right:'-360px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box4.stop().animate({width:'0px',right:'-360px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box2.find('h3').stop().animate({height:'70px','font-size':'25px','line-height':'70px','margin-bottom':'25px'},500);
			box2.find('.con_m').stop().animate({'margin-top':'50px'},500);
		},
		function(){
			box1.stop().animate({width:'320px',left:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box2.stop().animate({width:'320px',left:'353px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box3.stop().animate({width:'320px',right:'353px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box4.stop().animate({width:'320px',right:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box2.find('h3').stop().animate({height:'55px','font-size':'22px','line-height':'50px','margin-bottom':'15px'},500);
			box2.find('.con_m').stop().animate({'margin-top':'12px'},500);						
		}
	);
	box3.hover(
		function(){
			box1.stop().animate({width:'0px',left:'-340px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box2.stop().animate({width:'0px',left:'-340px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box3.stop().animate({width:'1370px',right:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box4.stop().animate({width:'0px',right:'-360px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box3.find('h3').stop().animate({height:'70px','font-size':'25px','line-height':'70px','margin-bottom':'25px'},500);
			box3.find('.con_m').stop().animate({'margin-top':'50px'},500);
		},
		function(){
			box1.stop().animate({width:'320px',left:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box2.stop().animate({width:'320px',left:'353px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box3.stop().animate({width:'320px',right:'353px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box4.stop().animate({width:'320px',right:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});			
			box3.find('h3').stop().animate({height:'55px','font-size':'22px','line-height':'50px','margin-bottom':'15px'},500);
			box3.find('.con_m').stop().animate({'margin-top':'12px'},500);						
		}
	);
	box4.hover(
		function(){
			box1.stop().animate({width:'0px',left:'-340px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box2.stop().animate({width:'0px',left:'-340px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box3.stop().animate({width:'0px',right:'1420px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box4.stop().animate({width:'1370px',right:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box4.find('h3').stop().animate({height:'70px','font-size':'25px','line-height':'70px','margin-bottom':'25px'},500);
			box4.find('.con_m').stop().animate({'margin-top':'50px'},500);
		},
		function(){
			box1.stop().animate({width:'320px',left:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box2.stop().animate({width:'320px',left:'353px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box3.stop().animate({width:'320px',right:'353px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box4.stop().animate({width:'320px',right:'0px'},{duration:500, queue:false, easing:'easeOutCubic'});
			box4.find('h3').stop().animate({height:'55px','font-size':'22px','line-height':'50px','margin-bottom':'15px'},500);
			box4.find('.con_m').stop().animate({'margin-top':'12px'},500);						
		}
	);
	
// 컨텐츠 부분 팝업
	$('.nw_news_list dt').click(function(){
		$('.modal').fadeIn();
	});
	$('.modal>.modal_up>.btn').click(function(){
		$('.modal').fadeOut();
	});
	
	$('.intro_event_list dt').click(function(){
		$('.modal').fadeIn();
	});
	$('.modal>.modal_up>.btn').click(function(){
		$('.modal').fadeOut();
	});

	
});