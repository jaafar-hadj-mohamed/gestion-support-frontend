import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { camelCase } from 'jquery';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';
import { forkJoin, interval } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //demandes:Demande[]=[];
  /*demandes=[{value:14},
  {value:38,name:'B'},
  {value:120,name:'C'}
  ];*/
 
  name:string;
  name1:string;
  name2:string;
  name3:string;
  value:string;
  p:string;
  datapoints:DataPoint[]=[];
  options:any;
  
  a:number;
  z:2;
  n:string;
  users:any;
  res:number=0;
  nov:number=0;
  ouv:number=0;
  t:any="Nouveau";
  m:number;
  f:number; u:number;
  private total=0;    
  private valuee;  
  constructor( private demandeService:DemandeService) { }

  ngOnInit(): void {
    this.getmacro();
    this.getfaq();
    this.getusers();
    this.getuser()  ;
    
    this.initCharts();
   

  }
  
  getusers(){  
    this.demandeService.getUsersList().subscribe((r:any)=>{
      this.u=r.length;
      
    })
  }
  getfaq(){  
    this.demandeService.getFaqsList().subscribe((r:any)=>{
      this.f=r.length;
      
    })
  }
getmacro(){  
  this.demandeService.getMacrosList().subscribe((r:any)=>{
    this.m=r.length;
    
  })
}

  getuser()  
  {  
    

    this.demandeService.getDemandesList().subscribe((rsult:any)=>{  
      this.users=rsult;
      
      let selected="false";
      
        for(let j=0;j<this.users.length;j++){
          
          //let value=this.users.length;
          let nameb=this.users[j].etat;
            if (nameb=="Nouveau")
              { this.nov++;
                this.name1="Nouveau"}

            else if(nameb=="Résolu")
              { this.res++;
                this.name2="Résolu"}

            else if (nameb=="Ouvert")
            { this.ouv++;
              this.name3="Ouvert"}
          }
          if (this.name1!==""){
          this.name=this.name1;
          this.value=String( this.nov);}
          this.datapoints.push(new DataPoint(this.value,this.name,selected));
          if (this.name2!==""){
            this.name=this.name2;
            this.value=String(this.res);}
            this.datapoints.push(new DataPoint(this.value,this.name,selected));
          if (this.name3!==""){
            this.name=this.name3;
            this.value=String(this.ouv);
            
          } 
          this.datapoints.push(new DataPoint(this.value,this.name,selected="true"));

      
    })  
    
  }  
  findsum(data){    
    //debugger  
    this.valuee=data    
    //console.log(this.valuee);  
    for(let j=0;j<data.length;j++){   
         this.total+= this.valuee[j].Salary  
        //console.log(this.total)  
    }  
  }  

  initCharts(){

   
    this.options = {
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
      
      title: {
        text: 'demandes',
        subtext: 'nombre des demandes total ',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },label: {
      formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
      backgroundColor: '#F6F8FC',
      borderColor: '#8C8D8E',
      borderWidth: 1,
      borderRadius: 4,
      
      rich: {
          a: {
              color: '#6E7079',
              lineHeight: 22,
              align: 'center'
          },
          hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
          },
          b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33
          },
          per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
          }
      }
  },
    series: [
        {
            name: 'demande',
            selectedMode: 'single',
            type: 'pie',
            radius: '50%',
            data: this.datapoints,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }



        },


        
    ]


  }}




}


 
  















export class DataPoint {
  constructor(
    public value: string,
    public name: string,
    public selected:string
  ) {
  }
}

