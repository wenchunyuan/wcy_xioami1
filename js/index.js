//banner
	{
		const imgs=document.querySelectorAll(".imgbox li");   //不会被修改，常量
		let pagers=document.querySelectorAll(".pagebox li");
		let benner=document.querySelector("#benner");   //设置banner，鼠标放上去，停止播放，鼠标移开开始播放。
		let banner_lbtn=document.querySelector(".banner_lbtn"); 
		let banner_rbtn=document.querySelector(".banner_rbtn"); 

		// console.log(imgs);
		// console.log(pagers);
		pagers.forEach(function(ele,index){    //形参：遍历数。
			// console.log(ele);
			ele.onclick=function(){
				for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");   //移除active
				}
				this.classList.add("active");
				imgs[index].classList.add("active");    //添加active
				n=index;     //n从当前位子自加。
			}
		})

		// window.setInterval();//让代码自动执行   自动轮播
		let n=0;     //访问n，自加
		let t=setInterval(move,3000)

		function move(){
			n++;
			//n超范围判断
			// n=n%5;
			if(n===imgs.length){
				n=0;    //赋值
			}
			//左按钮，点到第一张时跳转到第五章
			if(n<0){
				n=imgs.length-1;
			}
			for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				imgs[n].classList.add("active");
				pagers[n].classList.add("active");
		}

		banner.onmouseenter=function(){
			clearInterval(t);
		}
		banner.onmouseleave=function(){
						// 	t=setInterval(function(){
						// 	n++;
						// 	// n=n%5;
						// 	if(n===imgs.length){
						// 		n=0;
						// 	}
						// 	for(let i=0;i<imgs.length;i++){
						// 			imgs[i].classList.remove("active");
						// 			pagers[i].classList.remove("active");
						// 		}
						// 		imgs[n].classList.add("active");
						// 		pagers[n].classList.add("active");
						// },3000)
			t=setInterval(move,3000);
		}
		let flag=true;
		banner_rbtn.onclick=function(){
			if(flag){
				flag=false;
				move();
			}
		}
		banner_lbtn.onclick=function(){
			if(flag){
				flag=false;
				n-=2;//n=n-2
				move();
			}
		}
		imgs.forEach(function(ele,index){
			ele.addEventListener("transitionend",function(){
				flag=true;
			})
		})
	}

//闪购
	{
		const prve=document.querySelector(".buy-prev");
		const next=document.querySelector(".buy-next");
		const inner=document.querySelector(".buy_inner");
		let n=0;//n代表往左移动几贫
		next.onclick=function(){
			n++;
			prve.classList.remove("disable");
			if(n===2){
				this.classList.add("disable");
			}
			if(n===3){
				n=2;
				return;
			}
			inner.style.marginLeft=-992*n+"px";
		}
		prve.onclick=function(){
			n--;
			next.classList.remove("disable");
			if(n===0){
				prve.classList.add("disable");
			}
			if(n===-1){
				n=0;
				return;
			}
			inner.style.marginLeft=-992*n+"px";
		}
	}

//封装
	{
		function dapei(parent){
			const types=parent.querySelectorAll(".dapei_right span"); 
			const goods=parent.querySelectorAll(".dapei_goodlist"); 
			types.forEach(function(ele,index){
				ele.onmouseenter=function(){
					for(let i=0;i<types.length;i++){
						types[i].classList.remove("achive");
						goods[i].classList.remove("achive");
					}
					this.classList.add("achive");
					goods[index].classList.add("achive"); 
				}
			})
		}
		const contentlist=document.querySelectorAll(".dapei");
		// content(contentlist[0]);
		contentlist.forEach(function(ele){
			dapei(ele);
		})
	}

//哈利波特
	{
		function tuijie(parent){
			const prve=parent.querySelector(".buy-prev");
			const next=parent.querySelector(".buy-next");
			const inner=parent.querySelector(".tuijie_goodlist");
			let n=0;//n代表往左移动几贫
			next.onclick=function(){
				n++;
				prve.classList.remove("disable");
				if(n===2){
					this.classList.add("disable");
				}
				if(n===3){
					n=2;
					return;
				}
				inner.style.marginLeft=-1226*n+"px";
			}
			prve.onclick=function(){
				n--;
				next.classList.remove("disable");
				if(n===0){
					prve.classList.add("disable");
				}
				if(n===-1){
					n=0;
					return;
				}
				inner.style.marginLeft=-1226*n+"px";
			}
		}
		const contentlist=document.querySelectorAll(".tuijie");
		// content(contentlist[0]);
		contentlist.forEach(function(ele){
			tuijie(ele);
		})
	}