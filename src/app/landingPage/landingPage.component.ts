import { Component } from '@angular/core';


@Component({
	selector: "app-landingPage", // ist ein Selektor um es im anderen HTML aufzurufen
	standalone: true,
	imports: [], // Wenn andere Componente oder Services benutzt werden sollen
	template: "<H1>Hallo Welt</H1>", // ist die grundvorlage der Komponent HTML
	styles: ["h1 {color: red;}"] // Vorlage des Style der Template
})


export class LandingPageComponent {

}
