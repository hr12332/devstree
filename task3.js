let x = {
    Interval: 30,
    startTime: "9:00",
    endTime: "12:00",
  };
  
  let opentime = moment(x.startTime, "HH:mm");
  
  let closetime = moment(x.endTime, "HH:mm");
  
  let time=moment(x.startTime, "HH:mm").add(x.Interval,"minutes");
  
  let allTimes = [];
  
  while (opentime < closetime) {
   let time1=opentime.format("HH:mm")+("-")+time.format("HH:mm");
   allTimes.push(time1)
   opentime.add(x.Interval,"minutes")
   time.add(x.Interval,"minutes")
  }
  console.log(allTimes);
  