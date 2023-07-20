// src/app/services/notas.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private notasLocalStorageKey = 'notas';

  constructor() { }

  obtenerNotas(): any[] {
    const notasJson = localStorage.getItem(this.notasLocalStorageKey);
    return notasJson ? JSON.parse(notasJson) : [];
  }

  guardarNota(nuevaNota: any): void {
    const notas = this.obtenerNotas();
    notas.push(nuevaNota);
    localStorage.setItem(this.notasLocalStorageKey, JSON.stringify(notas));
  }

  editarNota(index: number, notaEditada: any): void {
    const notas = this.obtenerNotas();
    notas[index] = notaEditada;
    localStorage.setItem(this.notasLocalStorageKey, JSON.stringify(notas));
  }

  eliminarNota(index: number): void {
    const notas = this.obtenerNotas();
    notas.splice(index, 1);
    localStorage.setItem(this.notasLocalStorageKey, JSON.stringify(notas));
  }
}

