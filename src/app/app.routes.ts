import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { ErrorComponent } from './error/error.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:'', redirectTo:"home",pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'project', component:ProjectComponent},
    {path:'resume', component:ResumeComponent},
    {path:'project', component:ProjectComponent},
    {path:'skills', component:SkillsComponent},
    {path:'admin', component:AdminComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'**', component:ErrorComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports:[RouterModule],
})
export class AppRoutingModule{}