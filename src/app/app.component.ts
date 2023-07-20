// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { NotasService } from './services/notas.service';

interface Nota {
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notaActual: Nota = { titulo: '', contenido: '' };
  notas: Nota[] = [];
  editandoNota = false;
  notaEditIndex: number | null = null;

  constructor(private notasService: NotasService) {}

  ngOnInit(): void {
    this.notas = this.notasService.obtenerNotas();
  }

  guardarNota() {
    if (this.notaActual.titulo.trim() !== '' && this.notaActual.contenido.trim() !== '') {
      this.notasService.guardarNota(this.notaActual);
      this.limpiarFormulario();
    }
  }

  actualizarNota() {
    if (this.notaEditIndex !== null) {
      this.notasService.editarNota(this.notaEditIndex, this.notaActual);
      this.limpiarFormulario();
      this.editandoNota = false;
    }
  }

  cancelarEdicion() {
    this.limpiarFormulario();
    this.editandoNota = false;
  }

  editarNota(index: number) {
    this.editandoNota = true;
    this.notaEditIndex = index;
    this.notaActual = { ...this.notas[index] };
  }

  eliminarNota(index: number) {
    if (confirm('¿Estás seguro de eliminar esta nota?')) {
      this.notasService.eliminarNota(index);
      this.limpiarFormulario();
      this.editandoNota = false;
    }
  }

  private limpiarFormulario() {
    this.notaActual = { titulo: '', contenido: '' };
    this.notaEditIndex = null;
  }
}



