import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Eod } from '../Model/eod';
import { EodService } from '../Service/eod.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-eod',
  templateUrl: './add-eod.component.html',
  styleUrls: ['./add-eod.component.css']
})
export class AddEODComponent implements OnInit {

   addForm : FormGroup;
   eodModel : Eod[] | any;
   id : string | any;
   workTypes: string[] = [ ' ', 'Bug', 'Task', 'User Story'];

  constructor(private fb : FormBuilder, private eodService : EodService, private route : ActivatedRoute, private router : Router){
    this.addForm = this.fb.group({
      workId : [null, [Validators.required, Validators.maxLength(6), Validators.minLength(1)]],
      title : [null, [Validators.required]],
      date : [null, [Validators.required]],
      areaPath : [null, [Validators.required]],
      adoTime : [null, [Validators.required]],
      proactTime : [null, [Validators.required]],
      workType : [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res['id'];
    });
    if(this.id != null){
      this.eodService.getEodById(this.id).subscribe(res => {
        this.addForm.setValue({
          workId : res.WorkId,
          title : res.Title,
          date : res.Date,
          areaPath : res.AreaPath,
          adoTime : res.ADOTime,
          proactTime : res.ProactTime,
          workType : res.WorkType
        });
      });
    }
  }

  onAddNew(){
    if(this.id == null){
      let newEod : Eod = new Eod();
      newEod.Id = "string";
      newEod.WorkId = this.addForm.value.workId;
      newEod.Title = this.addForm.value.title;
      newEod.Date = this.addForm.value.date;
      newEod.AreaPath = this.addForm.value.areaPath;
      newEod.ADOTime = this.addForm.value.adoTime;
      newEod.ProactTime = this.addForm.value.proactTime;
      newEod.WorkType = this.addForm.value.workType;
      newEod.DayType = true;
      console.log(newEod)
      this.eodService.addEod(newEod).subscribe( res => {
        if(res.status == 201){
          this.router.navigateByUrl('view')
        }
      });
    }
    else{
      let updateEod : Eod = new Eod();
      updateEod.Id = this.id;
      updateEod.WorkId = this.addForm.value.workId;
      updateEod.Title = this.addForm.value.title;
      updateEod.Date = this.addForm.value.date;
      updateEod.AreaPath = this.addForm.value.areaPath;
      updateEod.ADOTime = this.addForm.value.adoTime;
      updateEod.ProactTime = this.addForm.value.proactTime;
      updateEod.DayType = true;
      console.log(updateEod)
      this.eodService.updateEod(updateEod, this.id).subscribe( res => {
        if(res.status == 200){
          this.router.navigateByUrl('view')
        }
      });
    }
    
  }

}
