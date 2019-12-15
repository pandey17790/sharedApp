import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import { ChangetextDirective } from './directive/changetext.directive';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AboutComponent } from './sample/about/about.component';
import { BlogComponent } from './sample/blog/blog.component';
import { HomeComponent } from './sample/home/home.component';
import { ErrorComponent } from './error/error.component';
import { FloorPipePipe } from './pipes/floorpipe.pipe';
import { ExampleComponent } from './sample/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ChangetextDirective,
    ChildComponent,
    ParentComponent,
    AboutComponent,
    BlogComponent,
    HomeComponent,
    ErrorComponent,
    FloorPipePipe,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
