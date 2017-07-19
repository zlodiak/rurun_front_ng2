import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articlesFilter'
})
export class ArticlesFilterPipe implements PipeTransform {

  transform(articles: Object, searchText: string): Object {
  	let filteredArticles: Object[] = [];

    if (searchText === undefined) {
      return articles;
    }  	

    console.log(searchText)

    for(let prop in articles) {
      if (!articles.hasOwnProperty(prop)) continue;

      if(articles[prop].fields.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
      	filteredArticles.push(articles[prop]);
      };
    }

    return filteredArticles;
  }

}
