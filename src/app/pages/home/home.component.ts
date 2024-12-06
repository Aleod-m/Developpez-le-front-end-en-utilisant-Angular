import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicCountry } from 'src/app/core/models/OlympicCountry';
import { BoxedTextComponent } from 'src/app/core/components/BoxedTextComponent';
import { RowComponent } from 'src/app/core/components/RowComponent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Array<OlympicCountry>> = of([]);
  // Chart settings.
  data: Array<{name: string, value: number}> = [];
  show_labels: boolean = true;
  trim_labels: boolean = false;
  show_legend: boolean = true;
  legend_position: string = 'below';


  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.olympics$.subscribe((countries: Array<OlympicCountry>) => {
      this.data = countries.map((country: OlympicCountry) => {
        let total_medal_count = country.participations.reduce((tot, part) => tot + part.medalsCount, 0);
        return {
          name: country.country,
          value:  total_medal_count,
        };
      });
    });
  }
}
