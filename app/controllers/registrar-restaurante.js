import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    registrarRestaurante: function() {
      console.log('Aqui se ejecuta la accion de registrar el restaurante');
      var nombre = this.get('nombre');
      var direccion = this.get('direccion');
      var telefono = this.get('telefono');
      var tipo = this.get('tipo');

      console.log('Nombre ingresado'+nombre);
      console.log('Dirección ingresada'+direccion);
      console.log('Telefono ingresado'+telefono);
      console.log('Tipo ingresado'+tipo);

      var restaurante = this.store.createRecord('restaurants', {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        tipo: tipo
      });

      //restaurante.save();
     }
   }
});
