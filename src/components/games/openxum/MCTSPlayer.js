"use strict";

import * as MCTS from '../MCTS/MCTS'

var MCTSPlayer = function (c, e) {

// private attributes
  var _color = c;
  var _engine = e;
  var _level = 10;

// public methods
  this.color = function () {
    return _color;
  };

  this.confirm = function () {
    return false;
  };

  this.is_remote = function () {
    return false;
  };

  this.move = function () {
    return (new MCTS.Player(_color, _engine, _level)).move();
  };

  this.reinit = function (e) {
    _engine = e;
  };

  this.set_manager = function () {
  };

  this.set_level = function (l) {
    _level = l;
  };
};

export { MCTSPlayer }