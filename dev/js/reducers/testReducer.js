import React, {Component} from 'react';

export default (state = null, action) => {
  return Object.assign({}, state, {
    obj: {key: "value"}
  });
}
