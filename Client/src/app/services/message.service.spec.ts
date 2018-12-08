import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MessageService } from './message.service';

describe('Message Service', () => {  
  let service: MessageService;
  
    beforeEach(() => { 
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MessageService]
        });
        service = TestBed.get(MessageService);
    });

  it('should be created', () => {    
    expect(service).toBeTruthy();
  });

  it('add Message', () => {        
    const res = service.addMessage('welcome admin');
      expect(res).toBe(undefined);
  });
  
});
