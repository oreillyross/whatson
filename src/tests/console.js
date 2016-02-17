var events = require('./events');


function testEventsMatch(events, expectedNum) {
  
  if (events !== undefined) {
    console.log('in array block')
    return (events.length === expectedNum)
  } else {
    return false;
  }
}

console.log(testEventsMatch(events,3));