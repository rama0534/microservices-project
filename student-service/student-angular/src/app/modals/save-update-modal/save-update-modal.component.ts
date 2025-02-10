import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'save-update-modal',
  templateUrl: './save-update-modal.component.html',
  styleUrls: ['./save-update-modal.component.css']
})
export class SaveUpdateModalComponent implements OnInit{
  @Input() title: string = 'Edit Item'; 
  @Input() editableObject: any = {};   
  @Output() save = new EventEmitter<any>();  

  editForm!: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {} 

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: this.editableObject.id ? this.editableObject.id : 0,
      name: [this.editableObject.name, [Validators.required, Validators.minLength(3)]],
      score: [
        this.editableObject.score,
        [Validators.required, Validators.min(0), Validators.max(100)]
      ]
    });
  }

  ngOnChanges(): void {
    if (this.editForm && this.editableObject) {
      this.editForm.patchValue(this.editableObject);
    }
  }

  open(modal: any): void {
    this.editForm.reset({
      id: this.editableObject.id,
      name: this.editableObject.name,
      score: this.editableObject.score,
      
    }); 
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title' });
  }

  onSave(modal: any): void {
    if (this.editForm.valid) { 
      this.save.emit(this.editForm.value);  
      modal.close();
    }
  }

  onCancel(modal: any): void {
    this.editForm.reset();
    modal.dismiss();
  } 

}
