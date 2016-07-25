    $(document).ready(function () {
    	//validate()方法 核心
        $("#mypass").validate({
        	//常用默认规则
            rules: {
                username: {   //元素的name值
                    required: true,
                    // minlength: 8,
                    // maxlength: 20,
                    // max:6,
                    //min:2,
                    // number:true,
                    // digits:true, //整数
                    // url:true,
                    rangelength:[8,20], //数组 包含两个数据
                    remote:"remote.json"  //使用ajax方法调用remote.json验证输入值
                },
                email:{
                  required: true,
                  email:true
                },
                password: {
                    required: true,
                    //minlength: 8,
                    //maxlength: 20,
                    rangelength:[8,20]
                },
                "confirm-password": {
                    equalTo: "#password"  //要比较的文本框
                }
            },
            //错误提示信息
            messages: {
		        username: {
                    required: '请输入用户名',
                    minlength: '用户名不能小于8个字符',
                    maxlength: '用户名不能超过20个字符',
                    max:'不能大于6~',
                    min:'不能小于2~',
                    number:'请输入数值(整数 小数 负数)',
                    digits:'请输入整数',
                    url:'请输入正确的url',
                    rangelength:'用户名需要在8到20个字符之间',
                    remote: '用户名不存在'
                },
                email:{
                    required:'请输入邮箱',
                    email:'请输入正确格式的邮箱'
                },
               	password: {
                    required: '请输入密码',
                    //minlength: '密码不能小于8个字符',
                    //maxlength: '密码不能超过20个字符',
					rangelength: '密码需要在8到20个字符之间'
                },
                "confirm-password": {
                    equalTo: "两次密码不一致"
                }
            }
        });
        var num = 0
        $("#myphone").validate({
        	//常用默认规则
            rules: {
                username: {   //元素的name值
                    required: true,
                    // minlength: 8,
                    // maxlength: 20,
                    // max:6,
                    //min:2,
                    // number:true,
                    // digits:true, //整数
                    // url:true,
                    rangelength:[8,20], //数组 包含两个数据
                    //remote:"remote.json"  //使用ajax方法调用remote.json验证输入值
                },
            	phone: {
           			required : true,
		            minlength : 11,
		            // 自定义方法：校验手机号在数据库中是否存在
		            // checkPhoneExist : true,
		            isPhone : true
		        }
            },
            //错误提示信息
            messages: {
		        username: {
                    required: '请输入用户名',
                    minlength: '用户名不能小于8个字符',
                    maxlength: '用户名不能超过20个字符',
                    max:'不能大于6~',
                    min:'不能小于2~',
                    number:'请输入数值(整数 小数 负数)',
                    digits:'请输入整数',
                    url:'请输入正确的url',
                    rangelength:'用户名需要在8到20个字符之间',
                    //remote: '用户名不存在'
                },
            	phone : {
		            required : "请输入手机号",
		            minlength : "确认手机不能小于11个字符",
		            isPhone : "请正确填写您的手机号码"
		        }
            }
        });

//验证用户名
        $(".next_step1_btn").click(function () {
        	var panduan = $("#myphone").valid() ? "填写正确" : "填写不正确"
        	if (panduan=="填写正确") {
        		$(".step1").hide().next().show()
        	}
        	//alert($("#myphone").valid() ? "填写正确" : "填写不正确")
        });
//验证密码
        $(".next_step2_btn").click(function () {
        	var panduan = $("#mypass").valid() ? "填写正确" : "填写不正确"
        	if (panduan=="填写正确") {
        		if ($("#checkbox").is(":checked")) {
        	//获取用户名存储cookie
			var name = $("#username").val()
			var user = $.cookie('user') ? $.cookie('user'):"{}";
			var nn = JSON.parse(user);
			nn={un:name}
			alert("注册成功")
			$.cookie("user", JSON.stringify(nn), {expires:7,path:'/'});
        			window.location.href="index.html" 			
        		}else{
        			$(".label_error").show()
        		}
        	}
        	//alert($("#myphone").valid() ? "填写正确" : "填写不正确")
        });
//检查是否勾选注册协议
        $("#checkbox").click(function(){
	        if ($("#checkbox").is(":checked")) {
	        	$(".label_error").hide()
	        }       	
        })
//跳转注册协议
        $(".agree_btn").click(function(){
        	$(".step2").hide().next().show()
        })
//注册协议返回密码页面
		$(".next_step3_btn").click(function(){
        	$(".step3").hide()
        	$(".step2").show()
        	$("#checkbox").prop("checked","checked")
		})
		
		
    });
