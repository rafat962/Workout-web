import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableDataSource, TableItem } from './table-datasource';
import { Training_serviceService } from '../training_service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-past_training',
  templateUrl: './past_training.component.html',
  styleUrls: ['./past_training.component.css'],
})
export class Past_trainingComponent
  implements AfterViewInit, OnInit, OnDestroy
{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource = new TableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'durationAchived', 'caloriesAchived'];
  constructor(private service: Training_serviceService) {}
  Subscription!: Subscription;
  EXAMPLE_DATA: TableItem[] = [];
  ngOnInit(): void {
    this.service.gettrain();
    this.Subscription = this.service.pastTraining.subscribe(
      (data: any) => (this.table.dataSource = data)
    );
    // this.EXAMPLE_DATA = this.service.pastTraining;
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.EXAMPLE_DATA;
  }
}
