var events = [

  {
    name: "Food Truck Festival",
    dates: {
    },
    image: "streamed image"
  },
  {
    name: "Chinese New Year",
    dates: {
      start: "Sat Feb 13 2016 15:00:00 GMT+0100 (CET)",
      end: "Sat Feb 13 2016 22:00:00 GMT+0100 (CET)"
    },
    location: "adress from google",
    image: "streamed image"
  }
]

const eventNames = [];
for (var i = 0; i < events.length; i++) {
  eventNames.push(events[i].name);
}

console.log(eventNames);
