import { Routes } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDataComponent } from './contact-data/contact-data.component';

import { ContactResolveGuardService } from './guard/contact-resolve-guard.service';

export const AppRoutes: Routes = [ // 배열을 export 함.
  {
    path: '', component: ContactListComponent
  },
  { path: 'contact/:id', component: ContactDetailComponent },
  // :id 라느 것은 이 자리에 들어오는 문자열은 가변적이며 id에 전달한다는 뜻이다.
  // 무언가 문자열이 있기만 하면 된다.
  {
    // 아래는 나쁜 코드.
    path: 'info/:id', component: ContactInfoComponent,
    resolve: {
      yyy: 'infoService'
    }
  },
  {
    // 이렇게 코드를 짜자.
    path: 'data/:id',
    resolve: {
      contact: ContactResolveGuardService
    },
    component: ContactDataComponent
  },
];
