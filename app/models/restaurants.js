import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr(),
  direccion: DS.attr(),
  telefono: DS.attr(),
  tipo: DS.attr()
});
