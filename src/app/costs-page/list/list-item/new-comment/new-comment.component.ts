import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  public newCommentForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newCommentForm = this.formBuilder.group({
      commentType: ['placeholder',Validators.required],
      comment: ['', Validators.required]
    })
  }
}
