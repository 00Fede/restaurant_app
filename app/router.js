import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('create-client');
  this.route('registrar-restaurante');
  this.route('muestra-restaurante');
});

export default Router;
