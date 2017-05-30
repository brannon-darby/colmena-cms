import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

import * as app from './state'
import { auth, AuthEffects } from '@colmena/admin-auth'
import { layout, LayoutEffects } from '@colmena/admin-layout'

@NgModule({
  imports: [
    StoreModule.provideStore({
      app: app.reducer,
      auth,
      layout,
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.runAfterBootstrap(app.AppEffects),
    EffectsModule.runAfterBootstrap(AuthEffects),
    EffectsModule.runAfterBootstrap(LayoutEffects),
  ],
})
export class AppStoreModule { }
