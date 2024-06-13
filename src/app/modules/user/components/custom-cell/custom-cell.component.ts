import { Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Param } from '../../pages/ag-grid/ag-grid.component';

@Component({
  selector: 'app-custom-cell',
  templateUrl: './custom-cell.component.html',
  styleUrls: ['./custom-cell.component.scss']
})
export class CustomCellComponent implements ICellRendererAngularComp {
  value: string;
  param: any;

  constructor() {}

  agInit(params: ICellRendererParams<any, any, any> & Param): void {
    this.value = params.value;
    this.param = params.symbol;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
}
