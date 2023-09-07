import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [CommonModule],
  template: `<h1>Hello!</h1>`,
})
class AppComponent {}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
