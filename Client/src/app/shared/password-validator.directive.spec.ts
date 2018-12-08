import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PasswordStrengthValidator } from './password-validator.directive';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser' ;


@Component({
        template: `<input type="password" id="password" value="Password123" appPasswordStrength>`
})
class TestPasswordStrngthComponent { 

}

describe('Password Validator Decorator', () => {
    let component: TestPasswordStrngthComponent;
    let fixture:  ComponentFixture<TestPasswordStrngthComponent>;
    let inputE1: DebugElement;

    beforeEach(() => { 
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [PasswordStrengthValidator, TestPasswordStrngthComponent]
        });        

        fixture = TestBed.createComponent(TestPasswordStrngthComponent);
        component = fixture.componentInstance;
        inputE1 = fixture.debugElement.query(By.css('input'));
    });
     
    it('Password Strength Check', () => {        
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const elem = input.nativeElement;
      expect(elem.value).toBe('Password123');
      elem.value = 'someValue';
      elem.dispatchEvent(new Event('input'));
      expect(elem.value).toBe('someValue');

    });
});

});
