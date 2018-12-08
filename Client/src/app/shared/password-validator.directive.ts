import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appPasswordStrength]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordStrengthValidator,
        multi: true
    }]
})
export class PasswordStrengthValidator implements Validator {
    @Input() appPasswordStrength: string;
    validate(control: AbstractControl): {[key: string]: any} | null {
            const checkPassword = control.parent.get(this.appPasswordStrength);

            const hasNumber = /\d/.test(checkPassword.value);
            const hasUpper = /[A-Z]/.test(checkPassword.value);
            
            const validPwd = hasNumber && hasUpper;

            if (!validPwd) {
                return { 'strong' : true};
            }
            return null;
            
    }
    
}