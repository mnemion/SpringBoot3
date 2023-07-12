jQuery(document).ready(function(){
    $.ajax({
        async : false,
        url:'/data.json',
        dataType:'json',
        success:function(json){
            json.forEach(function(line){
                // JSON 데이터 가져오기
                var text_category = line.category;
                function write(line){
                    var text_num = line.num;
                    var text_question = line.question;
                    var text_content = line.content;
                    var text_name = line.name;
                    var text_date = line.date;

                    var board = $('#board');
                        // 태그 생성 - 글 제목 부분
                    var write_line = $('<li class="write_li clear"></li>');
                    var board_title_line = $('<div class="board_title_line clear"></div>');
                    var board_num = $('<div class="board_num fl"></div>');
                    var board_category = $('<div class="board_category fl_right"><span class="title_category"></span></div>');
                    var category_title = board_category.find('.title_category');
                    var write_list_title = $('<a title="" href="#" class="write_list_title fl"></a>');
                    var write_list_right_box = $('<div class="write_list_right_box fl_right"></div>');
                    var write_list_author = $('<div class="write_list_author fl"></div>');
                    var board_date = $('<div class="board_date fl"></div>');
                        // 생성한 태그에 html, text 넣기 - 글 제목 부분
                    board_num.html(text_num);
                    category_title.html(text_category);
                    
                    write_list_title.html(text_question);
                    
                    write_list_author.html(text_name)
                    board_date.html(text_date)
                        // 생성한 태그 조립 - 글 제목 부분
                    board_title_line.append(board_num);
                    board_title_line.append(write_list_title);
                    write_list_right_box.append(write_list_author)
                    write_list_right_box.append(board_date)
                    board_title_line.append(write_list_right_box);
                    write_line.append(board_title_line);
                       // 태그 생성 - 글 내용 부분
                    var write_content = $('<div class="write_content"></div>');
                    var write_con_inner = $('<div class="write_con_inner"></div>');
                    var write_content_title = $('<div class="write_content_title"></div>');
                    write_content_title.append(board_category);
                    var write_content_text = $('<div class="write_content_text"></div>');
                       // 생성한 태그에 html, text 넣기 - 글 내용 부분
                    write_content_title.append(text_question);
                    write_content_text.html(text_content);
                       // 생성한 태그 조립 - 글 내용 부분
                    write_con_inner.append(write_content_title);
                    write_con_inner.append(write_content_text);
                    write_content.append(write_con_inner);
                    write_line.append(write_content);
                       // 보드에 추가
                    board.append(write_line); 
                };
                // 페이지 처음 시작 때 보드에 추가 (전체글)
                write(line);
            });
        }
    });


	/* a 링크 hover 할 때 나오는 title 글자를 게시판 글 열고 닫을 때 바꾸기*/
	var title_tool_tip = $('.title_tool_tip');
	
	function update_title_position(x,y){
		title_tool_tip.css({left: x+20, top: y+30});
	};
	
	function show_title(){
		title_tool_tip.stop().css('opacity',0).show().animate({opacity:1},300);
	};
	function hide_title(){
		title_tool_tip.stop().animate({opacity:0},300, function(){title_tool_tip.hide();});
	};
	
	function change_text(open_close_text){
		title_tool_tip.text(open_close_text);
		show_title();
	};


	/* 글 열고 닫기 */
	var class_closed = 'closed';
	$('.write_li').each(function(){
		var line = $(this);
		var all_title = line.find('.write_list_title');
		
		close_all();
		
		function close_all(){
 			$('.write_content').css('display','none');
		};
		function close_slide(content){
			content.stop().slideUp(220);
		};
		function open_con(content, content_text){
			content.css('display','block');
			var content_text_width = content_text.css('width');
			var content_text_height = content_text.css('height');
			content_text.css('width','500px');
			content_text.css('height','0px');
			content_text.stop(false,false).animate({'width':'0', 'height':content_text_height},200,function(){
				content_text.stop(false,false).animate({width:content_text_width},300)
			});
		};

		// hover 할 때 title attribute 글자 바꾸기
		all_title.mouseenter(function(){
			var title = $(this);
			var this_line = title.parent().parent();
			var content = this_line.find('.write_content');
			var content_display = content.css('display');
			title.mousemove(function(e){
				update_title_position(e.pageX,e.pageY);	
			});
			if(content_display == 'block'){
				open_close_text = "닫기"
				change_text(open_close_text);
			} else {
				open_close_text = "열기"
				change_text(open_close_text);
			};
		});
		all_title.mouseleave(function(){
			hide_title();
		});
				
			// 글 제목을 click 할 때
		all_title.click(function(e){
			e.preventDefault();
			var title = $(this);
			var this_line = title.parent().parent();
			var content = this_line.find('.write_content');
			var content_text = this_line.find('.write_con_inner');
			var content_display = content.css('display');
			open_close_text = "닫기"
			change_text(open_close_text);
			if(content_display == 'block'){
				close_slide(content);
				open_close_text = "열기"
				change_text(open_close_text);
				return;
			};
			close_all();
			open_con(content, content_text);
		});
		
			// 열린 글 내용을 클릭할 때
		var all_content = $('.write_content');
		all_content.click(function(e){
			e.preventDefault
			var target = $(this);
			close_slide(target);
		});

			// 열린 글 내용을 hover 할 때 title 애니메이션
		all_content.hover(
			function(){
				show_title();
				all_content.mousemove(function(e){
					update_title_position(e.pageX,e.pageY);
				});
				change_text('닫기');
			},
			function(){
				hide_title();
			}
		);
	});	
});