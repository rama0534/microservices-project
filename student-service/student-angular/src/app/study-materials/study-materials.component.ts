import { Component, ChangeDetectorRef } from '@angular/core';
import { Faq } from '../models/faq.model';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'study-materials',
  templateUrl: './study-materials.component.html',
  styleUrls: ['./study-materials.component.css']
})
export class StudyMaterialsComponent {
  public fileName!: string;
  public title!: string;
  public isActive: boolean = false; 
  faqs: Faq[] = [];
  errorMessage = ''; 

  constructor(
    private faqService: FaqService,
    private cdr: ChangeDetectorRef) { }
 

  activeTab: string = '';  
  savedJobs: string[] = [];  
  appliedJobs: string[] = [];  
 

  selectTab(title: string, fileName: string, tab: string): void {
    this.isActive = false;  
    setTimeout(() => {
      this.activeTab = tab;
      this.title = title;
      this.faqs = [];  
      this.loadFaqs(fileName);
      this.isActive = true;  
    }, 0);
  }

  private loadFaqs(fileName: string): void {
    if (!fileName) {
      this.errorMessage = 'No FAQ file specified.';
      return;
    }

    this.faqService.getFaqs(fileName).subscribe({
      next: (data) => {
        this.faqs = [...data];
        this.errorMessage = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching FAQs:', err);
        this.errorMessage = `Failed to load ${fileName}. Please try again later for ${this.title}.`;
      }
    });
  }
  
}
