import Ember from 'ember';

export default Ember.Route.extend({
  model(){
  return this.get('store').findAll('restaurants');
  //return ['restaurante3', 'restaurante2', 'restaurante1'];
}
});
