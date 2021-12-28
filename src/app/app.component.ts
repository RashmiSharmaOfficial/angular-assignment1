import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  studName = 'Alexa'
  studID = 101
  studObj = { uid: 'alex', pwd: 'password' }

  policyObj = {
    no: 101,
    holder: 'Rashmi',
    nominee: 'Sister',
    amtMaturity: 10000,
    monthEmi: 20,
    duration: 6
  }

  image = './assets/image/fruit.jpeg'

  disableBtn = false;
  enBtn() {
    this.disableBtn = false;
  }
  disBtn() {
    this.disableBtn = true;
  }

  verification(email: string) {
    alert(`We have sent you code on ${email}`)
  }

  phoneValid(phone: string) {
    if (phone.length < 10) {
      alert('Phone number length is less then 10!!')
    }
    else {
      alert('Valid phone number!!')
    }
  }

  // two way data binding
  varTwoWayDataBinding = 'rashmi Sharma'

  verify(username: string, password: string) {
    if (username == 'Rashmi' && password == 'password') {
      alert('Valid user!')
    }
    else {
      alert('Invalid user!')
    }
  }

  //parent to child communication
  employeeID = 's101'

  //sending object
  bigBasket = {
    fruitName: 'Orange',
    quantity: 12
  }

}
