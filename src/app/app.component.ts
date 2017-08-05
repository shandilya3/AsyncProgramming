import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(){
 this.funcA();
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


}
