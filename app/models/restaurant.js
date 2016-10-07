import DS from 'ember-data';

export default DS.Model.extend(  
  name: DS.attr('string'),
  direccion: DS.attr('string'),
  telefono: DS.attr('string'),
  tipo: DS.attr('string')
});