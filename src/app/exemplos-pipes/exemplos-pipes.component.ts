import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms',
    rating: 4.34567,
    numeroPaginas: 314,
    preco: 112.99,
    dataLancamento: new Date(2014, 12, 27),
    url: 'https://www.amazon.com.br/dp/B00OYTCT02/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
