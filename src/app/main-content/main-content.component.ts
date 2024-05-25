import { Component, importProvidersFrom } from "@angular/core";
import { LandingPageComponent } from "./landing-page/landingPage.component";
import { HowToOrderComponent } from "./how-to-order/how-to-order.component";
import { OurMenuComponent } from "./our-menu/our-menu.component";
import { FindUsAtComponent } from "./find-us-at/find-us-at.component";
import { FooterComponent } from "./../shared/components/footer/footer.component";

@Component({
    selector: "app-main-content",
    standalone: true,
    imports: [LandingPageComponent, HowToOrderComponent, OurMenuComponent, FindUsAtComponent, FooterComponent],
    templateUrl: "./main-content.component.html",
    styleUrl: "./main-content.component.scss",
})
export class MainContentComponent {}
