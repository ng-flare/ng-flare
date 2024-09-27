import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgFlareComponent } from './ng-flare.component';

describe('NgFlareComponent', () => {
  let component: NgFlareComponent;
  let fixture: ComponentFixture<NgFlareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFlareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgFlareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
