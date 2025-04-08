import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-mainpage',
  imports: [MaterialModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
          this.selectedFile = input.files[0];
          console.log('Selected file:', this.selectedFile);
      }
  }
}
