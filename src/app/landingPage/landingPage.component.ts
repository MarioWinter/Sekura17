import { Component } from '@angular/core';


@Component({
	selector: "app-landingPage", // ist ein Selektor um es im anderen HTML aufzurufen
	standalone: true,
	imports: [], // Wenn andere Componente oder Services benutzt werden sollen
	template: /*html*/`
	<section>
		<h1 class="fontRaleway">SAKURA RAMEN</h1>
		<h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
	</section>
	`, // ist die grundvorlage der Komponent HTML
	styleUrls: ["./landingPage.component.scss"] // Vorlage des Style der Template
})


export class LandingPageComponent {

}
