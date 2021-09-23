import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Howdy ET-710 Students you are using {{name_hello}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name_hello: string;
}
