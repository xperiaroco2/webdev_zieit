import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(post: Post[], args: [string, string]): Post[] {
    const [titleSearch, filterKey] = args;

    if(!titleSearch.trim()) {
      return post
    } else {
      return post.filter(item=>{
        if (filterKey === 'title')
        return item.title.toLowerCase().includes(titleSearch.toLowerCase())
        if (filterKey === 'text')
          return item.text.toLowerCase().includes(titleSearch.toLowerCase())

        return item;
      })
    }
  }
}
