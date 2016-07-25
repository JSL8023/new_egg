$(function(){
	//楼梯
				var isclass = false
				$(".louti li:not(.tt)").click(function(){
					isclass=true
					$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active")
				var tt=$(".main").children().not(".louti").not(".section1").eq($(this).index()).offset().top;
					$("html,body").stop().animate({scrollTop: tt},500,function(){
						isclass=false
					});
				})
				$(".tt").click(function(){
					isclass=true
					$("html,body").stop().animate({scrollTop:0},500,function(){
						$(".louti li").find("span").removeClass("active")
						isclass=false
					})
				})
				$(window).scroll(function(){
					if($(window).scrollTop()>500){
						$(".louti").fadeIn(200)
					}else{
						$(".louti").fadeOut(200)
					}
					if(!isclass){
						var tt=$(window).scrollTop()
						$(".main").children().not(".louti").not(".section1").each(function (){
							if (tt>=($(this).offset().top-$(this).outerHeight()/2)) {
								$(".louti li").eq($(this).index()-2).find("span").addClass("active").parent().siblings().find("span").removeClass("active")
							}
						})
					}
				})

	
	//第一部分事件
	//banner下边图片切换
	var abtn = 0;
	$(".abtn").click(function (){
		var btn = $(".abtn")
		var move = $(".s1_l_blb ul")
		if ($(this).index()==1) {
			abtn = 1
			move.animate({"left":0},500)
		}else{
			abtn = 0
			move.animate({"left":"-"+mover},500)
		}
	})
	setInterval(function(){
		if (abtn>1) {
			abtn=0
		}
		if (abtn==1) {
			$(".s1_l_blb ul").animate({"left":0},500)
		} else{
			$(".s1_l_blb ul").animate({"left":"-"+mover},500)
		}
		abtn++
	},3000)
	
	
	
	
	
	
	
	//json插入大轮播图图片

		$.get("../data/index.json", function(msg){
			var x=0
			var msg = msg.banner
			for (var i in msg) {
				$(".s1_l_timg").find("li").eq(x).find("a").html("<img src="+msg[i].img771+" srca="+msg[i].img531+" srcb="+msg[i].img771+"/>")
				x++;
			}
		})
	//json插入小轮播图图片

		$.get("../data/index.json", function(msg){
				var msg = msg.banner
			for (var z = 0; z < 4; z++) {
				var x=0
				for (var i in msg) {
					$(".ad_slider").eq(z).find("li").eq(x).find("a").html("<img src="+msg[i].img771+" srca="+msg[i].img531+" srcb="+msg[i].img771+"/>")
					x++;
				}
			}
		})
		
	//json插入方形轮播图图片1
		$.get("../data/index.json", function(msg){
			var x=0
			var msg = msg.fang
			for (var i in msg) {
				$(".s1_r_t").find("li").eq(x).find("a").html("<img src="+msg[i].img+"/>")
				x++;
			}
		})
	//json插入方形轮播图图片2
		$.get("../data/index.json", function(msg){
			var x=0
			var msg = msg.fang
			for (var i in msg) {
				$(".s4_r_b").find("li").eq(x).find("a").html("<img src="+msg[i].img+"/>")
				x++;
			}
		})
	//方形轮播1
		var ff=0
		fang(0)
		function fang(ff){
			$(".s1_r_t .nav a").eq(ff).addClass("new").siblings().removeClass();
			$(".s1_r_t ul").animate({"left":(-226*ff)},300)
		}
		setInterval(function(){
			ff++
			if (ff==5) {
				ff=0
			}
			fang(ff)
		},1600)

	//方形轮播2
		var jj=0
		fang2(0)
		function fang2(jj){
			$(".s4_r_b .nav a").eq(jj).addClass("new").siblings().removeClass();
			$(".s4_r_b ul").animate({"left":(-238*jj)},300)
		}
		setInterval(function(){
			jj++
			if (jj==5) {
				jj=0
			}
			fang2(jj)
		},1600)

	
	//手风琴
	var ss = true
	$(".hot_good_c1").mouseenter(function(){
		if (ss) {
			ss = false
			$(this).animate({"width":"672"},150,function(){
				ss=true
			}).siblings().removeAttr("style").removeClass("ww657 ww174").addClass("ww174")
			$(this).children(".hot_good_child1").show().parent().siblings().children(".hot_good_child1").hide()
			$(this).children(".hot_good_child2").hide().parent().siblings().children(".hot_good_child2").show()
		}
		//$(this).removeClass("ww174 ww657").addClass("ww657").siblings().removeClass("ww657 ww174").addClass("ww174")
//		$(this).css("left",function(){
//			ss+=$(this).prevAll().index()
//			var index = ss*174
//			return index
//		})
	})
	
	
	
	//首页产品图片引入
	var z=0;
	for (var i = 0; i<$(".tabc").length; i++) {
		$.get("../data/index.json", function(msg){
			var msg = msg.chanpin
			for (var i in msg) {
				$(".main").find("li.prolist").eq(z).find(".a_img").html("<img src="+msg[i].img+">")
				$(".main").find("li.prolist").eq(z).find(".a_title").html(msg[i].title)
				$(".main").find("li.prolist").eq(z).find(".price").html(msg[i].price)
				z++;
			}
		})
	}
	
	//第四部分事件
		//选项卡
	$(".s4_l_p .tab a").mouseover(function(){
		var index = $(this).index()
		$(this).addClass("hover").siblings().removeClass("hover")
		$(".s4_l_p .tabc").hide()
		$(".s4_l_p .tabc").eq(index).show();		
	})
	
	
	//第五部分事件
		//选项卡
	$(".s5_r .tab a").mouseover(function(){
		var index = $(this).index()
		$(this).addClass("new").siblings().removeClass("new")		
		$(this).parent().siblings(".tabc").eq(index).show().siblings(".tabc").hide()
	})

	
	
	
	//大轮播动画
	var lb=0
	$(".s1_l_timg .nnav a").mouseover(function(){
		var index = $(this).index()
//		$(this).addClass("abg").siblings().removeClass("abg")
		lb=index
	})
	lunbo(3)
	function lunbo(n){
		var li = $(".s1_l_timg li")
		var aa = $(".s1_l_timg .nnav a")
		aa.removeClass()
		aa.eq(n).addClass("abg")
		li.hide()
		li.eq(n).fadeIn(100).delay(1500).fadeOut(100)
	}
	setInterval(function(){
		var li = $(".s1_l_timg li")
		if (lb==li.length) {
			lb=0
		}
		lunbo(lb)
		lb++
	},1800)
	
	//小轮播动画
	var lb1=0
//	$(".ad_slider .nnav a").mouseover(function(){
//		var index = $(this).index()
////		$(this).addClass("abg").siblings().removeClass("abg")
//		lb1=index
//	})
	lunbo1(3)
	function lunbo1(n){
		for (var i = 0; i < 4; i++) {
			var li1 = $(".ad_slider").eq(i).find("li")
			var aa1 = $(".ad_slider").eq(i).find(".nnav a")
			aa1.removeClass()
			aa1.eq(n).addClass("abg")
			li1.hide()
			li1.eq(n).fadeIn(100).delay(1500).fadeOut(100)
		}
	}
	setInterval(function(){
		var li1 = $(".ad_slider").find("li")
		if (lb1==4) {
			lb1=0
		}
		lunbo1(lb1)
		lb1++
	},1800)
	
	
	//json引入内容中的产品信息
	for (var i = 0; i<$(".tabc").length; i++) {
	var x=0;
		$.get("../data/index.json", function(msg){
			var msg = msg.chanpin
			for (var i in msg) {
				$(".section5").find(".prolist").eq(x).find(".a_img").html("<img src="+msg[i].img+">")
				$(".section5").find(".prolist").eq(x).find(".a_title").html(msg[i].title)
				$(".section5").find(".prolist").eq(x).find(".price").html(msg[i].price)
				x++;
			}
			
			})
		
	}
		//获取点击的名称 用于cookies
			$(".prolist").click(function(){
				var name = $(this).find("img").attr("src")
				
				//存储cookies
				var chanpin = $.cookie('chanpin') ? $.cookie('chanpin'):"{}";
				var nn = JSON.parse(chanpin);
				nn={src:name}
				$.cookie("chanpin", JSON.stringify(nn), {expires:7,path:'/'});
				open("product.html","_blank");
			})
			
			
	//响应式
	var mover =558
//		$(window).width()<1200?=$("body").removeClass():$("body").addClass("xiangying")
		if ($(window).width()<1200) {
			
			$("body").removeClass();
			//banner图片遍历
			for (var i = 0; i < $(".s1_l_timg img").length; i++) {
				$(".s1_l_timg img").eq(i).attr("src",$(".s1_l_timg img").eq(i).attr("srca"))
			}
			//第一部分图片轮播尺寸
			mover=528
		}
	$(window).resize(function(){
		if ($(window).width()<1200) {
			$("body").removeClass();
			for (var i = 0; i < $(".s1_l_timg img").length; i++) {
				$(".s1_l_timg img").eq(i).attr("src",$(".s1_l_timg img").eq(i).attr("srca"))
			}
			mover=528
			
		}else{
			$("body").addClass("xiangying")
			for (var i = 0; i < $(".s1_l_timg img").length; i++) {
				$(".s1_l_timg img").eq(i).attr("src",$(".s1_l_timg img").eq(i).attr("srcb"))
			}
			mover=558
		}		
	})
	
	
	
	//引入html文件
	//$("#footer").load("common/footer.html")
	$.ajax({
		url:"common/footer.html",
		async:false,
		type:"get",
		dataType:"html",
		success:function(msg){
			$("#footer").html(msg)
		}
	})
})
