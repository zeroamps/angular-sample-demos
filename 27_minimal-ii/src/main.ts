import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: "app-root",
  template: `<h1>Hello!</h1>`,
})
class AppComponent {}

@NgModule({
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
