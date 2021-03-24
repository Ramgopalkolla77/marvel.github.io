import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoriesCardComponent } from './stories-card.component';


describe('StoriesCardComponent', () => {
  let component: StoriesCardComponent;
  let fixture: ComponentFixture<StoriesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
