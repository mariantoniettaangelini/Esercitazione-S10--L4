import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePicComponent } from './single-pic.component';

describe('SinglePicComponent', () => {
  let component: SinglePicComponent;
  let fixture: ComponentFixture<SinglePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglePicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
