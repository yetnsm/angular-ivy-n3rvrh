import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DeputadoService } from './model/deputado.service';
import { ObterDeputadosComponent } from './obter-deputados/obter-deputados.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ObterDeputadosComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DeputadoService]
})
export class AppModule { }
