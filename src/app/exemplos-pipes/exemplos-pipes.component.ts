import {Component, OnInit} from '@angular/core';
import {Observable, interval} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  constructor() {
  }

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms',
    rating: 4.34567,
    numeroPaginas: 314,
    preco: 112.99,
    dataLancamento: new Date(2014, 12, 27),
    url: 'https://www.amazon.com.br/dp/B00OYTCT02/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1'
  };

  livros = ['Angular 2', 'Java 8'];
  filtro!: string;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assíncrono'), 2000);
  });

  ngOnInit(): void {
  }

  addCurso(value: string): void {
    this.livros.push(value);
    console.log('adding course: ' + value + this.livros);
  }

  getCursos() {
    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v: string) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }
}
