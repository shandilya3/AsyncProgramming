import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css']
})
export class TimersComponent implements OnInit {

  constructor() {

    //The setTimeout() method is used to schedule a task to be put on the event queue after a given amount of time.
    //The first parameter to setTimeout() is the callback function that is going to be executed.
    //The second parameter is the amount of time to wait before putting the task on the event queue.
    //setTimeout() is non-blocking and other code may run while the setTimeout() task is waiting to be executed.

    var timeout = setTimeout(function () {
      console.log("hello setTimout");
    }, 3000);

    //

    clearTimeout(timeout); // clears the setTimeout callback from running


    //setInterval()
    var count = 0;

    var interval = setInterval(function () {

      count++;
      console.log("setInterval() method is used to schehdule A reocuuring task to be put on the even tqueue every time a given number of milliseconds elpases " + count);
      count>=3 ? clearInterval(interval) : console.log("still given sec not over");

    }, 1000);
























  }

  ngOnInit() {
  }

}
