import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class DeputadoService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = "https://dadosabertos.camara.leg.br/api/v2/";
  }

  obterDeputados(): Observable<any> {
    return this.http.get<any>(`${this.URL}deputados?ordem=ASC&ordenarPor=nome`);
  }

  pesquisarSigla(s: HTMLInputElement): Observable<any> {
    return this.http.get<any>(`${this.URL}deputados?siglaPartido=${s.value}&ordem=ASC&ordenarPor=nome`);
  }
}
