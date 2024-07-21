import { MarkdownRemark } from '../type';

export default class HelpsClass {
  id;
  html;
  slug;
  title;
  date;
  services;
  excerpt;
  categories;
  // filteredCategories;

  constructor(node: MarkdownRemark) {
    const { html, id, frontmatter, fields, excerpt } = node;
    const { slug } = fields;
    const { categories, title, date, services } = frontmatter;

    const categoryArr = categories.split(' ');

    this.id = id;
    this.excerpt = excerpt;
    this.services = services
    this.html = html;
    this.slug = slug;
    this.title = title;
    this.date = date;
    this.categories = categoryArr;
    // this.filteredCategories = categoryArr.map((category) => {
    //   return category.replace('featured-', '').trim();
    // });
  }
}
