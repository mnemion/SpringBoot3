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

// 선택된 태그에 효과 부여
$(document).ready(function() {	 
	 $('.tab_list ul li').each(function(){
		if($(this).hasClass('on')){
			$(this).attr('title', '선택됨');
			$(this).children('a').removeAttr('title');
		}else{
			$(this).removeAttr('title');
		}
	});
});

// 가이드 텍스트 붙이기 작업
$(function(){
	var gray_color = 'gray_color'
	$('.search_word>input').each(function(){
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
});

// 부동산 검색어 가이드 텍스트화
$(function(){
	var gray_color = 'gray_color'
	$('.search>input').each(function(){
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
});

// 롤오버 기본 코드 작성
jQuery(document).ready(function(){
	$('.rollover').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		var src_on = src_off.replace('_OFF','_ON');
		
		$('<img />').attr('src', src_on);
		
		a.bind('mouseenter focus click', function(){
			img.attr('src', src_on);
		});
		a.bind('mouseleave blur', function(){
			img.attr('src', src_off);
		});
		
	});
});

/* 전체메뉴 보기 */
$(function(){
	$('.total_btn a').on('click',function(){
		if ($('.total_menu').is(':visible')) {
			$('.total_menu').slideUp('fast');
		} else {
			$('.total_menu').slideDown('normal');
		}
		return false;
	});
	
	//다크 모드 보기
    $('#darkmode_btn').click(function() {
        $('body').toggleClass('dark-mode');
        if ($('body').hasClass('dark-mode')) {
            $('#darkmode_btn img').attr('src', 'images/01-OFF.png');
        } else {
            $('#darkmode_btn img').attr('src', 'images/01-ON.png');
        }
    });
	
// 상단으로 이동
	$("#totop_btn").on("click", function(e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: 0
		}, '500');
		return false;
    });

// SNS 배너 효과
	sns_f = $('.facebook');
	sns_f.each(function(){
		sns_f.bind('mouseenter focus', function(){
			sns_f.find('img').attr('src', 'images/sns_incon/icon_facebook_gray_hover_img.png');
		});
		sns_f.bind('mouseleave focus', function(){
			sns_f.find('img').attr('src', 'images/sns_incon/icon_facebook_gray.png');
		});
	});
	
	sns_i = $('.instagram');
	sns_i.each(function(){
		sns_i.bind('mouseenter focus', function(){
			sns_i.find('img').attr('src', 'images/sns_incon/icon_instagram_gray_hover_img.png');
		});
		sns_i.bind('mouseleave focus', function(){
			sns_i.find('img').attr('src', 'images/sns_incon/icon_instagram_gray.png');
		});
	});
	
	sns_pn = $('.post_naver');
	sns_pn.each(function(){
		sns_pn.bind('mouseenter focus', function(){
			sns_pn.find('img').attr('src', 'images/sns_incon/icon_post_naver_gray_hover_img.png');
		});
		sns_pn.bind('mouseleave focus', function(){
			sns_pn.find('img').attr('src', 'images/sns_incon/icon_post_naver_gray.png');
		});
	});
	
	sns_y = $('.youtube');
	sns_y.each(function(){
		sns_y.bind('mouseenter focus', function(){
			sns_y.find('img').attr('src', 'images/sns_incon/icon_youtube_gray_hover_img.png');
		});
		sns_y.bind('mouseleave focus', function(){
			sns_y.find('img').attr('src', 'images/sns_incon/icon_youtube_gray.png');
		});
	});
	
	sns_nt = $('.navertv');
	sns_nt.each(function(){
		sns_nt.bind('mouseenter focus', function(){
			sns_nt.find('img').attr('src', 'images/sns_incon/icon_navertv_gray_hover_img.png');
		});
		sns_nt.bind('mouseleave focus', function(){
			sns_nt.find('img').attr('src', 'images/sns_incon/icon_navertv_gray.png');
		});
	});
	
	
	
});