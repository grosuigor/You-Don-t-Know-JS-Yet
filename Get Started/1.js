"use strict";

/*
scheduleMeeting(..)should take a start time (in 24-hourformat as a string “hh:mm”) and a meeting duration (numberof minutes). It should returntrueif the meeting falls entirelywithin the work day (according to the times specified indayStartanddayEnd); returnfalseif the meeting violatesthe work day bounds.You Don’t Know JS Yet: Get Started
*/

let dayStart="07:30";
let dayEnd="17:45";

function toTime(strTime) {
  const [hour, minute] = strTime.split(":").map(Number)

  return hour * 60 + minute
}

dayStart = toTime(dayStart)
dayEnd = toTime(dayEnd)

function scheduleMeeting(startTime,durationMinutes) {
  startTime = toTime(startTime);
  return startTime >= dayStart && (startTime + durationMinutes) <= dayEnd;
}

console.log(scheduleMeeting("7:00",15));// false
console.log(scheduleMeeting("07:15",30));// false
console.log(scheduleMeeting("7:30",30));// true
console.log(scheduleMeeting("11:30",60));// true
console.log(scheduleMeeting("17:00",45));// true
console.log(scheduleMeeting("17:30",30));// false
console.log(scheduleMeeting("18:00",15));// false
