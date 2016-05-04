import {Component} from 'angular2/core';
import { TestFormComponent } from './testform.component';

@Component({
    selector: 'my-app',
    directives: [TestFormComponent],
    templateUrl: 'app/templates/index.html'
})
export class AppComponent {
    name: string;
    names: string[];

    constructor() {
        this.name = "Thang Nguyen 123";
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }
}