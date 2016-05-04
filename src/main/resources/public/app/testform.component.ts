import {Component} from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
    selector: 'test-form',
    directives: [FORM_DIRECTIVES],
    templateUrl: 'app/templates/test-form.html'
})
export class TestFormComponent {
    messages: string[];

    constructor() {

    }
}