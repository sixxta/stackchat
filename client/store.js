import { createStore } from 'redux'
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';
const initialState = {
  messages: [],
  newMessageEntry: ''
}

export const writeMessage = function(inputContent){
  return {
    type: WRITE_MESSAGE,
    content: inputContent
  }
};

export const gotNewMessageFromServer = function (message) {
  return {
    type: GOT_NEW_MESSAGE_FROM_SERVER,
    message: message
}}


export const gotMessagesFromServer = function (messages) {
  return {
    type: GOT_MESSAGES_FROM_SERVER,
    messages: messages
}}

function reducer (state = initialState, action) {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
       return Object.assign({}, state, { messages: action.messages });
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return Object.assign({}, state, { messages: state.messages.concat(action.message) })
    case WRITE_MESSAGE:
      return Object.assign({}, state, {newMessageEntry: action.content})
    default:
       return state;
  }
}

const store = createStore(reducer);
export default store;

