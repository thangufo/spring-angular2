import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
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