import { Component } from '@angular/core';


@Component({
	selector: "app-landingPage", // ist ein Selektor um es im anderen HTML aufzurufen
	standalone: true,
	imports: [], // Wenn andere Componente oder Services benutzt werden sollen
	template: `
	<section>
		<H1>SAKURA RAMEN</H1>
		<H2>BEST RAMEN IN TOWN</H2>
	</section>
	`, // ist die grundvorlage der Komponent HTML
	styleUrls: ["./landingPage.component.scss"] // Vorlage des Style der Template
})


export class LandingPageComponent {

}
