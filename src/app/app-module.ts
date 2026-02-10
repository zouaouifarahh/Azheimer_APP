import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home1 } from './frontoffice/home1/home1';
import { Home2 } from './backoffice/home2/home2';
import { Page404FrontPage } from './frontoffice/404/404';
import { AboutFrontPage } from './frontoffice/about/about';
import { AppointmentFrontPage } from './frontoffice/appointment/appointment';
import { ContactFrontPage } from './frontoffice/contact/contact';
import { DepartmentDetailsFrontPage } from './frontoffice/department-details/department-details';
import { DepartmentsFrontPage } from './frontoffice/departments/departments';
import { DoctorsFrontPage } from './frontoffice/doctors/doctors';
import { FaqFrontPage } from './frontoffice/faq/faq';
import { GalleryFrontPage } from './frontoffice/gallery/gallery';
import { PrivacyFrontPage } from './frontoffice/privacy/privacy';
import { ServiceDetailsFrontPage } from './frontoffice/service-details/service-details';
import { ServicesFrontPage } from './frontoffice/services/services';
import { StarterPageFrontPage } from './frontoffice/starter-page/starter-page';
import { TermsFrontPage } from './frontoffice/terms/terms';
import { TestimonialsFrontPage } from './frontoffice/testimonials/testimonials';
import { ActivitiesPage } from './backoffice/activities/activities';
import { CalendarPage } from './backoffice/calendar/calendar';
import { ChatPage } from './backoffice/chat/chat';
import { CustomersPage } from './backoffice/customers/customers';
import { DealsPage } from './backoffice/deals/deals';
import { EmployeePage } from './backoffice/employee/employee';
import { FinancePage } from './backoffice/finance/finance';
import { ProfilePage } from './backoffice/profile/profile';
import { ReviewPage } from './backoffice/review/review';
import { SalesPage } from './backoffice/sales/sales';
import { SettingsPage } from './backoffice/settings/settings';
import { TaskManagementPage } from './backoffice/task-management/task-management';
import { TeamManagementPage } from './backoffice/team-management/team-management';
import { UserManagementPage } from './backoffice/user-management/user-management';

@NgModule({
  declarations: [
    App,
    Home1,
    Home2,
    Page404FrontPage,
    AboutFrontPage,
    AppointmentFrontPage,
    ContactFrontPage,
    DepartmentDetailsFrontPage,
    DepartmentsFrontPage,
    DoctorsFrontPage,
    FaqFrontPage,
    GalleryFrontPage,
    PrivacyFrontPage,
    ServiceDetailsFrontPage,
    ServicesFrontPage,
    StarterPageFrontPage,
    TermsFrontPage,
    TestimonialsFrontPage,
    ActivitiesPage,
    CalendarPage,
    ChatPage,
    CustomersPage,
    DealsPage,
    EmployeePage,
    FinancePage,
    ProfilePage,
    ReviewPage,
    SalesPage,
    SettingsPage,
    TaskManagementPage,
    TeamManagementPage,
    UserManagementPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
