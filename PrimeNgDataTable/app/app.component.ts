import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
    data: any[];
    
    ngOnInit() {
        this.data = [];
        for(var i = 0; i < 5; i++){
          let group: number = 0;
          this.data.push({Col1: 'Value1' + i, Col2: 'Value' + group});
        }
        

    }
}