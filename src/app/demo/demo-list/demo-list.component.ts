import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface DataList {
  id: string;
  type: string;
  image: string;
  title: string;
}

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss']
})
export class DemoListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'type', 'image', 'title'];
  dataSource!: MatTableDataSource<DataList>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private aRoute: ActivatedRoute) {
      let data = this.aRoute.snapshot.data['dataList'];
      this.dataSource = new MatTableDataSource(this.sanitizeData(data.data));
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sanitizeData(data: Array<any>): Array<DataList> {
    let arr: Array<DataList> = [];

    data.map((val) => {
      arr.push({
        id: val.id,
        type: val.type,
        image: val.attributes.display_properties.image,
        title: val.attributes.content
      });
    });

    return arr;
  }
}
