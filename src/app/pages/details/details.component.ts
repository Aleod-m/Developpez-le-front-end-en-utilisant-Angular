import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicCountry } from 'src/app/core/models/OlympicCountry';
import { Router } from '@angular/router';
import { LegendPosition } from '@swimlane/ngx-charts';

/** Type for the data of the line chart. */
interface ChartData {
  name: string,
  series: Array<{ name: number, value: number }>
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../page.component.scss'],
})
export class DetailsComponent implements OnInit {

  public olympics$: Observable<Array<OlympicCountry>> = of([]);
  olympicsSubscription: Subscription | null = null;

  // Path parameter.
  @Input({ required: true }) countryId!: number;
  view: [number, number] = [0 , 0 ];

  // === Computed properties === //
  totalAthletes: number = 0;
  totalMedals: number = 0;
  name: string = "";
  numberOfParticipations: number = 0;

  // === Chart settings === //
  data: Array<ChartData> = [];
  legend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  xAxisLabel: string = "date";
  legendPosition: LegendPosition = LegendPosition.Below;

  constructor(private olympicService: OlympicService, private router: Router) { }

  // On initialisation we subscribe to the olympics and get the total number of medals for each country.
  ngOnInit(): void {
    if (!this.countryId) {
        this.router.navigate(['not-found'])
    }

    this.olympics$ = this.olympicService.getOlympics();

    this.olympicsSubscription =
      this.olympics$.subscribe((countries: Array<OlympicCountry>) => {
        let found = countries.find(country => country.id == this.countryId);
        if (found) {
          this.name = found.country;
          this.numberOfParticipations = found.participations.length;
          this.data = [
            {
              name: "medals   ",
              series: found.participations.map(part => {
                return {
                  name: part.year,
                  value: part.medalsCount,
                };
              }),
            },
            {
              name: "athletes",
              series: found.participations.map(part => {
                return {
                  name: part.year,
                  value: part.athleteCount,
                };
              }),
            },
          ];

          // athletes count.
          this.totalAthletes = found
            .participations
            .reduce((tot, part) => tot + part.athleteCount, 0);
          // medals count.
          this.totalMedals = found
            .participations
            .reduce((tot, part) => tot + part.medalsCount, 0);
        } else {
          this.router.navigate(['not-found'])
        }
      }
      );
  }

  // On Destroy don't forget to destroy the Subscription.
  ngOnDestroy(): void {
    if (this.olympicsSubscription != null) {
      this.olympicsSubscription.unsubscribe()
    }
  }

  // Formating for the dates in the graph.
  format(val: number): string {
    return val + '';
  }

  onResize(entry: readonly ResizeObserverEntry[]): void {
    let width = entry[0].contentRect.width;
    console.log(width)
    if (width > 800) {
      width = width * 0.75;
    }
    this.view = [
      width,
      entry[0].contentRect.height,
    ];
  }
}
