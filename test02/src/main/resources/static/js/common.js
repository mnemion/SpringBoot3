//전체메뉴 보기
$(function(){
	$('.total_btn a').on('click',function(){
		if ($('.total_menu').is(':visible')) {
			$('.total_menu').slideUp('fast');
		} else {
			$('.total_menu').slideDown('normal');
		}
		return false;
	});

//상단 숨김 태그
	bb=true;
	$('.btn_popup').click(function(){
		if(bb){
			//들어가는 거 실행
			$(this).addClass('open');
			$(this).stop().animate({'margin-top':'30px'},100);
			$('.hidden_menu').stop().animate({'height':'0px'},500, function(){
				bb=false;
				$('.hidden_menu').html(''); // 내용 지우기
			});
		}else{ 
			$(this).removeClass('open');
			$(this).stop().animate({'margin-top':'0px'},100);
			$('.hidden_menu').html('<div class="util_menu"><dt class="hidden">상단 툴</dt><dd><ul id="zoom"><li><img src="images/util_zoom_1.gif" alt="화면크기" title="화면크기"/></li><li><a href="zoom_in"><img src="images/util_zoom_2.gif" alt="확대" title="확대"/></a></li><li><a href="zoom_return"><img src="images/util_zoom_3.gif" alt="원화면으로" title="원화면으로"/></a></li><li><a href="zoom_out"><img src="images/util_zoom_4.gif" alt="화면축소" title="화면축소"/></a></li></ul></dd><dd><a href="#" class="print_btn"><img src="images/util_print.gif" alt="프린터" title="화면프린터"/></a></dd><form action="#" method="get" name="sch_f" id="sch_f"><fieldset><legend>검색폼</legend><p><input type="text" name="keyword" id="keyword" title="검색어입력"/><input type="image" src="images/inner_search_icon.png" class="sch_btn" alt="검색" title="검색"/></p></fieldset></form></div>'); // 내용 추가
			$('.hidden_menu').stop().animate({'height':'40px'},500, function(){bb=true;});          
		}
	});



/* zoom 버튼 */
	var base = 100;
	var mybody = $('body');
	$('#zoom a').on('click',function(){
		var zNum = $('#zoom a').index(this);
		if(zNum==0){
			base+= 10;
		}else if(zNum==1){
			base=100;
		}else{
			base-=10;
		}
		mybody.css('overflow-x','auto')
			.css('transform-origin','50% 0%')
			.css('transform','scale('+base/100+')')
			.css('zoom',base+'%');
		return false;
	});
	
/* 인쇄버튼 */
	$('.print_btn').on('click',function(){
		$('body').addClass('print');
		window.print();
		return false;
	});
	
/* 검색창 가이드 텍스트화 */
	$('#keyword').on('focus',function(){
		$(this).css('background-position','0 -500px');
	}).on('blur',function(){
		if($(this).val()=='')$(this).css('background-position','0 0');
	});

// 날씨 정보에 마우스 올릴 시 호버
	$('#news_Content').each(function(){
		$(this).find('#main_news_Content_pd').hover(function(){
			$(this).addClass('newsBorder');
		},
		function(){
			$(this).removeClass('newsBorder');
		}
		)
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