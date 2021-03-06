/*jshint esversion: 6 */
import Dispatcher from '../dispatcher';
var Constants = require('./canvas-constants');

export default class CanvasActions {

  static highlightCanvas(highlight) {
    if (highlight) {
      Dispatcher.dispatch({
        actionType: Constants.ACTION_TYPES.HIGHLIGHT_CANVAS_AS_DROP_TARGET
      });
    } else {
      Dispatcher.dispatch({
        actionType: Constants.ACTION_TYPES.CANCEL_HIGHLIGHT_CANVAS_AS_DROP_TARGET
      });
    }
  }

  static updateCanvasSizeAndOffset(data) {
     Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_RESIZED, data: data});
  }

  static deselectNodesAndConnections() {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.DESELECT_NODES_AND_CONNECTIONS});
  }

  static deselectNode(nodeID){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_REMOVE_FOCUS_SINGLE_NODE, data: nodeID});
  }

  static focusAdditionalNode(nodeID){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS__ADD_FOCUS_SINGLE_NODE, data: nodeID});
  }

  static focusNode(nodeID) {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_FOCUS_SINGLE_NODE, data: nodeID});
  }

  static focusComment(commentID){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_FOCUS_SINGLE_COMMENT, data: commentID});
  }

  static focusAddComment(commentID){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_FOCUS_ADD_COMMENT, data: commentID});
  }

  static focusRemoveComment(commentID){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_FOCUS_REMOVE_COMMENT, data: commentID});
  }

  static focusUser(userID){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_FOCUS_SINGLE_USER, data: userID});
  }

  static focusAddUser(userID){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_FOCUS_ADD_USER, data: userID});
  }

  static focusRemoveUser(userID){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_FOCUS_REMOVE_USER, data: userID});
  }

  static increaseNodeFontSize(){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_INCREASE_NODE_FONT_SIZE});
  }

  static decreaseNodeFontSize(){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_DECREASE_NODE_FONT_SIZE});
  }

  static increaseOtherFontSize(){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_INCREASE_OTHER_FONT_SIZE});
  }

  static decreaseOtherFontSize(){
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_DECREASE_OTHER_FONT_SIZE});
  }

}
