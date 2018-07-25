import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Project Components
import { HomeComponent } from "./home/home.component";
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";
import { CustomersComponent } from "./customers/customers.component";

const appRoutes: Routes = [
  // Getting Started
  { path: "", component: HomeComponent },

  // Edit Customer
  { path: "edit-customer/:id", component: EditCustomerComponent },

  // Customer List
  { path: "customers", component: CustomersComponent }

  // otherwise redirect to home
  // { path: '**', redirectTo: '' },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
