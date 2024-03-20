import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralSidebarComponent } from './lateral-sidebar.component';

describe('LateralSidebarComponent', () => {
  let component: LateralSidebarComponent;
  let fixture: ComponentFixture<LateralSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LateralSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
