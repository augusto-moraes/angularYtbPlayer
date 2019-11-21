import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtFooterComponent } from './ft-footer.component';

describe('FtFooterComponent', () => {
  let component: FtFooterComponent;
  let fixture: ComponentFixture<FtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
