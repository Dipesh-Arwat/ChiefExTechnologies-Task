import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: any[] = [];
  query: string = '';
  page: number = 1;
  limit: number = 10;
  startDate: string = '';
  endDate: string = '';

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  // Fetch transactions with search & pagination
  fetchTransactions() {
    this.transactionService.getTransactions(this.query, this.page, this.limit).subscribe(response => {
      this.transactions = response.transactions;
    });
  }

  // Filter transactions by date range
  filterByDate() {
    if (this.startDate && this.endDate) {
      this.transactionService.filterTransactions(this.startDate, this.endDate).subscribe(response => {
        this.transactions = response;
      });
    }
  }

  // Pagination controls
  nextPage() {
    this.page++;
    this.fetchTransactions();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.fetchTransactions();
    }
  }
}
