import produce from "immer";

const INITIAL_STATE = {
  signed: false
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {

      case "@auth/LOGIN":
        draft.signed = true;
        break;

      case "@auth/LOGOUT":
        draft.signed = false;
        break;
        
      default:
    }
  });
}