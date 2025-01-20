import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicCountry } from 'src/app/core/models/OlympicCountry';
import { LegendPosition } from '@swimlane/ngx-charts';
import { faMedal } from "@fortawesome/free-solid-svg-icons"

/** Type for the data of the pie chart. */
interface ChartData {
  name: string,
  value: number,
  extra: { countryId: number }
}

/**
 * Maps the country to the ngx-charts chart data
 */
const countryToChardData = (country: OlympicCountry): ChartData => {
  let totalMedalCount = country.participations.reduce((tot, part) => tot + part.medalsCount, 0);
  return {
    name: country.country,
    value: totalMedalCount,
    extra: { countryId: country.id }
  };
}


/**
 * Component of the home page.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../page.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Array<OlympicCountry>> = of([]);
  olympics_subscription: Subscription | null = null;

  view: [number, number] = [0 , 0 ];

  // === Chart settings === //
  data: Array<ChartData> = [];
  showLabels: boolean = true;
  trimLabels: boolean = false;
  showLegend: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;
  faMedal = faMedal;

  constructor(private olympicService: OlympicService, private router: Router) { }

  // On initialisation subscribe to the olympics and get the total number of medals for each country.
  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.olympics_subscription = this.olympics$.subscribe((countries: Array<OlympicCountry>) => {
      this.data = countries.map(countryToChardData);
    });
  }

  // On Destroy don't forget to destroy the Subscription.
  ngOnDestroy(): void {
    if (this.olympics_subscription != null) {
      this.olympics_subscription.unsubscribe()
    }
  }

  // Navigate to the country details page on click.
  onChartSelect(data: ChartData): void {
    this.router.navigate(['details', data.extra.countryId])
  }

  onResize(entry: readonly ResizeObserverEntry[]): void {
    let width = entry[0].contentRect.width;
    if (width > 800) {
      width = width * 0.75;
    }
    this.view = [
      width,
      entry[0].contentRect.height,
    ];
  }
}
