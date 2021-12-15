import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore } from '@ngx-translate/core';
import { AppRoutingModule } from 'src/app/approuting.module';

import { ProductLayoutComponent } from './product-layout.component';

describe('ProductLayoutComponent', () => {
  let component: ProductLayoutComponent;
  let fixture: ComponentFixture<ProductLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLayoutComponent ],
      imports:[HttpClientModule,AppRoutingModule,TranslateModule
       ],
      providers:[TranslateService,TranslateStore,TranslateLoader,TranslateCompiler,TranslateParser,MissingTranslationHandler]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
