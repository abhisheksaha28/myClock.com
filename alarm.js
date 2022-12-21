let a;
       
let time;
 
const setAlarm = () => {

    
    a = new Date();
   // time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
   time = a.toLocaleString().split(", ")[1];
    let alarmhour = alarm.value ;
    
    //let alarmsec = alarm.value.split("")[2]

    // if (a.getHours() == alarmhour && a.getMinutes() == alarmmin  ) {
    //     console.log('alarm ringing');
    //     let audiourl = "https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/mister-58834.mp3";
    //     var audio = new Audio(audiourl);
    //     audio.play();


    // }
    if ( alarmhour == time ) {
    console.log('alarm ringing');
 let audiourl = "./ring.mp3";
    var audio = new Audio(audiourl);
     
       audio.play();}
    }

setInterval(setAlarm, 1000);