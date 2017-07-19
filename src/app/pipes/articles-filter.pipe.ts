import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articlesFilter'
})
export class ArticlesFilterPipe implements PipeTransform {

  transform(articles: Object, filterText: string): Object {
  	let filteredArticles: Object[] = [];

    if (!filterText || filterText.length <= 3) {
      return articles;
    }  	

    for(let prop in articles) {
      if (!articles.hasOwnProperty(prop)) continue;

      if(articles[prop].fields.title.toLowerCase().indexOf(filterText.toLowerCase()) != -1) {
      	filteredArticles.push(articles[prop]);
      };
    }

    return filteredArticles;
  }

}
