import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facture } from 'src/app/core/model/Facture';
import { FactureService } from 'src/app/core/services/facture-service/facture.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { image } from 'html2canvas/dist/types/css/types/image';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.css'],
  providers: [DatePipe]
})
export class DetailFactureComponent implements OnInit {

  constructor(private activated:ActivatedRoute,private factureService:FactureService,private datePipe: DatePipe) { }


  facture:Facture;
 date:string;
 
  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.factureService.detailFactureService(Number(id)).subscribe(
          (data)=>{
            this.facture=data;
            this.date=this.datePipe.transform(this.facture.dateFacture, 'd,MMM yyyy');
            
          }
        )    
      }
    )
  }
  generatePDF(){
    var data = document.getElementById('facture');
    html2canvas(data).then(canvas => {
        var imgData = canvas.toDataURL('image/png');
        var doc =new jsPDF('l','mm','a4');
        let imgHeight=canvas.height*250/canvas.width
        doc.addImage(imgData,'PNG',0,10,290,imgHeight)
        doc.save("facture.pdf")
      
      });

  }


}
