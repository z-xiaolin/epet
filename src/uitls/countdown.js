
export const showtime = function() {
    let time = []
    let nowtime = new Date(),
      endtime = new Date("2018/1/6,21:55:00"),//设置结束时间
      lefttime = parseInt((endtime.getTime()-nowtime.getTime())/1000),
      d = Math.floor(lefttime/(60*60*24)),
      h = Math.floor(lefttime/(60*60)%24),
      m = Math.floor(lefttime/60%60),
      s = Math.floor(lefttime%60);
    time.push(h, m, s)
    // console.log(h, m, s)
    // console.log(time)
//        p3.innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
    setTimeout(showtime, 1000);
    return time
}

