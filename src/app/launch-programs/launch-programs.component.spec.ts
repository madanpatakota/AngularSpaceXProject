import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramsComponent } from './launch-programs.component';

describe('LaunchProgramsComponent', () => {
  let component: LaunchProgramsComponent;
  let fixture: ComponentFixture<LaunchProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
