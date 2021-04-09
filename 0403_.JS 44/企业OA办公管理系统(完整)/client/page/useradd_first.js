let useraddModule = (function () {
	let userId = null;//存储的是当前编辑的用户的id
	let isEdit = false;//存储的是当前用户进来的方式
	// 请求和渲染下拉框列表
	let querySelectBox = (function () {
		let p1 = axios.get('/department/list');
		let p2 = axios.get('/job/list')
		return axios.all([p1, p2]).then((res) => {
			console.log(res);//p1 p2的响应体
			let [departList, jobList] = res;
			let { code, data } = departList;
			if (code == 0) {
				let str = '';
				data.forEach(item => {
					let { name, id } = item;
					str += `<option value="${id}">${name}</option>`
				});
				$('.userdepartment').html(str);
			};
			let { code: code1, data: data1 } = jobList;//{code:0,data:[]} 改名 为了防止和上边的code和data重名，在解构的时候重新进行命名
			if (code1 == 0) {
				let str = '';
				data1.forEach(item => {
					let { name, id } = item;
					str += `<option value="${id}">${name}</option>`
				});
				$('.userjob').html(str);
			}
		});
	})

	// 进行表单的校验
	let checkUserName = () => {
		let value = $(".username").val().trim();
		console.log(value);

		if (!value.replace(/ /, '')) {
			$('.spanusername').html("当前的用户名不能为空");
			$('.username').css('borderColor', 'red');
			return false;
		}
		$('.spanusername').html("");

		return true;

	}

	let checkEmail = () => {
		let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		let value = $(".useremail").val().trim();
		console.log(value);
		if (!value) {
			console.log(1);
			$(".spanuseremail").html("当前的邮箱不能为空");
			return false;
		}
		if (!reg.test(value)) {
			$(".spanuseremail").html("当前的邮箱格式不正确");
			return false;
		}
		$('.spanuseremail').html("");
		return true;
	}

	let checkPhone = () => {
		let value = $(".userphone").val().trim();
		let reg = /^1[3-8]\d{9}$/;
		if (!value) {
			$(".spanuserphone").html("手机号码不能为空");
			return false;
		}
		if (!reg.test(value)) {
			$(".spanuserphone").html("手机号码格式不正确");
			return false;
		}
		$(".spanuserphone").html('');
		return true;
	}

	let queryUserInfo = () => {
		// 用来请求用户详细信息的，并且渲染到页面
		axios.get('/user/info', {
			params: {
				userId
			}
		}).then(res => {
			let { code, data: {
				name,
				sex,
				email,
				phone,
				departmentId,
				jobId,
				desc
			} } = res;

			$(".username").val(name);

			if (sex == 1) {
				$("#man").prop('checked', true);
			}
			$(".useremail").val(email)
			$(".userphone").val(phone)
			$(".userdepartment").val(departmentId)
			$(".userjob").val(jobId);
			$(".userdesc").val(desc);
		})
	}

	$(".submit").click(function () {
		let res1 = checkEmail();
		let res2 = checkPhone();
		let res3 = checkUserName();
		if (!res1 || !res2 || !res3) {
			return
		}
		console.log("我要执行");
		let name = $(".username").val().trim();
		let man = $("#man").prop('checked');//男和女是相反的，所以咱们获取一个就行，如果当前man的prop的值是true，说明当前用户的选择是男，sex的值是1 否则是0 。
		// let woman = $("#woman").prop("checked");

		console.log(man, woman);
		let sex = man ? "1" : "0";
		let email = $(".useremail").val().trim();
		let phone = $(".userphone").val().trim();
		let departmentId = $(".userdepartment").val();
		let jobId = $(".userjob").val();
		let desc = $(".userdesc").val().trim();

		let url = 'user/add';
		let text = "新增";
		let params = {
			name,
			sex,
			email,
			phone,
			departmentId,
			jobId,
			desc
		};
		if (isEdit) {
			url = 'user/update';
			params.userId = userId;
			text = "编辑"
		}

		axios.post(url, params).then(res => {
			let { code } = res;
			if (code == 0) {
				alert(`恭喜${text}成功`, {
					handled: () => {
						location.href = "userlist.html"
					}
				})
			}
		})
	})

	return {
		/* init: function () {
			
		} 下面的与这个等价 语法糖
		*/
		init() {
			let params = location.href.queryURLParams();
			console.log(params);
			if ('id' in params) {
				// 如果当前条件成立，说明用户是从编辑哪里进来的
				userId = params.id;
				isEdit = true;
			}
			querySelectBox().then(() => {
				// 等到页面的两个下拉列表渲染完成之后再请求用户详细信息
				if (isEdit) {
					queryUserInfo();
				}
			})
			$(".username").blur(checkUserName);
			$(".useremail").blur(checkEmail);
			$(".userphone").blur(checkPhone);
		}
	}
})();
useraddModule.init();