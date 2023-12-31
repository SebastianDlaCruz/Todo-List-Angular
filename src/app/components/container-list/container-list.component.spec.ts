import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListComponent } from './container-list.component';

describe('ContainerListComponent', () => {
  let component: ContainerListComponent;
  let fixture: ComponentFixture<ContainerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerListComponent]
    });
    fixture = TestBed.createComponent(ContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
