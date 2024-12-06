import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicCountry } from 'src/app/core/models/OlympicCountry';
import { BoxedTextComponent } from 'src/app/core/components/BoxedTextComponent';
import { RowComponent } from 'src/app/core/components/RowComponent';

interface ChartData {
  name: string,
  value: number,
  extra: { countryId: number }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Array<OlympicCountry>> = of([]);
  olympics_subscription: Subscription | null = null;
  // Chart settings.
  data: Array<ChartData> = [];
  showLabels: boolean = true;
  trimLabels: boolean = false;
  showLegend: boolean = true;
  legendPosition: string = 'below';


  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.olympics_subscription = this.olympics$.subscribe((countries: Array<OlympicCountry>) => {
      this.data = countries.map((country: OlympicCountry) => {
        let totalMedalCount = country.participations.reduce((tot, part) => tot + part.medalsCount, 0);
        return {
          name: country.country,
          value:  totalMedalCount,
          extra: {countryId: country.id}
        };
      });
    });
  }

  ngOnDestroy(): void {
    if (this.olympics_subscription != null) {
      this.olympics_subscription.unsubscribe()
    }
  }

  onChartSelect(data: ChartData): void {
    this.router.navigate(['details', data.extra.countryId])
  }
}
