import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: Home1 },
  { path: '404', component: Page404FrontPage },
  { path: 'about', component: AboutFrontPage },
  { path: 'appointment', component: AppointmentFrontPage },
  { path: 'contact', component: ContactFrontPage },
  { path: 'department-details', component: DepartmentDetailsFrontPage },
  { path: 'departments', component: DepartmentsFrontPage },
  { path: 'doctors', component: DoctorsFrontPage },
  { path: 'faq', component: FaqFrontPage },
  { path: 'gallery', component: GalleryFrontPage },
  { path: 'privacy', component: PrivacyFrontPage },
  { path: 'service-details', component: ServiceDetailsFrontPage },
  { path: 'services', component: ServicesFrontPage },
  { path: 'starter-page', component: StarterPageFrontPage },
  { path: 'terms', component: TermsFrontPage },
  { path: 'testimonials', component: TestimonialsFrontPage },
  { path: 'admin', component: Home2 },
  { path: 'admin/activities', component: ActivitiesPage },
  { path: 'admin/calendar', component: CalendarPage },
  { path: 'admin/chat', component: ChatPage },
  { path: 'admin/customers', component: CustomersPage },
  { path: 'admin/deals', component: DealsPage },
  { path: 'admin/employee', component: EmployeePage },
  { path: 'admin/finance', component: FinancePage },
  { path: 'admin/profile', component: ProfilePage },
  { path: 'admin/review', component: ReviewPage },
  { path: 'admin/sales', component: SalesPage },
  { path: 'admin/settings', component: SettingsPage },
  { path: 'admin/task-management', component: TaskManagementPage },
  { path: 'admin/team-management', component: TeamManagementPage },
  { path: 'admin/user-management', component: UserManagementPage },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
