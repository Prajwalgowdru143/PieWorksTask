import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../weather.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from '../../help-dialog/help-dialog.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  displayedColumns: string[] = ['region', 'temperature', 'humidity', 'windSpeed', 'help'];
  weatherData = this.weatherService.getWeatherData();
  
  dataSource = new MatTableDataSource(this.weatherData);
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;

  constructor(private weatherService: WeatherService, private dialog: MatDialog) {}

  helpText(dataSource: any): string {
    return `Weather in ${dataSource.region}: ${dataSource.temperature}, ${dataSource.condition}, ${dataSource.windSpeed}`;
  }
  helpData(dataSource: any): string {
    return `Weather in your location:  ${dataSource.filteredData[0].temperature}, ${dataSource.filteredData[0].humidity}, ${dataSource.filteredData[0].windSpeed}`;
  }

  ngOnInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  openHelpDialog(dataSource: any): void {
    const dialogRef = this.dialog.open(HelpDialogComponent, {
      width: '300px',
      data: { helpText: this.helpData(dataSource) }, // Pass the help text to the dialog
    });
  
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
