$(function(){
	//二级菜单显示
	$(".menu").mouseenter(function(){
		$(".menulist").show()
	})
	$(".menu").mouseleave(function(){
		$(".menulist").hide()
	})
	//自动生成列表
	var goodsul = $(".goodslist ul");
	var rongqi = $(".rongqi")
//	function list(){
//		$(".rongqi").append("<li class='prolist'><a href='#' class='a_img'></a><a href='#' class='a_title'></a><p class='price'></p></li>")
//	}
	
//	//上一页 下一页
//	$(".pageup").click(function(){
//		var x = $(this).index()
//		if (x==1) {
//			
//		}
//	})
//	
//	//点击页数触发引入
//	var z = 0
//	var y = 0
//	var pagenum = $(".digg a:not(.pageup)")
//	goods("page"+y)
//	pagenum.click(function(){
//		$(this).addClass("diggabg").siblings().removeClass("diggabg")
//		goodsul.empty()
//		y = ($(this).html()-1);
//		goods("page"+y)
//	})
	//图片调用
//	function goods(y){
//		$.get("../data/index.json", function(msg){
//			var msg = msg
//			var x = 0
//			msg = msg.goodslist[y]
//			for (var i in msg) {
//				list()
//				$(".goodslist").find(".prolist").eq(x).find(".a_img").html("<img src="+msg[i].img+"/>")
//				$(".goodslist").find(".prolist").eq(x).find(".a_title").html(msg[i].title)
//				$(".goodslist").find(".prolist").eq(x).find(".price").html(msg[i].price)
//				x++;
//			}
//		})
//		
//	}
	var mark;
		json(0,99999)
		$(".inner_b div").click(function(){
			$(this).siblings().not(".quanbu").hide()
			$(this).addClass("xuanzhong")
			mark = true
			num = $(this).index()
			switch (num){
				case 0:json(0,1500)
					break;
				case 1:json(1500,3200)
					break;
				case 2:json(3200,5200)
					break;
				case 3:json(5200,99999)
					break;
			}
		})
		//全部按钮
		$(".quanbu").click(function(){
			name= ""
			$(".inner_b div").removeClass("xuanzhong")
			$(this).siblings().show()
			if (mark) {
				json(0,99999)
			}
		})
		
		//搜索按钮
		var name= ""
		var aa=0
		$(".pro_search_btn").click(function(){
			name= $("#gjz").val()
			$(".inner_b div").removeClass("xuanzhong")
			$(".inner_b div").siblings().show()

				json(0,99999)

		})
		
		//输入框触发事件
		$("#gjz").keyup(function(e){
			var code = e.keyCode
			if (code==13) {
				name= $("#gjz").val()
				$(".inner_b div").removeClass("xuanzhong")
				$(".inner_b div").siblings().show()
				json(0,99999)
				
			}
		})
		
		//负责存储cookies
		var name;
		
		//统计json个数
		var pagenum = 0
		function json(a,b){
		$(".rongqi").empty()
		$(".goodslist ul").html("")
		$(".kong").html("")
		$.get("../data/index.json",function(msg){
			var meiyou = 0
			var num=0
			var x = 0
			var qian0=qian1=qian2=qian3=0;
			var msg = msg.chanpin
			for(var z=0;z<17;z++){
			for (var i in msg) {
				
					//筛选出每个产品的金额
					var qian = JSON.stringify(msg[i].price).replace(/[^1-9]/ig,"")
					//list()
					if (JSON.stringify(msg[i].title).indexOf(name)>=0) {
					
					//是否可以满足相对的条件
						if (qian>a&&qian<b) {
							if (qian>0&&qian<1500) {
									//当前的数量
								qian0++
								$(".rongqi").append("<li class='prolist'><a href='javascript:;' class='a_img'></a><a href='javascript:;' class='a_title'></a><p class='price'></p></li>")
								//把数据加入到li里
								$(".goodslist").find(".prolist").eq(x).find(".a_img").html("<img src="+msg[i].img+">")
								$(".goodslist").find(".prolist").eq(x).find(".a_title").html(msg[i].title)
								$(".goodslist").find(".prolist").eq(x).find(".price").html(msg[i].price)
								x++;
							//总商品数
							num++;
								}
								if (qian>1500&&qian<3200) {
									//当前的数量
									qian1++
								$(".rongqi").append("<li class='prolist'><a href='javascript:;' class='a_img'></a><a href='javascript:;' class='a_title'></a><p class='price'></p></li>")
								//把数据加入到li里
								$(".goodslist").find(".prolist").eq(x).find(".a_img").html("<img src="+msg[i].img+">")
								$(".goodslist").find(".prolist").eq(x).find(".a_title").html(msg[i].title)
								$(".goodslist").find(".prolist").eq(x).find(".price").html(msg[i].price)
								x++;
							//总商品数
							num++;
								}
								if (qian>3200&&qian<5200) {
									//当前的数量
									qian2++
								$(".rongqi").append("<li class='prolist'><a href='javascript:;' class='a_img'></a><a href='javascript:;' class='a_title'></a><p class='price'></p></li>")
								//把数据加入到li里
								$(".goodslist").find(".prolist").eq(x).find(".a_img").html("<img src="+msg[i].img+">")
								$(".goodslist").find(".prolist").eq(x).find(".a_title").html(msg[i].title)
								$(".goodslist").find(".prolist").eq(x).find(".price").html(msg[i].price)
								x++;
							//总商品数
							num++;
								}
								if (qian>5200&&qian<99999) {
									//当前的数量
									qian3++
								$(".rongqi").append("<li class='prolist'><a href='javascript:;' class='a_img'></a><a href='javascript:;' class='a_title'></a><p class='price'></p></li>")
								//把数据加入到li里
								$(".goodslist").find(".prolist").eq(x).find(".a_img").html("<img src="+msg[i].img+">")
								$(".goodslist").find(".prolist").eq(x).find(".a_title").html(msg[i].title)
								$(".goodslist").find(".prolist").eq(x).find(".price").html(msg[i].price)
								x++;
								//总商品数
								num++;
								}							
							}
					}else{
						meiyou++
						if (meiyou>=102) {
							$(".kong").html("十分抱歉，我们没有找到与“"+name+"”相关的商品")
						}
					}
					//JSON.stringify(msg[i].price).indexOf(name)
				
				}
			}

			//商品总数
			$(".filter_tit strong").html(num)
			//相对金额数量
			$(".inner_b span").eq(0).html(qian0)
			$(".inner_b span").eq(1).html(qian1)
			$(".inner_b span").eq(2).html(qian2)
			$(".inner_b span").eq(3).html(qian3)
			pagenum = Math.ceil($(".rongqi li").length/16)
			$("#page").pagination(pagenum, {
				num_edge_entries: 1, //边缘页数
				num_display_entries: 10, //主体页数
				callback: pageselectCallback,
				items_per_page: 1, //每页显示1项
				prev_text: "上一页",
				next_text: "下一页"
			});
		
				//获取点击的名称 用于cookies
				//dj()

		})
		}
				
//		function dj(){
//			//获取点击的名称 用于cookies
//							$(".prolist").click(function(){
//				var name = $(this).find("img").attr("src")
//				
//				//存储cookies
//				var chanpin = $.cookie('chanpin') ? $.cookie('chanpin'):"{}";
//				var nn = JSON.parse(chanpin);
//				nn={src:name}
//				$.cookie("chanpin", JSON.stringify(nn), {expires:7,path:'/'});
//				open("product.html","_blank");
//			})	
//
//		}
	
	pageselectCallback(0, 0)
	function pageselectCallback(page_index, jq){
		//dj()
		$(".goodslist ul").empty()
		//goods("page"+page_index)
		for (var i = page_index*16; i < page_index*16+16; i++) {
		$(".goodslist ul").append($(".rongqi li:eq("+i+")").clone());//装载对应分页的内容
			$(".goodslist ul").on("click",".prolist",function(){
				var name = $(this).find("img").attr("src")
				
				//存储cookies
				var chanpin = $.cookie('chanpin') ? $.cookie('chanpin'):"{}";
				var nn = JSON.parse(chanpin);
				nn={src:name}
				$.cookie("chanpin", JSON.stringify(nn), {expires:7,path:'/'});
				open("product.html","_blank");
			})
				//$(".prolist").eq(i).click(function(){
//				var name = $(this).find("img").attr("src")
//				
//				//存储cookies
//				var chanpin = $.cookie('chanpin') ? $.cookie('chanpin'):"{}";
//				var nn = JSON.parse(chanpin);
//				nn={src:name}
//				$.cookie("chanpin", JSON.stringify(nn), {expires:7,path:'/'});
//				open("product.html","_blank");
			//})	
}
		return false;
	}
	//搜索框内容
	var zhi = location.href
	var index = zhi.lastIndexOf("?")
	if (index!=-1) {
		var zhi = zhi.substr(index+1);
		$("#gjz").val(decodeURI(zhi))
		$(".pro_search_btn").trigger("click")
	}
	//响应式
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
