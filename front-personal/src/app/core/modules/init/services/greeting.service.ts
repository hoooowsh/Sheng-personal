import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  greetings = [
    'Hello There!',
    '你好！', // Mandarin Chinese
    'नमस्ते!', // Hindi
    '¡Hola!', // Spanish
    'Salut!', // French
    'مرحبا!', // Modern Standard Arabic
    'নমস্কার!', // Bengali
    'Привет!', // Russian
    'Olá!', // Portuguese
    'سلام!', // Urdu
    'Halo!', // Indonesian
    'Habari!', // Swahili
    'こんにちは！', // Japanese
    '안녕하세요!', // Korean
  ];
  constructor() {}

  // return all greetings
  getGreetings(): string[] {
    return this.greetings;
  }
}
