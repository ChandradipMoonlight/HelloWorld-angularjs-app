// app.module.ts -> Indicating this is the TypeScript file.
//                  Essentially Provides Strong Type Checking.

// Importing core modules of Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Whenever CLI is used to generate new component and services, it will 
 * automatically update this file to import and add them here.
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Further using @NgModule decorater we provide additional metadata to specify the components,
 * the Services, the Imports, etc.. Further Decoraters are used while processing, while
 * processing, instantiation and at runtime.
 */
@NgModule({

  /**
   * Components are added here. Essentially the classes that has views, they
   * are components, Directives and Pipes.
   */
  declarations: [
    AppComponent
  ],
  
  // Various imports needed for Application can be added here.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  // Typically Services like HTTP-Services are added to Providers.
  providers: [],

  /**
   * The root component which is main view of the application. Only the root Module has 
   * module has this property and it indicates the component that's gonna be bootstrapped.
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
