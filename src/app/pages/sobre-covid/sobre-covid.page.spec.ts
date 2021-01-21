import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SobreCovidPage } from './sobre-covid.page';

describe('SobreCovidPage', () => {
  let component: SobreCovidPage;
  let fixture: ComponentFixture<SobreCovidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreCovidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SobreCovidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
