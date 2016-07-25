$(function(){
	
	//一级菜单弹出
	$(".menu").mouseenter(function(){
		$(".menulist").show()
	})
	$(".menu").mouseleave(function(){
		$(".menulist").hide()
	})
	
	//tab悬浮
		var tab = $(".pro_tabs").offset().top;
	$(window).scroll(function(){
		var gdt=$(document).scrollTop();
		if (gdt>=tab) {
			$(".pro_tabs").addClass("xuanfu").find("a").addClass("ff")
		} if(gdt<tab){
			$(".pro_tabs").removeClass("xuanfu").find("a").removeClass("ff")	
		}
	})
	
	//左边产品
	$.get("../data/index.json",function(msg){
		var x=0
		var msg = msg.chanpin
		for (var i in msg) {
		$(".goods_bug_l").append("<div class='custom_doings_goods'><a href='javascript:;' class='a_img'></a><a href='javascript:;' class='a_title'></a><p class='price'></p></div>")
		$(".goods_bug_l").find(".custom_doings_goods").eq(x).find(".a_img").html("<img src="+msg[i].img+">")
		$(".goods_bug_l").find(".custom_doings_goods").eq(x).find(".a_title").html(msg[i].title)
		$(".goods_bug_l").find(".custom_doings_goods").eq(x).find(".price").html(msg[i].price)
		x++
		}					
		//获取点击的名称 用于cookies
			$(".custom_doings_goods").click(function(){
				var name = $(this).find("img").attr("src")
				
				//存储cookies
				var chanpin = $.cookie('chanpin') ? $.cookie('chanpin'):"{}";
				var nn = JSON.parse(chanpin);
				nn={src:name}
				$.cookie("chanpin", JSON.stringify(nn), {expires:7,path:'/'});
				open("product.html","_blank");
			})
	})	
	
	//悬浮导航菜单
	$(".pro_tabs_c li").click(function(){
		$(document).scrollTop(155)
		var index = $(this).index()
		$(this).addClass("cur").siblings().removeClass("cur")
		$(".tabl").eq(index).show().siblings().hide()

	})
	
	//数量加减
	$(".plus_minus").click(function(){
		var num = $(this).index()
		var nn = $(".num").val()
		if (num==0) {
			if (nn==1) {
				
			}
			nn--
			$(".num").val(nn)
		} else{
			nn++
			$(".num").val(nn)
		}
	})
		var offset = $(".mycart").offset();  //结束的地方的元素
//	$("#goods_cart").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
//		var addcar =  $(".jqzoom");
//		var img = $(".jqzoom").find('img').attr('src');
//		var flyer = $('<img class="u-flyer" src="'+img+'">');
//		flyer.fly({
//			start: {
//				left: $(".jqzoom").offset().left,
//				top: $(".jqzoom").offset().top
//			},
//			end: {
//				left: offset.left,
//				top: offset.top-$(window).scrollTop(),
//				width: 0,
//				height: 0
//			},
//			onEnd: function(){
//				$(".posia").slideDown(200).slideUp(200)
//			}
//		});
//	});
	
	//加入购物车
	$("#goods_cart").click(function(event){
		
		//判断是否登录
		var user = $.cookie("user")
		if (user) {
	//飞到购物车
		var addcar =  $(".jqzoom");
		var img = $(".jqzoom").find('img').attr('src');
		var flyer = $('<img class="u-flyer" src="'+img+'">');
		flyer.fly({
			start: {
				left: $(".jqzoom").offset().left,
				top: $(".jqzoom").offset().top
			},
			end: {
				left: offset.left,
				top: offset.top-$(window).scrollTop(),
				width: 0,
				height: 0
			},
			onEnd: function(){
				$(".posia").slideDown(200).slideUp(200)
			}
		});

	
	
		var title = $(".goods_title h1").html()
		var price = $(".goods_q").html()
		var img = $(".disno").html()
		var numb = $(".num").val()
		var cart = $.cookie('cart') ? $.cookie('cart'):"{}";
		var car = JSON.parse(cart);
		if (title in car) {
			car[title].num=parseInt(numb)+parseInt(car[title].num)
		} else{
			car[title] = {
				name:title,
				src:img,
				qian:price,
				num:numb
			}
		}
		$.cookie("cart", JSON.stringify(car), {expires:7,path:'/'});
		
		//头部购物车
		$(".posia .inner").html("<p class='tr sum'>金额总计：<span class='price'>¥12876.00</span></p><div class='prolist'></div>")
		
		var nn=0
		var mark = 0
		var qq = 0
		var mame = JSON.parse($.cookie("cart"))
		for (var i in mame) {
			var nn =nn+parseInt(mame[i].num)
			$(".posia .inner .prolist").append("<li class='first'><a class='a_img' href='javascript:;'></a><a class='a_title' href='javascript:;'></a><div class='kl'><span class='price'></span> x <span class='qty'></span></div></li>")
			$(".first").eq(mark).find(".a_img").html("<img src="+mame[i].src+">")
			$(".first").eq(mark).find(".a_title").html(mame[i].name)
			$(".first").eq(mark).find(".price").html(mame[i].qian)
			$(".first").eq(mark).find(".qty").html(mame[i].num)
			var num = (mame[i].qian).replace(/[^1-9]/ig,"")
			qq=qq+(parseInt(num)*parseInt(mame[i].num))
			mark++
		}
		$(".cartnumber").html(nn)
		$(".sum .price").html("¥"+qq+".00")
		//open("cart.html","_blank")
		
			
		}else{
			var sf = confirm("是否登录？")
			if (sf) {
				open("login.html")
			} else{
				
			}
		}
	})
	
	//立即购买
	$("#goods_buy").click(function(){
		//判断是否登录
		var user = $.cookie("user")
		if (user) {
			var title = $(".goods_title h1").html()
			var price = $(".goods_q").html()
			var img = $(".disno").html()
			var numb = $(".num").val()
			var liji = $.cookie('liji') ? $.cookie('liji'):"{}";
			var mai = JSON.parse(liji);			
				mai = {
					name:title,
					src:img,
					qian:price,
					num:numb
				}
			$.cookie("liji", JSON.stringify(mai), {expires:7,path:'/'});
			open("cart.html","_blank");
		}
		
		else{
			var sf = confirm("是否登录？")
			if (sf) {
				open("login.html")
			} else{
				
			}
		}

	})
	
	//小鸡飞
	$(window).scroll(function(){
		if($(window).scrollTop()>300){
			$(".xiaoji").fadeIn(200)
			//$(".xiaoji").css({bottom:"52px"})
		}else{
			$(".xiaoji").fadeOut(200)
		}
	})
	
	$(".xiaoji").hover(
		function(){
			$(".xiaoji").find("img").attr("src","../img/bg/ToTop_Hover.gif")
		},
		function(){
			$(".xiaoji").find("img").attr("src","../img/bg/ToTop_Normal.gif")
		}
	)
	
	
	
	$(".xiaoji").click(function(){
		$(".xiaoji").find("img").attr("src","../img/bg/ToTop_Press.gif")
		$(".xiaoji").find("img").delay(300).attr("src","../img/bg/ToTop_BreakChicken.gif")
		$("html,body").stop().animate({scrollTop:0},600)
		$(".xiaoji").animate({bottom:750},600,function(){
			$(".xiaoji").hide().animate({bottom:52},10)
		})
	})
	//响应式
	var mover =558
//		$(window).width()<1200?=$("body").removeClass():$("body").addClass("xiangying")
		if ($(window).width()<1200) {
			
			$("body").removeClass();
		}
	$(window).resize(function(){
		if ($(window).width()<1200) {
			$("body").removeClass();
		}else{
			$("body").addClass("xiangying")
		}		
	})

})



