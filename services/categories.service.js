const boom = require('@hapi/boom');

class CategoriesService {

  constructor() {
    this.categories = [];
  }

  create(newCategorie) {
    this.categories.push(newCategorie);
    return newCategorie;
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    const category = this.categories.find(item => item.id === id);
    if(!category) throw boom.notFound('Categoria no encontrada');
    return category;
  }

  update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1) throw boom.notFound('Categoria no encontrada');
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
    }
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if(index === -1) throw boom.notFound('Categoria no encontrada');
    const category = this.categories[index];
    this.categories.splice(index, 1);
    return category;
  }

}

module.exports = CategoriesService;
