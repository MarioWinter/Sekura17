import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: "app-landingPage", // ist ein Selektor um es im anderen HTML aufzurufen
    standalone: true,
    imports: [NavbarComponent], // Wenn andere Componente oder Services benutzt werden sollen
    template: /*html*/ `
        <section>
            <app-navbar></app-navbar>
            <h1 class="fontRaleway">SAKURA RAMEN</h1>
            <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
        </section>
    `, // ist die grundvorlage der Komponent HTML
    styleUrls: ["./landingPage.component.scss"], // Vorlage des Style der Template
})
export class LandingPageComponent {}
