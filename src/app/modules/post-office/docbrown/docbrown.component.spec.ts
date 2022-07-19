import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocbrownComponent } from './docbrown.component';

describe('DocbrownComponent', () => {
  let component: DocbrownComponent;
  let fixture: ComponentFixture<DocbrownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocbrownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocbrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
