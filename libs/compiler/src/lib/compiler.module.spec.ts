import { async, TestBed } from '@angular/core/testing';
import { CompilerModule } from './compiler.module';

describe('CompilerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CompilerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CompilerModule).toBeDefined();
  });
});
