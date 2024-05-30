import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPicsComponent } from './fav-pics.component';

describe('FavPicsComponent', () => {
  let component: FavPicsComponent;
  let fixture: ComponentFixture<FavPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
