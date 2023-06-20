import { Component, OnInit, TemplateRef } from '@angular/core';
import { getYear } from 'date-fns'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  disableHref: boolean = false;
  currentYear: number = getYear(new Date())

  constructor() {}

  ngOnInit(): void {}
}
