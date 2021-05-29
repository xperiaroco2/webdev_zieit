import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  posts: Post[] = [
    {title:"React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: 1},
    {title:"Angular", text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.", id: 2},
    {title:"Vue", text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces", id: 3},
    {title:"Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id: 4}
  ]
  titleS=''
  filterKey=''
  // @ts-ignore
  onChangeSearch(event) {
    this.titleS=event.query;
    this.filterKey = event.key;
  }

  // @ts-ignore
  updatePosts (event){
    this.posts.unshift({ ...event, id: this.posts.length + 1 });
  }

  removeIdPost(id:number) {
    this.posts = this.posts.filter((item)=>item.id!=id)
  }
}

export interface Post {
  title: string
  text: string
  id?: number
}
