import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyGoFilterComponent } from './easy-go-filter.component';

describe('EasyGoFilterComponent', () => {
  let component: EasyGoFilterComponent;
  let fixture: ComponentFixture<EasyGoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyGoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyGoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
