import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const params = new URLSearchParams(window.location.search);
let accessToken = params.get('tappAccessToken');
let refreshToken = params.get('tappRefreshToken');
let idToken = params.get('tappIdToken');
if (accessToken && accessToken.endsWith('/')) {
  accessToken = accessToken.slice(0, -1);
}
if (refreshToken && refreshToken.endsWith('/')) {
  refreshToken = refreshToken.slice(0, -1);
}
if (idToken && idToken.endsWith('/')) {
  idToken = idToken.slice(0, -1);
}
if (accessToken) {
  window['tappAccessToken'] = accessToken;
}
if (refreshToken) {
  window['tappRefreshToken'] = refreshToken;
}
if (idToken) {
  window['tappIdToken'] = idToken;
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
