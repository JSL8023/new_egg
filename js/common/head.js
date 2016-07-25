$(function(){	//头部导航事件
	
		//顶部右边窗口
		
	//判断是否登录
	var user = $.cookie("user")
	if (user) {
		user = JSON.parse(user).un
		$(".top_right_l").html("<b>"+user+"</b>&nbsp;<span class='welcome'>欢迎来新蛋购物！</span>")
		$(".clearpad .inner").html("<a class='tuichu' href='javascript:;'>退出</a>")
		$(".logintip").html("请添加收藏")
		$(".tuichu").click(function(){
			$.cookie("user", "", {expires:-1,path:'/'});
			$.cookie("cart", "", {expires:-1,path:'/'});
			location.reload()
		})
	} else{
		
	}
	
	//搜索
	$(".ssa").click(function(){
		
		var zhi = $(".intxt").val();
		open("list.html?"+zhi,"_self");
	})
	
	$(".intxt").keyup(function(e){
		var code = e.keyCode
		if (code==13) {
			var zhi = $(".intxt").val();
			open("list.html?"+zhi,"_self");			
		}
	})
		
	//计数器
		//移入
	$(".clearpad").mouseenter(function(){
			$(this).css({"background":"#fff"},{"z-index":"1"}).find(".inner").show()
	})
		//移出
	$(".clearpad").mouseleave(function(){
			$(this).css({"background":"none"}).find(".inner").hide()
	})
		//导航效果
//	$(".navnav li a").mouseover(function(){
//		$(this).fadeIn()
//	})
//	$(".navnav li").mouseout(function(){
//		$(this).removeClass("navbg")
//	})
		//导航右边购物车和收藏

		//移入
	$(".mya").mouseenter(function(){
			$(this).addClass("bgbr").find(".openrc").show();
			$(this).find(".nava").removeClass();
			$(this).find(".openr").find("a").find("i").addClass("navi")
	})
		//移出
	$(".mya").mouseleave(function(){
			$(this).removeClass("bgbr").find(".openrc").hide()
			$(this).find(".openr").find("a").addClass("nava")
			$(this).find(".openr").find("a").find("i").removeClass("navi")
	})
	
	//一级菜单
	
	
	
	
	
		//二级菜单事件
	var nav = $(".menunav")
	var navbg = $(".item dl dt .links")
	$(".navlist2").mouseover(function(){
		nav.css({"background":"#f7f7f7"})
		navbg.addClass("navbg")
		$(this).addClass("navlist2bg")
		$(this).find("dd").show()
	})
	$(".navlist2").mouseout(function(){
		nav.css({"background":"#fff"})
		navbg.removeClass("navbg")
		$(this).removeClass("navlist2bg")
		$(this).find("dd").hide()
	})
	
	//头部购物车
		var nn=0
		var mark = 0
		var qq = 0
		var cook = $.cookie("cart")
		if (cook) {
		$(".posia .inner").html("<p class='tr sum'>金额总计：<span class='price'>¥12876.00</span></p><div class='prolist'></div>")
		var mame = JSON.parse(cook)
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
			//点击跳转商品页
			$(".prolist").click(function(){
				var name = $(this).find("img").attr("src")
				
				//存储cookies
				var chanpin = $.cookie('chanpin') ? $.cookie('chanpin'):"{}";
				var nn = JSON.parse(chanpin);
				nn={src:name}
				$.cookie("chanpin", JSON.stringify(nn), {expires:7,path:'/'});
				open("product.html","_blank");
			})
		}
	
})