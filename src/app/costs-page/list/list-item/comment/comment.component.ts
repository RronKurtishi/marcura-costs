import { Component, Input, OnInit } from '@angular/core';
import { CostItemComment } from 'src/app/core/interfaces/cost-item-comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: CostItemComment;

  constructor() { }

  ngOnInit(): void {
  }

}
