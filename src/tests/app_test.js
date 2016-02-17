"use strict";


var events = require('./events');
var test = require('tape');
var $    = require('jquery');


test('Example test assertions', function (t) {
    

    // simple positive assertion
    t.is(true, true, 'true is true assertion');
    
    // simple negative assertion
    t.isNot(true, false, 'true is not false assertion');
    
    t.comment('I print between test 2 and 3');
    
    // deep equal assertion
    t.same(events, events, 'this is same object');
    
    // deep Not Equal assertion
    t.notSame(events, {}, 'not the same object');
    
    
    t.end();



});


test('Test output for events is consistent', function(t) {
  
  t.is(testEventsMatch(events, 3), true, 'Events count do not match');
  t.end();
});



// Test given an arrray of Events and a number that they match
// Events => Num => Boolean

function testEventsMatch(events, expectedNum) {
  
  if (events !== undefined) {
    return (events.length === expectedNum)
  } else {
    return false;
  }
}

