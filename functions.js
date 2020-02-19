window_size = window.innerHeight-70 + "px";
document.getElementById("banner").style.height = window_size;

window.onscroll = function() {
	stick();
	slide();
	slide1();
};
var tabs = document.getElementById("tabs");
var slider = document.getElementById("slider");
var slider1 = document.getElementById("slider1");


var sticky = tabs.offsetTop;

function stick() {
	if (window.pageYOffset >= sticky) {
		//console.log(tabs.style.paddingTop);
	    tabs.classList.add("sticky");
	//	document.getElementById("content").style.paddingTop = allTabs.style.height;
	  } else {
	    tabs.classList.remove("sticky");
	  }
}

function slide() {
	if (window.pageYOffset >= 100) {
		//console.log(tabs.style.paddingTop);
	    slider.classList.add("slideRight");
	//	document.getElementById("content").style.paddingTop = allTabs.style.height;
	  } else {
	    slider.classList.remove("slideRight");
	  }
}

function slide1() {
	if (window.pageYOffset >= 600) {
		//console.log(tabs.style.paddingTop);
	    slider1.classList.add("slideLeft");
	//	document.getElementById("content").style.paddingTop = allTabs.style.height;
	  } else {
	    slider1.classList.remove("slideLeft");
	  }
}



var type;
var index=0;
var adjectives=["Coder","Student","Gamer","Engineer", "Developer","Footballer"];
var currentIndex=0;
var mode=0;
var delay=200;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}



var backspace = function() {
	//console.log(type);
	var type  = "" + document.getElementById("mainTitleVar").innerHTML;
	if(type=="") {
		mode=1;
	}
	else {
		document.getElementById('mainTitleVar').innerHTML=type.substring(0,type.length -1);
	}
}

var stop=0;
var typer = function() {
	//console.log(type);
	document.getElementById('mainTitleVar').innerHTML=adjectives[index].substring(0,currentIndex);
	currentIndex++;
	if(currentIndex>adjectives[index].length+1) {
		stop=1;
		
	}
	if(stop==1) {
		document.getElementById('mainTitleVar').innerHTML=document.getElementById('mainTitleVar').innerHTML+" "
		stop=0;
		currentIndex=0;
		index++;
		mode=0;
		if(index==adjectives.length) {
			index=0;
		}
	}
}

window.setInterval(function(){
	if(mode==0) {
		backspace();
	}
	else {	
		typer();
	}
}, 150);
