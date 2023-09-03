import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitRoutingModule } from './core/modules/init/init-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), InitRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
