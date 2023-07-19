import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomSelectComponent } from './my-custom-select.component';

describe('MyCustomSelectComponent', () => {
  let component: MyCustomSelectComponent;
  let fixture: ComponentFixture<MyCustomSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCustomSelectComponent]
    });
    fixture = TestBed.createComponent(MyCustomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
