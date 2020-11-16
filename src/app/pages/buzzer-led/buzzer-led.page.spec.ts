import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuzzerLedPage } from './buzzer-led.page';

describe('BuzzerLedPage', () => {
  let component: BuzzerLedPage;
  let fixture: ComponentFixture<BuzzerLedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzerLedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuzzerLedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
