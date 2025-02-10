import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
  @Input() title: string = 'Confirm Delete'; // Reusable title
  @Input() message: string = 'Are you sure you want to delete this item?'; // Custom message
  @Output() confirm = new EventEmitter<void>();
 
  constructor(private modalService: NgbModal) {}  

  open(modal: any): void {
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title' });
  }

  onConfirm(modal: any): void {
    this.confirm.emit(); // Emit event when user confirms
    modal.close('confirmed');
  }

  onCancel(modal: any): void {
    modal.dismiss('cancelled');
  }

}
