import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private apiUrl = 'http://localhost:5248/api/receipts'; //.NET Core API endpoint (change as needed)

  constructor(private httpClient: HttpClient) { }  

  // POST method to submit the receipt
  submitReceipt(formData: any, receiptFile: File): Observable<any> {
    const form = new FormData();
    form.append('purchaseDate', new Date(formData.purchaseDate).toISOString());
    form.append('purchaseAmount', formData.purchaseAmount.toString()); 
    form.append('description', formData.description);
    form.append('receiptFile', receiptFile, receiptFile.name);

    return this.httpClient.post(this.apiUrl, form);  // POST 
  }
}
