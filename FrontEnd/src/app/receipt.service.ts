import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private apiUrl = 'http://localhost:5248/api/receipts';

  constructor(private httpClient: HttpClient) { }  

  // POST method to submit the receipt
  submitReceipt(formData: any, receiptFile: File): Observable<any> {
    const form = new FormData();
    // form.append('PurchaseDate', formData.purchaseDate); // Match backend field names
    form.append('purchaseDate', new Date(formData.purchaseDate).toISOString());
    form.append('purchaseAmount', formData.purchaseAmount.toString()); // Ensure amount is a string
    form.append('description', formData.description);
    form.append('receiptFile', receiptFile, receiptFile.name);
    //console.log('FormData:', Array.from(form.entries())); // Log the FormData content

    return this.httpClient.post(this.apiUrl, form);  // POST 
  }
}
