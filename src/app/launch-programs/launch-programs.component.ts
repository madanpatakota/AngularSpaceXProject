import { Component, OnInit, OnDestroy } from '@angular/core';
import { LaunchFilterService } from 'src/app/launch-filters/launch-filter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-launch-programs',
  templateUrl: './launch-programs.component.html',
  styleUrls: ['./launch-programs.component.css']
})
export class LaunchProgramsComponent implements OnInit, OnDestroy {

  Programs = [];
  spinner = true;
  noDataAvailble = false;
  private subscription: Subscription = null;
  constructor(
    private launchFilterService: LaunchFilterService,
    private router: Router,
    private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    /// when Router is changing queryparams captures the router Url...
    this.activateRouter.queryParams.subscribe(params => {
      const URL = this.router.url.replace('/', '');
      this.spinner = false;
      /// using Subscription for unsubscribe method
      /// Subscribing the response data from observable service.
      this.subscription = this.launchFilterService.getLaunches(URL, params).
        subscribe((Responsedata: any) => {
          this.Programs = [];
          Responsedata.forEach(element => {
            this.Programs.push({
              mission_ids: element.mission_id,
              launch_year: element.launch_year,
              launch_success: element.launch_success,
              land_success: element.rocket.first_stage.cores[0].land_success,
              mission_patch_small: element.links.mission_patch_small,
              mission_name: element.mission_name,
              flight_number: element.flight_number,
            });
          });
        },
          (error: HttpErrorResponse) => {
            console.log(error.message);
          },
          () => {
            this.noDataAvailble = this.Programs.length === 0 ? true : false;
            this.spinner = true;
          });
    });
  }

  // Unsubscribing the subscription
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
