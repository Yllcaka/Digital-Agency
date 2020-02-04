function animateValue(id, start, end, duration,cnt) {
    var range = end - start;
    var current = start;
    var increment = end > start? cnt : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// var interval = setInterval(function(){
//     if (document.getElementById("counter")) { 
//         
//          jwplayer().stop(); 
//          clearInterval(interval);
//     }
// }, 1000);
$("#counter").waypoint(function() {
    // alert('You have scrolled to an entry.');
    if($("#count1").is(":empty")){
        animateValue("count1", 0, 25 , 1000,1);
        animateValue("count2",0,1500,10,4);
        animateValue("count3",0,30,1000,1);
        animateValue("count4",0,460,300,2);
    }
}, {
    offset: '88%'
});
var $counter = $()
counter.waypoint(function(){
    if(getElementById("count1"))
    animateValue("count1", 0, 25 , 1000,1);
    animateValue("count2",0,1500,10,4);
    animateValue("count3",0,30,1000,1);
    animateValue("count4",0,460,300,2);
})

