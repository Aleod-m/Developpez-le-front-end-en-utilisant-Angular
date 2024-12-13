import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ComponentLibModule } from 'src/app/core/components/component-lib.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ComponentLibModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
