const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const ToDoView = require('./views.js')


const AppRouter = Backbone.Router.extend({
   routes: {
      "*path" : "renderHome"
   },

   renderHome: function(){
      ReactDOM.render( <ToDoView/> , document.querySelector('#app-container'))
   },

   initialize: function(){
      Backbone.history.start()
   }
})


new AppRouter()
