import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/shared/services/models/sales.interface';
import { SaleService } from 'src/app/shared/services/sale.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  doughnutData: any;
  doughnutOptions: any;
  barData: any;
  barOptions: any;

  sales: Sale[] = [];
  isThereSales = false;

  constructor(
    private saleService: SaleService,
  ) {
    this.updateSaleList();

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.doughnutData = {
      labels: ['Eletrônicos', 'Livros e Mídia', 'Casa e Decoração', 'Brinquedos e Jogos'],
      datasets: [
        {
          data: [100, 40, 90, 30],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-500'),
            documentStyle.getPropertyValue('--teal-500'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-400'),
            documentStyle.getPropertyValue('--teal-400'),
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400')
          ]
        }
      ]
    };


    this.doughnutOptions = {
      cutout: '60%',
      width: "500px",
      plugins: {
        legend: {
          position: 'right',
          align: 'start',
          labels: {
            color: textColor
          }
        }
      },
      responsive: false,
      maintainAspectRatio: false
    };

    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.barData = {
      labels: [
        'Smartphone Samsung Galaxy A03',
        'Smart TV LG 32LQ621CBSB',
        'Tablet Samsung Galaxy Tab',
        'Fritadeira Easy Fry 3,2L Red Arno',
        'Samsung Galaxy A14 5g',
        'Aquecedor elétrico Brit. AB1100N branco 127V',
        'Headset over-ear gamer JBL Quantum 100 JBL preto',
        'Fone De Ouvido Bluetooth 5.0',
        'Galaxy Book2 Intel Core I5',
        'Ar condicionado Philco Eco split inverter'
      ],
      datasets: [
        {
          label: 'Sales',
          data: [500, 450, 400, 380, 350, 320, 300, 250, 200, 150],
          backgroundColor: [
            'rgba(9, 130, 209, 1)', 
            'rgba(164, 0, 51, 1)', 
            'rgba(48, 107, 103, 1)', 
            'rgba(240, 241, 124, 1)', 
            'rgba(121, 188, 31, 1)', 
            'rgba(48, 107, 103, 1)', 
            'rgba(0, 143, 108, 1)', 
            'rgba(1, 193, 206, 1)', 
            'rgba(228, 0, 97, 1)', 
            'rgba(94, 111, 255, 1)', 
          ],
          borderColor: [
            'rgb(255, 159, 64)', 
            'rgb(75, 192, 192)', 
            'rgb(54, 162, 235)', 
            'rgb(153, 102, 255)', 
            'rgb(54, 162, 235)', 
            'rgb(153, 102, 255)', 
            'rgb(54, 162, 235)', 
            'rgb(153, 102, 255)', 
            'rgb(54, 162, 235)', 
            'rgb(153, 102, 255)'
          ],
          borderWidth: 1
        }
      ]
    };

    this.barOptions = {
      plugins: {
        legend: false
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      },
      responsive: false,
      maintainAspectRatio: false
    };
  }

  updateSaleList() {
    this.saleService.list().subscribe({
      next: (_sales) => {
        console.log("Vendas:", _sales)
        if (_sales != null) {
          this.sales = _sales;

          this.isThereSales = (_sales.length > 0);
        }
      },
      error: (err) => console.log("Erro aor recuperar vendas:", err)
    })
  }

}
