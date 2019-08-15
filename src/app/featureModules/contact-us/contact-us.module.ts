import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactModule } from './contact.module';

@NgModule({
  imports: [
    CommonModule, ContactModule
  ],
  declarations: [ContactUsComponent],
  exports : [ContactUsComponent]
})
export class ContactUsModule { }
