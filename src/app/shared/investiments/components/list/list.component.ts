import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public investiments: Array<Investiments> = [
    {
      name: "Itau",
      value: 100
    },
    {
      name: "Banco do Brasil",
      value: 100
    },
    {
      name: "Santander",
      value: 100
    },
    {
      name: "Bradesco",
      value: 100
    }
  ];
  constructor(private listInvestimentsService: ListInvestimentsService) { }

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe(
      res => console.log(res)
    )
  }

}
