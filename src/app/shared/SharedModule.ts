import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MatrialModule } from '../matrial/matrial.module';

const share = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  HttpClientModule,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatrialModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [share],
  exports: [share],
})
export class SharedModule {}
