import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-purchase-details',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './purchase-details.component.html',
  styleUrl: './purchase-details.component.css'
})
export class PurchaseDetailsComponent {
  purchase() {
    console.log("thanks for purchasing");
  }
}
