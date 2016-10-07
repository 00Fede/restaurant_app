import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr(),
	nombreusuario: DS.attr(),
	correo: DS.attr(),
	ciudad: DS.attr(),
	direccion: DS.attr(),
	telefono: DS.attr()
});
