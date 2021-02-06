import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { OrderService } from '../service/order.service';
import { OrdersTableDataSource, OrdersTableItem } from './orders-table-datasource';
import { Order} from '../model/order';
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<OrdersTableItem>;
  dataSource: OrdersTableDataSource;

  @ViewChild(MatTable) table: MatTable<any>;
  dataLength: number;
  
  displayedColumns = [
    "id",
    "date",
    "name",
    "status",
    "orderTotal",
    "paymentMode",
  ];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'name'];
  constructor(private orderService: OrderService){}

  ngOnInit() {
    this.dataSource = new OrdersTableDataSource();
    this.orderService.getOrderCount().subscribe({
      next: order => {
        this.dataLength = order.orderTotal;
      },
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
