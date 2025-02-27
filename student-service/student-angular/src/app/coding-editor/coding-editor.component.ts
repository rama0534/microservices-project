import { Component, OnInit } from '@angular/core';
import { CodeSnippet, CodeDataService } from '../services/code-data.service';

@Component({
  selector: 'app-coding-editor',
  templateUrl: './coding-editor.component.html',
  styleUrls: ['./coding-editor.component.css']
})
export class CodingEditorComponent implements OnInit {

  snippets: CodeSnippet[] = [];
  currentSnippet: CodeSnippet | undefined;
  showEditor: boolean = true;
  editorOptions = { theme: 'vs-dark', language: 'typescript', automaticLayout: true };
  
  
  constructor(private codeDataService: CodeDataService) {}

  ngOnInit(): void {
    this.snippets = this.codeDataService.getAllSnippets();
    this.codeDataService.currentSnippet$.subscribe(snippet => {
      this.currentSnippet = snippet;
      this.editorOptions = { ...this.editorOptions, language: snippet.language };
    }); 
  }

  selectSnippet(snippet: CodeSnippet) {
    this.showEditor = true;
    this.codeDataService.setCurrentSnippet(snippet);
  }
  clear() {
    this.showEditor = false;
  }

}
