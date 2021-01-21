import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'new-noticia',
    loadChildren: () => import('./pages/new-noticia/new-noticia.module').then( m => m.NewNoticiaPageModule)
  },
  {
    path: 'new-recomendacion',
    loadChildren: () => import('./pages/new-recomendacion/new-recomendacion.module').then( m => m.NewRecomendacionPageModule)
  },
  {
    path: 'recomendaciones',
    loadChildren: () => import('./pages/recomendaciones/recomendaciones.module').then( m => m.RecomendacionesPageModule)
  },
  {
    path: 'sintomas',
    loadChildren: () => import('./pages/sintomas/sintomas.module').then( m => m.SintomasPageModule)
  },
  {
    path: 'new-sintoma',
    loadChildren: () => import('./pages/new-sintoma/new-sintoma.module').then( m => m.NewSintomaPageModule)
  },
  {
    path: 'sobre-covid',
    loadChildren: () => import('./pages/sobre-covid/sobre-covid.module').then( m => m.SobreCovidPageModule)
  },
  {
    path: 'new-sobre-covid',
    loadChildren: () => import('./pages/new-sobre-covid/new-sobre-covid.module').then( m => m.NewSobreCovidPageModule)
  },
  {
    path: 'centros-atencion',
    loadChildren: () => import('./pages/centros-atencion/centros-atencion.module').then( m => m.CentrosAtencionPageModule)
  },
  {
    path: 'newcentros-atencion',
    loadChildren: () => import('./pages/newcentros-atencion/newcentros-atencion.module').then( m => m.NewcentrosAtencionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
