import { Component, OnInit } from '@angular/core';
import { TranslatorServiceService } from '../translator-service.service';

@Component({
  selector: 'app-translator-page',
  templateUrl: './translator-page.component.html',
  styleUrls: ['./translator-page.component.css']
})
export class TranslatorPageComponent implements OnInit {
  constructor(private translator: TranslatorServiceService) { }
  result: string = 'nothing yet';

  ngOnInit(): void {
  }

  onClick() {
    this.translator.getStuff().subscribe((result: string) => {
      this.result = result;
    })
  }

}
