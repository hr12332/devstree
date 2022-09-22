let weeklyArray = ["Mon", "Wed", "Fri"];
let obj = {
  "mon_start_time": 10,
  "tue_start_time ": 9,
  "wed_start_time": 11,
  "thu_start_time": 25,
  "fri_start_time": 14,
  "sat_start_time": 16,
  "sun_start_time": 50,
}

let key = Object.keys(obj);
let values = Object.values(obj);


let comp = weeklyArray.map((a) => {



  for (let i = 0; i < key.length; i++) {


    if (a.toLowerCase() == key[i].slice(0, 3)) {


      return { name: a, starttime: values[i] };



    }


  }
})
console.log(comp)

