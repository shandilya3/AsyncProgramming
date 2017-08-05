import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    this.funcA();
    this.fastTask();
    this.slowTask();
    this.fastTask();
    this.fastTask();

    // calling async
    this.superFastTask();
    this.asyncLazySlowTask();
    this.superFastTask();
    this.asyncLazySlowTask();
    this.superFastTask();
    this.superFastTask();
  }
  // the call stack
  funcA() {
    console.log("Starting in Function A")
    this.funcB();
    console.log("Waiting for funcB execution")

  }


  funcB() {
    console.log("Starting in Function B")
    this.funcC();
  }

  funcC() {
    console.log("now in function C")
    console.log(Error().stack);
  }
  // Synchronousvs Asynchronous Programming
  //here we see how slowTask() takes a long time to process and prevents other fast tasks from processing
  slowTask() {
    //it takes 3 seconds to process
    var now = new Date().getTime();
    while (new Date().getTime() < now + 3000) {
      console.log("It's processing here")
    }
    console.log("slow task finished")
  }

  fastTask() {
    console.log("fast task finished");
  }

  //Asyncronous will preventbloacking of other task because of the lazyslowtask

  lazySlowTask() {
    console.log("slow task finished here in laziness");
  }

  asyncLazySlowTask() {
    setTimeout(this.lazySlowTask, 4000);// this task finishes in 4 seconds, but is processed on a seperate thread alright
  }

  superFastTask() {
    console.log("aha super fast task finished");
  }
}
