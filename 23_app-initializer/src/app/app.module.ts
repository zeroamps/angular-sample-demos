import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

function initializePosts(service: AppService) {
  return () => service.listPosts();
}

function initializeComments(service: AppService) {
  return () => service.listComments();
}

function initializeAlbums(service: AppService) {
  return () => service.listAlbums();
}

function initializePhotos(service: AppService) {
  return () => service.listPhotos();
}

function initializeTodos(service: AppService) {
  return () => service.listTodos();
}

function initializeUsers(service: AppService) {
  return () => service.listUsers();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializePosts,
      deps: [AppService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeComments,
      deps: [AppService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAlbums,
      deps: [AppService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializePhotos,
      deps: [AppService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTodos,
      deps: [AppService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeUsers,
      deps: [AppService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
