import { Component, OnInit, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch-filters',
  templateUrl: './launch-filters.component.html',
  styleUrls: ['./launch-filters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LaunchFiltersComponent implements OnInit {

  YearsList = [];
  SuccessFulLaunch = [];
  SuccessFulLanding = [];
  SelectedFilters: any;
  StartYear = 2006; Count = 15;

  constructor(private router: Router, private render: Renderer2) {

    /// Raw Data Initilization of LaunchFiltesComponent.......
    /// Data Should be declare on constructor call....
    let i = 0;
    while (i < this.Count) {
      this.YearsList.push({
        Value: this.StartYear,
        IsSelected: false
      });
      this.StartYear = this.StartYear + 1;
      i = i + 1;
    }
    this.SuccessFulLaunch = [{ Value: 'True', IsSelected: false }, { Value: 'False', IsSelected: false }];
    this.SuccessFulLanding = [{ Value: 'True', IsSelected: false }, { Value: 'False', IsSelected: false }];
    this.SelectedFilters = {};
  }


   // Page Initlization with All Data....
  ngOnInit(): void {
   this.router.navigate([''], {
      queryParams: {
        limit: 100
      }
    });
  }

  // Make sure only one color should be change.
  SelectedButtons(ButtonsGroup, SelectedButton): any {
    ButtonsGroup.forEach(element => {
      element.IsSelected = false;
    });
    SelectedButton.IsSelected = true;
  }

  /// Passing Query Parms with selected buttons...
  evtFilter(ButtonsGroup, SelectedButton): any {
    this.SelectedButtons(ButtonsGroup, SelectedButton);
    this.router.navigate([''], {
      queryParams: {
        limit: 100,
        launch_success: this.SelectedFilters.sLaunch?.toLowerCase(),
        land_success: this.SelectedFilters.sLanding?.toLowerCase(),
        launch_year: this.SelectedFilters.Year
      }
    });
  }
}
