import { Component } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  query: string = "Describe the name you are looking for...";
  name?: string;
  nameType: string = "single-name/medium";

  constructor(private nameService: NameService) {}

  generateName() {
    this.nameService.generateName(this.query, this.nameType).subscribe(
      (data: any) => {
        this.name = data.name;
      },
      (error) => {
        console.error(error);
        alert('Error occurred while generating name.');
      }
    );
  }
}
