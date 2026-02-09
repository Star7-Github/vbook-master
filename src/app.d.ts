/// <reference types="@blueos" />
type Router = typeof import('@blueos.app.appmanager.router');

declare const global: {
  router: Router;
}

declare const Promise: typeof Promise