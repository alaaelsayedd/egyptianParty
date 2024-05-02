/*Side Nav */
$('.colse').animate({width:"0px"},0).fadeOut(0)
$(".icon-open").click(()=>{
    
    $('.colse').fadeIn(0).animate({width:"250px"},1000);
    

})
$(".icon").click(()=>{
    $('.colse').animate({width:"0px"},1000).fadeOut(0);
})
$(".cotent div p").slideUp(0);
$(".cotent div h3").click((e)=>{
    $(".cotent div  p").slideUp(1000);
    $(e.target).next().slideDown(1000);

})

$(".link-list a").click((e)=>{
  let topValueOfSec;
   let hrf=$(e.target).attr("href");
   topValueOfSec=$(hrf).offset().top;
   console.log(topValueOfSec)
   $("html").animate({scrollTop:topValueOfSec},1500);
})
let date1 = new Date(2020, 10, 5, 8);
 function eventCountDown(eventDate)
 {
    let date = new Date(); 
    let differenceInMillis = date.getTime() - eventDate.getTime();
    let dates ={
        days :Math.floor(differenceInMillis / (1000 * 60 * 60 * 24)),
        hours:Math.floor((differenceInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((differenceInMillis % (1000 * 60 * 60)) / (1000 * 60)),
        seconds : Math.floor((differenceInMillis % (1000 * 60)) / 1000)
    }
    if(date.getFullYear()>eventDate.getFullYear())
    {
        dates.days=(dates.days*-1)
    }
    $(".time .col div").eq(0).text(`${dates.days}D`);
    $(".time .col div").eq(1).text(`${dates.hours}h`);
    $(".time .col div").eq(2).text(`${dates.minutes}m`);
    $(".time .col div").eq(3).text(`${dates.seconds}s`);
 }
 setInterval(()=>{
    eventCountDown(date1)
 },Infinity)
 $("#textarea").on("input", (e)=> {
    let count = e.target.value.length;
    
    if(count<=100)
    {
       $(e.target).next().children().text(`${100-count}`)
    }
    else{
        $(e.target).next().children().text("your available character finished")
    }
});




