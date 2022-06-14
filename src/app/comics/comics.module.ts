import { ComicCardComponent } from '../components/comic-card/comic-card.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent, ListadoComponent, ComicCardComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class ComicsModule {}
