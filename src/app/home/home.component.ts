import { Component, OnInit } from '@angular/core';
import { EasyGoService } from '../easy-go.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  boroughs: any;

  constructor(private easyGoService:EasyGoService) { 

  }

  ngOnInit() {
    this.getBoroughs();
  }

  getBoroughs(): void{
    var x = this.easyGoService.getBoroughs().subscribe(boroughs => this.boroughs = boroughs);
  }

}
