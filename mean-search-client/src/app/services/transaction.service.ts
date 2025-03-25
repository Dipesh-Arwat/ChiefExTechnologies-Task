import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private API_URL = 'http://localhost:5000/api/transactions';

  constructor(private http: HttpClient) {}

  // Get Transactions with Search & Pagination
  getTransactions(query: string = '', page: number = 1, limit: number = 10): Observable<any> {
    return this.http.get(`${this.API_URL}/search?query=${query}&page=${page}&limit=${limit}`);
  }

  // Filter Transactions by Date Range
  filterTransactions(startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.API_URL}/filter?startDate=${startDate}&endDate=${endDate}`);
  }
}
  