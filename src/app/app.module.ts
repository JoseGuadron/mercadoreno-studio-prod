import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    ClientesComponent,
    NosotrosComponent,
    ContactanosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:InicioComponent},
      {path:'servicios', component:ServiciosComponent},
      {path:'clientes', component:ClientesComponent},
      {path:'nosotros', component:NosotrosComponent},
      {path:'contactanos', component:ContactanosComponent},
      {path:'**', redirectTo:'/', pathMatch:'full'}
   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
