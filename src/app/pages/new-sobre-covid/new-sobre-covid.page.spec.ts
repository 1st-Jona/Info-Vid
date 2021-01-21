import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewSobreCovidPage } from './new-sobre-covid.page';

describe('NewSobreCovidPage', () => {
  let component: NewSobreCovidPage;
  let fixture: ComponentFixture<NewSobreCovidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSobreCovidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewSobreCovidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
