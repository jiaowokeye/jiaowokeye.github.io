var Time1 = null;
var Time2 = null;
var Time3 = null;
var time1 = 0;
var time2 = 0;
var time3 = 0;

function start1(ype){
    if(Time1!==null){
        clearInterval(Time1);
    }
    time1 = 3600;
    Time1 = setInterval(function(){
        time1 = time1-1;
        if(time1>=0){
            var time =  parseInt(time1/60)+':'+time1%60;
            $('#item1 .progress-bar').html(time); 
            $('#item1 .progress-bar').attr('style','width:'+(time1/3600*100)+'%'); 
        }else{
            clearTimeout(Time1);
        }
        
    },1000)
}
function start2(){
    if(Time2!==null){
        clearInterval(Time2);
    }
    time2 = 3600;
    Time2 = setInterval(function(){
        time2 = time2-1;
        if(time1>=0){
            var time =  parseInt(time2/60)+':'+time2%60;
            $('#item2 .progress-bar').html(time); 
            $('#item2 .progress-bar').attr('style','width:'+(time1/3600*100)+'%');
        }else{
            clearTimeout(Time2);
        }
        
    },1000)
}
function start3(){
    if(Time3!==null){
        clearInterval(Time3);
    }
    time3 = 3600;
    Time3 = setInterval(function(){
        time3 = time3-1;
        if(time3>=0){
            var time =  parseInt(time3/60)+':'+time3%60;
            $('#item3 .progress-bar').html(time); 
            $('#item3 .progress-bar').attr('style','width:'+(time1/3600*100)+'%');
        }else{
            clearTimeout(Time3);
        }
        
    },1000)
}