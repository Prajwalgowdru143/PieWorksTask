import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../../weather/weather.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from '../../help-dialog/help-dialog.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component  {
  displayedColumns: string[] = ['region', 'temperature', 'humidity', 'condition' ];
  weatherData = this.weatherService.getWeatherData();

  dataSource = new MatTableDataSource(this.weatherData);
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;

  constructor(private weatherService: WeatherService, private dialog: MatDialog) {}

  helpText(dataSource: any): string {
    return `Weather Condition in your location:  ${dataSource.filteredData[0].condition}`;
    
  }

  ngOnInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

 

openHelpDialog(dataSource: any): void {
  const dialogRef = this.dialog.open(HelpDialogComponent, {
    width: '300px',
    data: { helpText: this.helpText(dataSource) }, // Pass the help text to the dialog
  });

  dialogRef.afterClosed().subscribe(() => {
    console.log('The dialog was closed');
  });
}
}
