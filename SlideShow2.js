// JavaScript Document


$(document).ready(function() {
	
	var slide = document.querySelector(".slide");
	var itemList = slide.querySelectorAll("ul li");
	
	var current = itemList[0];
	var next = itemList[1];
	var prev = itemList[itemList.length-1];
	
	$(current).addClass("active");
	$(next).addClass("next");
	$(prev).addClass("prev");
	
	var counter=0;
	
	$(".slide button#right").click(function() {
		$(current).css("left","-100px");
		$(next).css("left","50px");
		
		$(current).removeClass("active");
		$(next).removeClass("next");
		$(prev).removeClass("prev");
		
		counter++;
		
		current = itemList[Math.abs(counter)%5];
		next = itemList[(Math.abs(counter)+1)%5];
		prev = itemList[(Math.abs(counter)-1)%5];
		
		$(current).addClass("active");
		$(next).addClass("next");
		$(prev).addClass("prev");
    });
	
	$(".slide button#left").click(function() {
		$(current).css("left","-100px");
		$(prev).css("left","50px");
		
		$(current).removeClass("active");
		$(next).removeClass("next");
		$(prev).removeClass("prev");
		
		counter--;
		if(counter===-1){	
			counter=4;
		}

		current = itemList[Math.abs(counter)%5];
		next = itemList[(Math.abs(counter)+1)%5];
		
		if(counter===0){
			prev = itemList[itemList.length-1];
		}
		else{
			prev = itemList[(Math.abs(counter)-1)%5];
		}
		
		$(current).addClass("active");
		$(next).addClass("next");
		$(prev).addClass("prev");
    });
	
});