import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicCountry } from 'src/app/core/models/OlympicCountry';
import { BoxedTextComponent } from 'src/app/core/components/BoxedTextComponent';
import { RowComponent } from 'src/app/core/components/RowComponent';
import { Router } from '@angular/router';

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
  @Input({required: true}) countryId!: number;


  olympicsSubscription: Subscription | null = null;

  country: OlympicCountry = {id: -1, country: "Invalid Country", participations: []};

  // Icons
  // Chart settings.
  data: Array<ChartData> = [];
  legend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  xAxisLabel: string = "date";
  yAxisLabel: string = "test";
  totalAthletes: number = 0;
  totalMedals: number = 0;

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    console.log("id: ", this.countryId)
    this.olympicsSubscription =
        this.olympics$.subscribe((countries: Array<OlympicCountry>) => {
          let found = countries.find(country => country.id == this.countryId);
          if (found != null) {
            this.country = found;
          } else {
            this.router.navigate(['not-found'])
          }
          this.data = [
            {
              name: "medals",
              series: this.country.participations.map(part => {
                return {
                  name: part.year,
                  value: part.medalsCount,
                };
              }),
            },
            {
              name: "athletes",
              series: this.country.participations.map(part => {
                return {
                  name: part.year,
                  value: part.athleteCount,
                };
              }),
            },
          ];

          this.totalAthletes = this.country
            .participations
            .reduce((tot, part) => tot + part.athleteCount, 0);
          this.totalMedals = this.country
            .participations
            .reduce((tot, part) => tot + part.medalsCount, 0);
        }
    );


  }

  ngOnDestroy(): void {
    if (this.olympicsSubscription != null) {
      this.olympicsSubscription.unsubscribe()
    }
  }

}
