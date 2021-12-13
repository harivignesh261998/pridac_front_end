import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCollectionsComponent } from './project-collections.component';

describe('ProjectCollectionsComponent', () => {
  let component: ProjectCollectionsComponent;
  let fixture: ComponentFixture<ProjectCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
