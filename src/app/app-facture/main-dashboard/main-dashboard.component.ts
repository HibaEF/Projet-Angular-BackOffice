import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { FactureService } from 'src/app/core/services/facture-service/facture.service';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
  
})
export class MainDashboardComponent implements OnInit {
  
  chart=[];
  tab:number[];
  progres:number;
  performance:number;
  prevPerfo:number;
  difPerfo:number;
  constructor(private factureService:FactureService) { }

 l;
  ngOnInit(): void {

    

    this.factureService.statsChiffreAffaire().subscribe(d=>{
      let tab= ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
       let mois= tab[new Date().getMonth()]
      // console.log(new Date().getMonth()+1);
       
      
       
       let tabMois=[]
       for(let i = 0 ; i <new Date().getMonth();i++)
        tabMois.push(tab[i]);
      //console.log(tabMois);
        
       
      const data = {
        labels: tabMois,
        datasets: [
          {
            label: `Chiffres d'affaire ${new Date().getFullYear()}`,
            data: d,
            borderColor: '#5064c7',
            backgroundColor: '#5064c7',
            fill:false
          }
        ]
      };
        this.chart=new Chart('chart-sales-dark',{
          type: 'line',
          axisX:{
            labelFontColor: "red"
          },
          data: data,
          options: {
            scales: {
              y: {
                  beginAtZero: true
              }
          },
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                      size: 1
                  }
              }

              },
              title: {
                display: true,
                text: 'Chart.js Line Chart'
              }
            }
          },
        })


    }
    );

   /*************************************************************************************************** */
    this.factureService.statsNombreAchats().subscribe(d=>{
      let tab= ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
       let mois= tab[new Date().getMonth()]
       let tabMois=[]
       this.performance=d[new Date().getMonth()]
       this.prevPerfo=d[new Date().getMonth()-1]
       this.difPerfo=this.performance- this.prevPerfo
       console.log("azdazdazd"+this.performance);
       for(let i = 0 ; i <new Date().getMonth();i++)
        tabMois.push(tab[i]);
      console.log(tabMois);
        
       
      const data = {
        labels: tabMois,
        datasets: [
          {
            label: `Chiffres d'affaire année ${new Date().getFullYear()}`,
            data: d,
            borderColor:"#fb6340",
            backgroundColor:"#fb6340",
            fill:false
          }
        ]
      };
        this.chart=new Chart('chart-bars',{
          type: 'bar',
          
          data: data,
          options: {
            scales: {
              y: {
                  beginAtZero: true
              }
          },
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                      size: 1
                  }
              }

              },
              title: {
                display: true,
                text: 'Chart.js Line Chart'
              }
            }
          },
        })


    }
   );
  
/*-------------------------------------------------------------------------------------------------- */
  this.factureService.statsDeuxCA().subscribe(d=>{
    this.tab=d
    this.progres=(this.tab[1]-this.tab[0])/this.tab[0]
    
  })


  }
}
