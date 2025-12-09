export type Language = 'en' | 'cn';

export interface LetterContent {
  greeting: string;
  body: string[];
  closing: string;
  signature: string;
}

export interface ContentMap {
  en: LetterContent;
  cn: LetterContent;
}