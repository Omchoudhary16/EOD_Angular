import { Component, OnInit } from '@angular/core';
import { Eod } from '../Model/eod';
import { EodService } from '../Service/eod.service';
import { NonEod } from '../Model/non-eod';
import { NonEODService } from '../Service/non-eod.service';
import { CombinedModel } from '../Model/combined-model';

@Component({
  selector: 'app-view-eod',
  templateUrl: './view-eod.component.html',
  styleUrls: ['./view-eod.component.css']
})
export class ViewEODComponent implements OnInit {
  
  eodModel : Eod[] | any;
  nonEodModel : NonEod[] | any;
  combinedModel : CombinedModel[] | any;

  constructor(private eodService : EodService, private nonEodService : NonEODService){
   
  }

  ngOnInit(): void {
    this.eodService.getAll().subscribe((eodData: Eod[]) => {
      this.eodModel = eodData;
      console.log(eodData);
      this.combineData();
    });
  
    this.nonEodService.getAll().subscribe((nonEodData: NonEod[]) => {
      this.nonEodModel = nonEodData;
      console.log(nonEodData);
      this.combineData();
    });
  
    // Combine the data into a single array
    // this.combineData();
    console.log(this.combineData());
    
  
  }
  
  
  
  public combineData() {
    this.combinedModel = [];
  
    if (this.eodModel) {
      console.log(this.eodModel)
      this.combinedModel = this.combinedModel.concat(
        this.eodModel.map((eodItem: Eod) => ({
          Id: eodItem.Id,
          WorkId: eodItem.WorkId,
          Title: eodItem.Title,
          Date: eodItem.Date,
          AreaPath: eodItem.AreaPath,
          ADOTime: eodItem.ADOTime,
          ProactTime: eodItem.ProactTime,
          WorkType: eodItem.WorkType,
          DayType: eodItem.DayType,
        }))
      );
    }
  
    if (this.nonEodModel) {
      this.combinedModel = this.combinedModel.concat(
        this.nonEodModel.map((nonEodItem: NonEod) => ({
          Id: nonEodItem.Id,
          Date: nonEodItem.Date,
          LeaveType: nonEodItem.LeaveType,
          Note: nonEodItem.Note,
          DayType: nonEodItem.DayType,
        }))
      );
    }
  }
  onDelete(id : any){
    console.log(id);
    this.eodService.deleteEod(id).subscribe( res => {
      if( res.status == 204 ){
         this.refreshUI();
      }
    })
  }

  refreshUI(){
    this.eodService.getAll().subscribe( res => {
      this.eodModel = res;
    });
  }
 
}
