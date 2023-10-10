import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // Empty path signifies the default route
    redirectTo: 'current-weather', // Redirect to 'current-weather' path
    pathMatch: 'full' // Full URL match
  },
  {
    path: 'current-weather',
    loadChildren: () => import('../app/current-weather/current-weather.module').then( m => m.CurrentWeatherPageModule)
  },
  {
    path: 'forecast',
    loadChildren: () => import('./forecast/forecast.module').then( m => m.ForecastPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
