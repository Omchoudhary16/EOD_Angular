import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NonEod } from '../Model/non-eod';
import { NonEODService } from '../Service/non-eod.service';

@Component({
  selector: 'app-leave-eod',
  templateUrl: './leave-eod.component.html',
  styleUrls: ['./leave-eod.component.css']
})

export class LeaveEODComponent implements OnInit {
  leaveTypes: string[] = [ ' ', 'Sick', 'Plan', 'Bank'];
  
  nonworkDayForm : FormGroup;
  nonEodModel : NonEod[] | any;
  id : string | any;


  constructor(private fb : FormBuilder, private nonEodService : NonEODService, private route : ActivatedRoute, private router : Router){
    this.nonworkDayForm = this.fb.group({
      date : [null, [Validators.required]],
      leaveType : [null, [Validators.required]],
      note : [null]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res['id'];
    });
    if(this.id != null){
      this.nonEodService.getNonEODById(this.id).subscribe(res => {
        this.nonworkDayForm.setValue({
          date : res.Date,
          leaveType : res.LeaveType,
          note : res.Note,
        });
      });
    }
  }

  onNonWorkDayAddNew(){
    if(this.id == null){
      let newNonEod : NonEod = new NonEod();
      newNonEod.Id = "string";
      newNonEod.Date = this.nonworkDayForm.value.date;
      newNonEod.LeaveType = this.nonworkDayForm.value.leaveType;
      newNonEod.Note = this.nonworkDayForm.value.note;
      newNonEod.DayType = false;
      console.log(newNonEod)
      this.nonEodService.addNonEOD(newNonEod).subscribe( res => {
        if(res.status == 201){
          this.router.navigateByUrl('view')
        }
      });
    }
    else{
      let updateNonEod :  NonEod = new NonEod();
      updateNonEod.Id = this.id;
      updateNonEod.LeaveType = this.nonworkDayForm.value.leaveType;
      updateNonEod.Note = this.nonworkDayForm.value.note;
      updateNonEod.Date = this.nonworkDayForm.value.date;
      updateNonEod.DayType = false;
      console.log(updateNonEod)
      this.nonEodService.updateNonEOD(updateNonEod, this.id).subscribe( res => {
        if(res.status == 200){
          this.router.navigateByUrl('view')
        }
      });
    }
    
  }

 

}
