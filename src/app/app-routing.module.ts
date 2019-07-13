import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'chatbot', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'categories', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'category/:name', loadChildren: './category/category.module#CategoryPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
