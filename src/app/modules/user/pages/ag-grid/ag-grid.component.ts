import { Component } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { CustomCellComponent } from '../../components/custom-cell/custom-cell.component';
import { Utilities } from 'src/app/models/data/utilities';
import { Utility } from 'src/app/models/utility/utility.model';

export interface Param {
  symbol: string;
}
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent {
  rowData: Utility[] = Utilities;

  colDefs: ColDef[] = [
    {
      field: 'CompetitiveResellerKey',
      cellRenderer: (params: ICellRendererParams) => {
        return `<b>${params.value}</b>`;
      }
    },
    {
      field: 'Supplier',
      cellRenderer: CustomCellComponent,
      cellRendererParams: { symbol: '#' } as Param
    },
    {
      field: 'SupplierDuns',
      cellRenderer: CustomCellComponent,
      cellRendererParams: { symbol: '$' } as Param
    },
    { field: 'ServiceProviderKey' },
    { field: 'Name' },
    { field: 'Duns' },
    { field: 'status' },
    { field: 'UtilityStatus' },
    { field: 'State' },
    { field: 'LegalEntityName' }
  ];
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    enableRowGroup: true
  };
  constructor() {}
}
