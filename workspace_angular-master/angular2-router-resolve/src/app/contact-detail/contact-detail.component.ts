import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../service/contact.service';
import { Contact } from '../interface/contact';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact;

  constructor(private contactsService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("this.route.snapshot.params = " + JSON.stringify(this.route.snapshot.params));
    let id = this.route.snapshot.params['id']; // 스프링의 @PathVariable과 같음.

    this.contactsService.getContact(id).subscribe(contact => { // 3초 후에 데이터를 받아온다.
      this.contact = contact;
      console.log("this.contact = " + JSON.stringify(this.contact));
    });
  }

}
