import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListMedicamentoComponent } from './components/inventory/list-medicamento.component';
import { AddMedicamentoComponent } from './components/add-medicamento/add-medicamento.component';
import { DeleteMedicamentoComponent } from './components/delete-medicamento/delete-medicamento.component';
import { EditMedicamentoComponent } from './components/edit-medicamento/edit-medicamento.component';
import { ViewMedicamentoComponent } from './components/view-medicamento/view-medicamento.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'list-medicamento', component: ListMedicamentoComponent},
{path: 'add-medicamento', component: AddMedicamentoComponent},
{path: 'delete-medicamento/:id', component: DeleteMedicamentoComponent},
{path: 'edit-medicamento/:id', component: EditMedicamentoComponent},
{path: 'view-medicamento/:id', component: ViewMedicamentoComponent},
{ path: '**', component: HomeComponent, pathMatch: 'full' }
];
