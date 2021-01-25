import { Component, OnInit } from "@angular/core";
import { Deputado } from "../model/deputado";
import { DeputadoService } from "../model/deputado.service";

@Component({
  selector: "app-obter-deputados",
  templateUrl: "./obter-deputados.component.html",
  styleUrls: ["./obter-deputados.component.css"]
})
export class ObterDeputadosComponent implements OnInit {
  constructor(private dep: DeputadoService) {}

  deputados: Deputado[];

  ngOnInit() {
    // this.dep.obterDeputados().subscribe(
    //   (res) => {
    //     this.deputados = res.dados;
    //   }
    // );
    this.deputados = [];
  }

  pesquisarSigla(s: HTMLInputElement) {
    return this.dep.pesquisarSigla(s).subscribe(
      (res) => {
        this.deputados = res.dados;
      }
    );
  }
}