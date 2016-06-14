window.onload = function(){
	function addEvent(elem, type, eventHandle) {
	    if (elem == null || typeof(elem) == 'undefined') return;
	    if ( elem.addEventListener ) {
	        elem.addEventListener( type, eventHandle, false );
	    } else if ( elem.attachEvent ) {
	        elem.attachEvent( "on" + type, eventHandle );
	    } else {
	        elem["on"+type]=eventHandle;
	    }
	}

	var btn = document.querySelector('#button');
	
	
	var status = 0;//初始状态
	var startTime = 0,
		reactionTime = 0,
		endTime = 0;
	//var timer = d.getTime();
	if('ontouchstart' in window){
		addEvent(btn, 'touchstart', onMouseDown);
	}
	else{
		addEvent(btn, 'mousedown', onMouseDown);
	}
	function onMouseDown(e){
		if(!status){
			var ran = Math.random() * 5000 + 1000;
			button.src = 'images/red.png';
			setTimeout(function(){
			button.src = 'images/green.png';
			var d = new Date();
			startTime = d.getTime();
			console.log(ran);
		}, ran);
			status = 1;
		}
		else if(status){
			var t = new Date();
			endTime = t.getTime();
			reactionTime = endTime - startTime;
			//console.log(endTime);
			if(endTime !=0 && startTime != 0 && reactionTime >= 0){
				status = 0;
				result.innerHTML = '你的反应时间是： ';
				result.innerHTML +=  reactionTime +'ms';
				if(reactionTime <= 50){
					result.innerHTML +=' <br/>原来你是个变态啊！';
				}
				else if(reactionTime <= 150){
					result.innerHTML +=' <br/>你的反应已经超越常人！';
				}
				else if(reactionTime <= 250){
					result.innerHTML +=' <br/>你的反应非常敏捷！';
				}
				else if(reactionTime <= 400){
					result.innerHTML +=' <br/>你的反应普普通通！';
				}
				else if(reactionTime <= 600){
					result.innerHTML +=' <br/>你的反应已经跟不上了！';
				}
				else if(reactionTime <= 1000){
					result.innerHTML +=' <br/>你的反应真是捉急！';
				}
				else{
					result.innerHTML +=' <br/>你肯定是故意的！';
				}
				startTime = 0;
				endTime = 0;
			}
			
		}
	}
}