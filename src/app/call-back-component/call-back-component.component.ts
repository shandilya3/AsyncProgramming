import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-back-component',
  templateUrl: './call-back-component.component.html',
  styleUrls: ['./call-back-component.component.css']
})
export class CallBackComponentComponent implements OnInit {

  constructor() {

    var a = this.calculate(10, 5, this.add);  //this used callback method add
    console.log("value of a is  " + a);
    var b = this.calculate(25, 5, this.mul);   // uses callback method mul

    console.log("value of b is  " + b);


    //anonymous callback using arrow function

    var d = this.calculate(10, 5, (x, y) => { return x - y })
    console.log("alright arrow function " + d);

    // some exampls of callback method

    //map()
    var array = [1, 2, 3, 4, 5];
    var newArray = array.map(
      (x) => { return x * x }
    );
    console.log("aha newArray " + newArray);
    // filter()

    var array1 = [1, 2, 3, 4, 5];

    function isOdd(x) {
      return x % 2 != 0;
    }
    var newArray = array1.filter(isOdd);
    console.log("after going through filter callback " + newArray);
  }
  //Callback functions are functions that are passed as arguments into other functions to be executed at a later point in time.
  mul(x, y) {

    return x * y;
  }

  add(x, y) {
    return x + y;
  }

  calculate(x, y, compute) {
    return compute(x, y);
  }







  ngOnInit() {
  }

}
