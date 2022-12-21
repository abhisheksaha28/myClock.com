let a;
let date;
let time;
let Options;

setInterval(() => {


  a = new Date();
  Options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  date = a.toLocaleDateString(undefined, Options);
 // time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
 time = a.toLocaleString().split(", ")[1];
  
  document.getElementById('time').innerHTML = time + '' + '<br>on' + '' + date;
}, 1000); // after every 1 second it will be updated then


const updateTime = () => {
  a = new Date();
  // india time
  indiatime.innerHTML = a.toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
  }).split(", ")[1]

  indiadate.innerHTML = a.getDate({
    timeZone: 'Asia/Kolkata',
  }) + "/" + a.getMonth({
    timeZone: 'Asia/Kolkata',
  }) + "/" + a.getFullYear({
    timeZone: 'Asia/Kolkata',
  })

  //USA time

  usatime.innerHTML = a.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  }).split(", ")[1]

  usadate.innerHTML = a.getDate('en-US', {
    timeZone: 'America/Los_Angeles',
  }) + "/" + a.getMonth('en-US', {
    timeZone: 'America/Los_Angeles',
  }) + "/" + a.getFullYear('en-US', {
    timeZone: 'America/Los_Angeles',
  })

  //london time

  londontime.innerHTML = a.toLocaleString('en-GB', {
    timeZone: 'Europe/London',
  }).split(", ")[1]

  londondate.innerHTML = a.getDate('en-GB', {
    timeZone: 'Europe/London',
  }) + "/" + a.getMonth('en-GB', {
    timeZone: 'Europe/London',
  }) + "/" + a.getFullYear('en-GB', {
    timeZone: 'Europe/London',
  })

  //england time

  englandtime.innerHTML = a.toLocaleString('en-GB', {
    timeZone: 'Europe/London',
  }).split(", ")[1]

  englanddate.innerHTML = a.getDate('en-GB', {
    timeZone: 'Europe/London',
  }) + "/" + a.getMonth('en-GB', {
    timeZone: 'Europe/London',
  }) + "/" + a.getFullYear('en-GB', {
    timeZone: 'Europe/London',
  })

  //Australia time

  austime.innerHTML = a.toLocaleString('en-US', {
    timeZone: 'Australia/Sydney',
  }).split(", ")[1]

  ausdate.innerHTML = a.getDate('en-US', {
    timeZone: 'Australia/Sydney',
  }) + "/" + a.getMonth('en-US', {
    timeZone: 'Australia/Sydney',
  }) + "/" + a.getFullYear('en-US', {
    timeZone: 'Australia/Sydney',
  })

  //SA time

  usatime.innerHTML = a.toLocaleString('en-SAST', {
    timeZone: 'Africa/Johannesburg',
  }).split(", ")[1]

  usadate.innerHTML = a.getDate('en-SAST', {
    timeZone: 'Africa/Johannesburg',
  }) + "/" + a.getMonth('en-SAST', {
    timeZone: 'Africa/Johannesburg',
  }) + "/" + a.getFullYear('en-SAST', {
    timeZone: 'Africa/Johannesburg',
  })




}
setInterval(updateTime, 1000)

