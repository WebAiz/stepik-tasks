import {useReducer} from 'react';
import {EditIcon} from '@chakra-ui/icons';
import {useNavigate, useParams} from 'react-router-dom';
import {Button} from '@chakra-ui/react';

enum EDIT_TYPE {
  TITLE,
  DESCRIPTION,
}

interface Action {
  type: EDIT_TYPE;
}

const initState = {
  isTitleEditable: false,
  isDescriptionEditable: false,
};

function reducer(state: typeof initState, action: Action): typeof initState {
  switch (action.type) {
    case EDIT_TYPE.TITLE:
      return {...state, isTitleEditable: !state.isTitleEditable};
    case EDIT_TYPE.DESCRIPTION:
      return {...state, isDescriptionEditable: !state.isDescriptionEditable};
    default:
      throw new Error('Now element to toggle');
  }
}

const Card = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const {cardNumber} = useParams();
  const navigate = useNavigate();

  const submitCard = () => {
    navigate('/1');
  };
  const saveCard = () => {};
  const deleteCard = () => {
    navigate('/');
  };
  return (
    <div>
      <div>
        <h1 contentEditable={state.isTitleEditable}>
          {cardNumber === undefined ? 'Card new' : `Card #${cardNumber}`}
        </h1>
        <EditIcon onClick={() => dispatch({type: EDIT_TYPE.TITLE})} />
      </div>
      <div>
        <p contentEditable={state.isDescriptionEditable}>Description</p>
        <EditIcon onClick={() => dispatch({type: EDIT_TYPE.DESCRIPTION})} />
      </div>
      <section>
        <ul>
          <div>
            <li>Comment1</li>
            <EditIcon />
          </div>
          <div>
            <li>Comment2</li>
            <EditIcon />
          </div>
        </ul>
      </section>
      {!cardNumber && <Button onClick={() => navigate('/')}>Cancel</Button>}
      {!cardNumber && <Button onClick={submitCard}>Create New Card</Button>}
      {cardNumber && <Button onClick={saveCard}>Save</Button>}
      {cardNumber && <Button onClick={deleteCard}>Delete</Button>}
    </div>
  );
};

export default Card;
