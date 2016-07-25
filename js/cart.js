$(function(){
	//判断购买还是购物车
	if ($.cookie("liji")) {
		lj()
	} else{
		gwc()
	//重新获取cookie函数
		function cook(){
			$.cookie("cart", "", {expires:-1,path:'/'});
			for (var i =0 ;i<$(".zhuti").length;i++) {
				var title = $(".zhuti").eq(i).find(".a_title").html()
				var price = $(".zhuti").eq(i).find(".price").html()
				var img = $(".zhuti").eq(i).find(".a_img").find("img").attr("src")
				var num1 = $(".zhuti").eq(i).find(".textbox").val()
				var cart = $.cookie('cart') ? $.cookie('cart'):"{}";
				var car = JSON.parse(cart);
				car[title] = {
					name:title,
					src:img,
					qian:price,
					num:num1
				}
				$.cookie("cart", JSON.stringify(car), {expires:7,path:'/'});
			}
		}
	}
	//立即购买
	
	function lj(){
	var liji = $.cookie("liji")
	if (liji) {
		var jj = JSON.parse(liji)
			$("#rongqi").append($(".zhuti").eq(0).clone())
			$(".zhuti").eq(0).find($(".a_img")).html("<img src="+jj.src+">")
			$(".zhuti").eq(0).find($(".price")).html(jj.qian)
			$(".zhuti").eq(0).find($(".a_title")).html(jj.name)
			$(".zhuti").eq(0).find($(".textbox")).val(jj.num)
			//var zj = JSON.stringify(nn[z].qian).replace(/[^1-9]/ig,"")*nn[z].num
			//$(".zhuti").eq(x).find($(".qq")).html("¥"+zj+".00")
			$.cookie("liji", "", {expires:-1,path:'/'})
				//点击跳转商品页
				$(".a_title").click(function(){
					var name = $(this).parents(".zhuti").find("img").attr("src")
					
					//存储cookies
					var chanpin = $.cookie('chanpin') ? $.cookie('chanpin'):"{}";
					var nn = JSON.parse(chanpin);
					nn={src:name}
					$.cookie("chanpin", JSON.stringify(nn), {expires:7,path:'/'});
					open("product.html","_blank");
				})
				$(".zhuti").last().remove()
		//xj()
		}
	}
	//获取cookie
	//$(".zhuti").empty()
	function gwc(){
	var name = $.cookie("cart");
	if (name) {
		var nn = JSON.parse(name)
		var x = 0
		for (var z in nn) {
			$("#rongqi").append($(".zhuti").eq(0).clone())
			$(".zhuti").eq(x).find($(".a_img")).html("<img src="+nn[z].src+">")
			$(".zhuti").eq(x).find($(".price")).html(nn[z].qian)
			$(".zhuti").eq(x).find($(".a_title")).html(nn[z].name)
			$(".zhuti").eq(x).find($(".textbox")).val(nn[z].num)
			//var zj = JSON.stringify(nn[z].qian).replace(/[^1-9]/ig,"")*nn[z].num
			//$(".zhuti").eq(x).find($(".qq")).html("¥"+zj+".00")
			x++
				//点击跳转商品页
				$(".a_title").click(function(){
					var name = $(this).parents(".zhuti").find("img").attr("src")
					
					//存储cookies
					var chanpin = $.cookie('chanpin') ? $.cookie('chanpin'):"{}";
					var nn = JSON.parse(chanpin);
					nn={src:name}
					$.cookie("chanpin", JSON.stringify(nn), {expires:7,path:'/'});
					open("product.html","_blank");
				})
		}
		$(".zhuti").last().remove()
	}else{
		$(".content_t").html("<h1 class='hhh'>请添加商品到购物车</h1><br /><a class='aaa' href='index.html'>返回首页</a>")
	}
	}
	//小计
	xj()
	function xj(){
		var zj = 0
		$(".qqq").html("")
		for (var i = $(".zhuti").length-1; i >=0 ; i--) {
			var zqian = $(".zhuti").find(":checked").eq(i).parent().siblings().find($(".price")).html()
			var znum = $(".zhuti").find(":checked").eq(i).parent().siblings().find($(".textbox")).val()
			var qian = $(".zhuti").eq(i).find($(".price")).html()
			var num = $(".zhuti").eq(i).find($(".textbox")).val()
			var xj = qian.replace(/[^1-9]/ig,"")*num
			if (zqian!=undefined) {
			var zxj = zqian.replace(/[^1-9]/ig,"")*znum
			zj = zj+zxj
			}
			$(".zhuti").eq(i).find($(".qq")).html("¥"+xj+".00")
		}
			$(".qqq").html("¥"+zj+".00")
	}
	
	//总计
//	zj()
//	var zongji = 0
//	function zj(){
//		for (var i = 0; i < $(".zhuti").length; i++) {
//			
//		}
//	}
	jz()
	function jz(){
	//加数量
	$(".plusminus").click(function(){
		var value = $(this).parent().siblings().val()
		value++
		$(this).parent().siblings().val(value)
		xj()
		cook()
	})
	
	//减数量
	$(".plusminus1").click(function(){
		var value = $(this).parent().siblings().val()
		if (value==1) {
			
		}else{
		value--
		$(this).parent().siblings().val(value)
		xj()
		}
		cook()
	})
	}
	
	//删除
	$(".funcLink").click(function(){
		$.cookie("cart", "", {expires:-1,path:'/'});
		$(this).parents(".zhuti").remove()
		cook()
		xj()
		pd()
	})
	
	//判断购物车是否有东西
	function pd(){
		if ($(".zhuti").length<1) {
			$(".content_t").html("<h1 class='hhh'>请添加商品到购物车</h1><br /><a class='aaa' href='index.html'>返回首页</a>")
		} 		
	}
	
	//删除选中
	$(".qbcc").click(function(){
		for (var i = $(".zhuti").length-1;i>=0;i--) {
			if ($(".zhuti").eq(i).find($("input[type='checkbox']")).prop("checked")) {
				$(".zhuti").eq(i).remove()
			}
		}
		cook()
		xj()
		pd()
	})
	
	//重新获取cookie函数
//	function cook(){
//		$.cookie("cart", "", {expires:-1,path:'/'});
//		for (var i =0 ;i<$(".zhuti").length;i++) {
//			var title = $(".zhuti").eq(i).find(".a_title").html()
//			var price = $(".zhuti").eq(i).find(".price").html()
//			var img = $(".zhuti").eq(i).find(".a_img").find("img").attr("src")
//			var num1 = $(".zhuti").eq(i).find(".textbox").val()
//			var cart = $.cookie('cart') ? $.cookie('cart'):"{}";
//			var car = JSON.parse(cart);
//			car[title] = {
//				name:title,
//				src:img,
//				qian:price,
//				num:num1
//			}
//			$.cookie("cart", JSON.stringify(car), {expires:7,path:'/'});
//		}
//	}
	
	
	//全选
	$(".qx").click(function(){
		if ($(".qx").prop("checked")) {
			$(".zhuti").find($("input[type='checkbox']")).prop("checked",true)
		}else{
			$(".zhuti").find($("input[type='checkbox']")).prop("checked",false)
		}
		xj()
	})
	
	//点击取消多选
	var danxuan = $(".zhuti").find($("input[type='checkbox']"))
	danxuan.click(function(){
		if (!$(this).prop("checked")) {
			$(".qx").prop("checked",false)
		}
		if (danxuan.length==$(".zhuti").find(":checked").length) {
			$(".qx").prop("checked",true)
		}
		xj()
	})
	
		
		
	
})






