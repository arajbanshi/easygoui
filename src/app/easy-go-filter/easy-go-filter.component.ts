import { Component, OnInit } from '@angular/core';
import {EasyGoInput} from '../easy-go-input';
import { EasyGoService } from '../easy-go.service'
import { MessageService } from '../message.service'
import { TaxiZones } from '../TaxiZones'
import { ServiceOut } from '../ServiceOut'

@Component({
  selector: 'app-easy-go-filter',
  templateUrl: './easy-go-filter.component.html',
  styleUrls: ['./easy-go-filter.component.css']
})
export class EasyGoFilterComponent implements OnInit {

  cabTypes = ['ForHireVehicles', 'Green Cab', 'Yellow Cab'];
  boroughs: TaxiZones[];
  fhvOut = new ServiceOut();
  greenCabOut = new ServiceOut();
  yellowCabOut = new ServiceOut(); 

  model = new EasyGoInput("testName", "YellowCab", "", "", new Date(), new Date());

  submitted = false;
  fhvSelected = false;
  greenCabSelected = false;
  yellowCabSelected = false;

  onSubmit() {
    if (!this.fhvSelected && !this.greenCabSelected && !this.yellowCabSelected)
    {
      this.messageService.add("Please select your method of transportation.");
    }

    if (this.model.fromBorough != "" && this.model.toBorough != "")
    {
        this.submitted = true;
      
        if (this.fhvSelected)
        {
          var date = ''

          if (this.model.fromDate)
            date = this.model.fromDate.toDateString()

          this.easyGoService.getFhvDetails(this.model.fromBorough, this.model.toBorough, date).subscribe(fOut => this.fhvOut = fOut);
        }

        if (this.greenCabSelected)
        {
          var date = ''

          if (this.model.fromDate)
            date = this.model.fromDate.toDateString()

          this.easyGoService.getGreenCabDetails(this.model.fromBorough, this.model.toBorough, date).subscribe(gcOut => this.greenCabOut = gcOut);
        }

        if (this.yellowCabSelected)
        {
          var date = ''

          if (this.model.fromDate)
            date = this.model.fromDate.toDateString()

          this.easyGoService.getYellowCabDetails(this.model.fromBorough, this.model.toBorough, date).subscribe(ycOut => this.yellowCabOut = ycOut);
        }
    }else{
      this.messageService.add("Please select the locations you want to go to.");
    }
    
  }

  constructor(private easyGoService:EasyGoService, private messageService:MessageService) { }

  ngOnInit() {
    this.getBoroughs();
  }

  get diagnostics() {return JSON.stringify(this.model);}
  
  getBoroughs(): void{
    this.easyGoService.getBoroughs().subscribe(boroughs => this.boroughs = boroughs);
  }

}
