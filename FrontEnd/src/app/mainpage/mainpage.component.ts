import { Component, ChangeDetectorRef} from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-mainpage',
  imports: [MaterialModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  selectedFile: File | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
        console.log('Selected file:', this.selectedFile);
        this.cdr.detectChanges(); // Force change detection
    } else {
      console.log('No file selected');
    }
  }
}
