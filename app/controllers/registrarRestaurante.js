import Ember from 'ember';
 
export default Ember.Controller.extend({
  actions: {
    _registrarRestaurante: function() {
      var nombre = this.get('nombre');
      var direccion = this.get('direccion');
      var telefono = this.get('telefono');
      var tipo = this.get('tipo');
       
      var restaurante = this.store.createRecord('restaurant', {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        tipo: tipo
      });

      restaurante.save();
     }
   }
});