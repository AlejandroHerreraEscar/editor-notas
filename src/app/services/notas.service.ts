// src/app/services/notas.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private notasLocalStorageKey = 'notas';

  constructor() { }

  private obtenerNotasFromLocalStorage(): any[] {
    const notasJson = localStorage.getItem(this.notasLocalStorageKey);
    return notasJson ? JSON.parse(notasJson) : [];
  }

  private guardarNotasInLocalStorage(notas: any[]): void {
    localStorage.setItem(this.notasLocalStorageKey, JSON.stringify(notas));
  }

  obtenerNotas(): any[] {
    return this.obtenerNotasFromLocalStorage();
  }

  guardarNota(nuevaNota: any): void {
    const notas = this.obtenerNotasFromLocalStorage();
    notas.push(nuevaNota);
    this.guardarNotasInLocalStorage(notas);
  }

  editarNota(index: number, notaEditada: any): void {
    const notas = this.obtenerNotasFromLocalStorage();
    notas[index] = notaEditada;
    this.guardarNotasInLocalStorage(notas);
  }

  eliminarNota(index: number): void {
    const notas = this.obtenerNotasFromLocalStorage();
    notas.splice(index, 1);
    this.guardarNotasInLocalStorage(notas);
  }
}


