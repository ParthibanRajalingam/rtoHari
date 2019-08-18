import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




//components
import { AppComponent } from './app.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';

//Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



//Reactive forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Validations
import {ValidationService} from './validation.service';

//sharedModules
import {SharedModule} from './shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';

//RouteModule
import { RouteModule } from './route/route.module';
import { RouterModule } from '@angular/router';

//Feature modules
import { AdvancedSearchModule } from './featureModules/advanced-search/advanced-search.module';
import { ContactUsModule } from './featureModules/contact-us/contact-us.module';

//apiService
//import { HttpModule } from '@angular/http';

//Interceptor
import {HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './service/api.interceptor';

import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicSearchComponent,
    TabsComponent,
    
    HeadersComponent,
    FootersComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,ReactiveFormsModule, FormsModule, MatInputModule, SharedModule, MatTabsModule, RouteModule,
    RouterModule, AdvancedSearchModule, HttpClientModule, ContactUsModule, MatCardModule, MatButtonModule
  ],
  providers: [ValidationService,
      { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
