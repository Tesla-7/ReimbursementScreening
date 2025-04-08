import { Component, ChangeDetectorRef} from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ReceiptService } from '../receipt.service';


@Component({
  selector: 'app-mainpage',
  imports: [MaterialModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  formData = {
    purchaseDate: '',
    purchaseAmount: null,
    description: ''
  };
  selectedFile: File | null = null;

  constructor(private cdr: ChangeDetectorRef, private receiptService: ReceiptService) {}

  // Method to handle file selection
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

  // Method to handle form submission
  onSubmit(): void {
    if (!this.formData.purchaseDate || !this.formData.purchaseAmount || !this.formData.description) {
        alert('Please fill out all required fields.');
        return;
    }

    if (!this.selectedFile) {
        alert('Please upload a receipt file.');
        return;
    }

    this.receiptService
    .submitReceipt(this.formData, this.selectedFile)
    .subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        alert('Form submitted successfully!');
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
      }
    });
  }
}
