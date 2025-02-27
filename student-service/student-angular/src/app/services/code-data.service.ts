import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CodeSnippet {
  title: string;
  language: string; 
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class CodeDataService {
  private snippets: CodeSnippet[] = [
    {
      title: 'Maximum sum subarray of size K (Sliding Window - Easy)',
      language: 'typescript',
      code: `function maxSubarraySum(arr: number[], k: number): number {
  let maxSum = 0, windowSum = 0, windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
      `
    },
    {
      title: 'Longest substring with K distinct characters (Sliding Window - Medium)',
      language: 'typescript',
      code: `function longestSubstringKDistinct(s: string, k: number): number {
  let charFrequency: { [key: string]: number } = {};
  let maxLength = 0, windowStart = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;
    while (Object.keys(charFrequency).length > k) {
      let leftChar = s[windowStart];
      charFrequency[leftChar]--;
      if (charFrequency[leftChar] === 0) delete charFrequency[leftChar];
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
console.log(longestSubstringKDistinct("araaci", 2)); // Output: 4
      `
    },
  ];

  private currentSnippetSubject = new BehaviorSubject<CodeSnippet>(this.snippets[0]);
  currentSnippet$ = this.currentSnippetSubject.asObservable();

  getAllSnippets(): CodeSnippet[] {
    return this.snippets;
  }

  setCurrentSnippet(snippet: CodeSnippet) {
    this.currentSnippetSubject.next(snippet);
  }
}
