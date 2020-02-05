function animateValue(id, start, end, duration,cnt,item) {
    var range = end - start;
    var current = start;
    var increment = end > start? cnt : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current >= end) {
            clearInterval(timer);
        }
    obj.innerHTML += item 
    }, stepTime);
}
$("#counter").waypoint(function() {
    if($("#count1").is(":empty")){
        
        animateValue("count1", 0, 25 , 1000,1,"k");
        animateValue("count2",0,1500,4,4,"+");
        animateValue("count3",0,30,1000,1,"+");
        animateValue("count4",0,460,300,2,"+");
       
    }
    
}, {
    offset: '95%'
});


