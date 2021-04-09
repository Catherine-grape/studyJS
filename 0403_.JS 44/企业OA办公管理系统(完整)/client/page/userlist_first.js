let userListModel = (function () {
    // 去校验当前页面的权限
    let power = localStorage.getItem('power');
    let check = () => {

        if (!power.includes("userhandle")) {
            // 如果当前if成立说明当前用户没有操作权限
            // $(".tableBox thead tr th").eq(0).empty();
            $(".tableBox thead tr th").eq(0).remove();
            console.log($(".tableBox thead tr th").eq(0));
            $(".deleteAll").remove();
            // $(".w12").remove();
            $(".tableBox thead tr th").last().remove();
        }
    };

    // 获取部门列表渲染到下拉框中  先通过下拉列表来筛选
    let querySelect = () => {
        return axios.get("/department/list").then(res => {
            let { code, data } = res;
            if (code == 0) {
                let str = `<option value="0">全部</option>`;
                /* str+=data.map return <option> 最后join('')   表单元素需要用.value的值来获取 1，2，3 有value就是value值 没有就是里面的字，但是后台需要value的值去校验*/
                data.forEach(item => {
                    let { name, id } = item;
                    str += `<option value="${id} ">${name}</option>`
                });
                $(".selectBox").html(str);
            }
        });
    };

    // 获取用户列表并渲染
    let queryUserList = () => {
        // 获取部门当前选中的部门id和模糊搜索的内容
        let departmentId = $(".selectBox").val();
        let search = $('.searchInp').val().trim();
        console.log(departmentId, search);
        return axios.get('/user/list', {
            params: {
                departmentId,
                search
            }
        }).then(res => {
            let { code, data } = res;
            if (code == 0) {
                let str = ``;
                data.forEach(item => {
                    let { id, name, sex, phone, email, desc, department, job } = item;
                    str += `
            <tr data-id='${id}' data-name='${name}'>
				${power.includes('userhandle') ? `<td class="w3"><input type="checkbox"></td>` : ''}
				<td class="w10">${name}</td>
				<td class="w5">${sex == 1 ? "男" : "女"}</td>
				<td class="w10">${department}</td>
				<td class="w10">${job}</td>
				<td class="w15">${email}</td>
				<td class="w15">${phone}</td>
                <td class="w20">${desc}</td>
                ${power.includes('userhandle') ? `<td class="w12">
					<a href="useradd.html?id=${id}">编辑</a>
					<a href="javascript:;">删除</a>
					<a href="javascript:;">重置密码</a>
				</td>`: ''}
				
			</tr>
                    `
                });
                $("tbody").html(str);
            } else {
                $("tbody").html('');
                alert("当前没有检索到您搜索的内容")
            }
        });
    }

    // 给下拉框和搜索框绑定对应的事件
    let searchBind = () => {
        /* onchange就是原生事件  当select框内容发生变化的时候onchange事件就会执行 input在失去焦点后触发  oninput当input内容发生变化就会执行  onblur失去光标后事件触发*/
        $(".selectBox").change(function () {
            console.log(this.value);
            queryUserList();
        });
        $(".searchInp").keyup(function (e) {
            console.log(e.keyCode);
            if (e.keyCode == 13) {
                queryUserList();
            }
        })
    }

    // 基于时间委托实现删除的功能
    let handle = () => {
        $('tbody').click(function (e) {
            console.log(e.target);
            let target = e.target;
            let tagName = target.tagName;
            let value = target.innerText;

            if (tagName == "A" && value == "删除") {
                let userId = $(target).parent().parent().attr('data-id');
                let name = $(target).parent().parent().attr('data-name');
                console.log(userId);
                alert(`您确定要删除${name}吗?`, {
                    title: '警告！警告！当前操作很重要！',
                    confirm: true,
                    handled: (res) => {
                        console.log(res);
                        if (res == 'CONFIRM') {

                            axios.get('/user/delete', {
                                params: {
                                    userId
                                }
                            }).then(res => {
                                let { code } = res;
                                if (code == 0) {
                                    alert('删除成功');
                                    queryUserList();
                                } else {
                                    alert('删除失败请重试')
                                }
                            })
                        }
                    }
                })
            }
            // 重置密码
            if (tagName == "A" && value == "重置密码") {
                let userId = $(target).parent().parent().attr('data-id');
                let name = $(target).parent().parent().attr('data-name');
                console.log(userId);
                alert(`您确定要重置${name}的密码吗?`, {
                    title: '警告！警告！当前操作很重要！',
                    confirm: true,
                    handled: (res) => {
                        console.log(res);
                        if (res == 'CONFIRM') {

                            axios.post('/user/resetpassword', {

                                userId

                            }).then(res => {
                                let { code } = res;
                                if (code == 0) {
                                    alert('重置成功');
                                    queryUserList();
                                } else {
                                    alert('重置失败请重试')
                                }
                            })
                        }
                    }
                })
            }
        })
    }
    // 实现全选和非全选
    let choose = () => {
        // 获取thead中 input type类型为checkbox的  find是在子中找 filter是同级过滤
        // 获取头部的全选框
        let $checkHead = $('thead').find('input[type="checkbox"]');
        let $checks = $('tbody').find('input[type="checkbox"]');//获取每一行的单选小框
        console.log($checkHead, $checks);
        // 由全选去控制下面的单选
        $checkHead.click(function () {
            // 非表单元素设置行间属性是attr 表单元素要用prop    checked天生自带的属性 选中是true 
            // 在用jq去设置或者获取当前表单元素的内置属性时使用的是prop方法
            // 先获取当前头部全选框的状态，然后把他的状态赋值给每一个小框
            // 在选框中checked属性是内置的，如果他是true，那当前的选框的状态就是选中的否则就是未选中
            let res = $checkHead.prop('checked');//获取当前选框的状态
            /* $checks.each((index, item) => {
                console.log(item); //看是否是原生的
                $(item).prop('checked', res);//上面全选是什么状态 下面就是什么状态
            }) */
            $($checks).prop('checked', res);
        });
        //    给每一个小框去绑定点击事件，当时间执行的时候去循环所有的小框，看看每一个小框的状态是不是都是选中的（checked==true），如果都是选中的，那上边的全选卡滚就是选中的，否则有一个不选中，那上边的全选框就是没有选中的
        $checks.click(function () {
            let flag = true;
            $checks.each((index, item) => {
                //首先创建一个表示默认是true
                // 当循环的时候如果有小框的状态是false的话，那就把flag的值设置为false，最后再把flag的值设置为全选框的状态就好
                if (!$(item).prop('checked')) {
                    flag = false;
                }
                /* flag = $(item).prop('checked');//出现bug
                if (!flag) {
                    return false
                } */
            });
            $checkHead.prop('checked', flag);
        });
    }

    // 实现批量删除

    let deleteAllHandle = () => {
        function deleteItem(index, $checked) {
            if (index > $checked.length) {
                queryUserList();
                alert('当前已经全部删除成功');
                return;
            }
            let userId = $checked.eq(index).parent().parent().attr('data-id');
            axios.get('/user/delete', {
                params: {
                    userId
                }
            }).then(res => {
                let { code } = res;
                if (code == 0) {
                    deleteItem(index++, $checked)
                }
            })

        }
        // 给批量删除按钮绑定点击事件
        $('.deleteAll').click(function () {
            let $checked = $('tbody').find('input[type="checkbox"]').filter((index, item) => {
                /* if ($(item).prop('checked')) {
                    return true;
                } */
                return $(item).prop('checked')
            });
            console.log($checked);

            alert(`您确定要删除${$checked.length}条数据吗?`, {
                title: '警告！警告！当前操作很重要！',
                confirm: true,
                handled: (res) => {
                    console.log(res);
                    if (res == 'CONFIRM') {
                        deleteItem(0, $checked)
                    }
                }
            })
        })
    }
    /* $('li').each((index, item) => {
        return false //回调函数里的return的值可以控制函数执行的次数
    }) */
    return {
        init: function () {
            //当前函数就是初始化页面的
            check();
            querySelect().then(() => {
                return queryUserList();
            }).then(() => {
                // 当页面加载完毕后再给checkbox绑定点击事件，在上面return proimse实例
                console.log(123);
                choose();
            })
            searchBind();
            handle();
            deleteAllHandle();
        }
    }
}());
userListModel.init();