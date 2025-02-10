import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Faq } from '../models/faq.model'; 

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class FaqComponent implements OnChanges {
  @Input() title?: string;
  @Input() fileName?: string;
  @Input() faqs: Faq[] = [];
  @Input() errorMessage?: string; 

  selectedFaq: Faq | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['faqs'] && !changes['faqs'].firstChange) {
      this.selectedFaq = null;   
      this.cdr.detectChanges();  
    }
  }

  selectQuestion(faq: Faq): void {
    this.selectedFaq = faq; 
    this.cdr.detectChanges();  
  }
}
