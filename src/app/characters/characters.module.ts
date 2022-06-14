import { CharacterCardComponent } from '../components/character-card/character-card.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CommonModule } from '@angular/common';
import { CropTextPipe } from '../pipes/crop-text.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    CharacterCardComponent,
    CropTextPipe
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class CharactersModule {}
