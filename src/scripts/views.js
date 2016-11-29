const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const ToDoViewComponent = React.createClass({
   getInitialState: function(){
      let startingState = {}

      return startingState
   },

   render: function(){

      return (
         <div className="container">
            <h1 className="text-center header">Stuff I Should Probably Do</h1>
            <div className="row">
               <div className="col-sm-6 left-side">
                     <h4 className="text-center">Stuff to Proscratinate</h4>
                     <input type="text" className="form-control"  ref="theMsgEl"/>

                     <h4 className="text-center">Person Procrastinating</h4>

                     <input type="text" className="form-control" ref="msgFromEl"/>

                     <br/>

                     <button className="btn btn-primary text-center" >Click me. Or just do it later, whatever..</button>
               </div>

               <div className="col-sm-6 right-side">

               <h2 className="text-center">Stuff to Do Later</h2>
               <ul className="no-more-derns">
                  I dont give a dern
               </ul>
               </div>

            </div>
         </div>
      )
   }
})

module.exports=ToDoViewComponent
