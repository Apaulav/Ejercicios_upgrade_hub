import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrafComponent } from './parraf.component';

describe('ParrafComponent', () => {
  let component: ParrafComponent;
  let fixture: ComponentFixture<ParrafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
