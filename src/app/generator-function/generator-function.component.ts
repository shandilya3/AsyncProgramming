import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator-function',
  templateUrl: './generator-function.component.html',
  styleUrls: ['./generator-function.component.css']
})
export class GeneratorFunctionComponent implements OnInit {

  constructor() {

//the fuction* keyword is used to declare THE generator funtion

// the yield keyword is used to pause the generator and may also be used to receive an input and send the otuput from the generator


    function* genFunc() {

      yield 'a';   //pauses thegenerator and sends out a value of 'a'
      yield;       // pauses the generator and sends out an undefined value
      yield 123;   // pauses the generator and sends out a value of 123

      return "finished";   // the return value of the Generator function is often left unused

    }






  }

  ngOnInit() {
  }

}
