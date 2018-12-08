import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;  

  beforeEach(() => { 
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [AuthService]
      });
      service = TestBed.get(AuthService);
  });

  it('check is logged in', () => {    
      const res = service.isLoggedIn();
      expect(res).toBe(false);
  });

  it('check login functionality', () => {    
      const res = service.login('admin', 'admin');
      expect(res).toBe(undefined);
  });
  
  it('check logout functionality', () => {    
    const res = service.logout();
    expect(res).toBe(undefined);
  });

});
