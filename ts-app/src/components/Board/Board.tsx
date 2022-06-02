import {Button, Link, ListItem, UnorderedList} from '@chakra-ui/react';
import {Link as LinkRouter, useNavigate} from 'react-router-dom';

const Board = () => {
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <UnorderedList>
        <ListItem>
          <Link as={LinkRouter} to='/1'>
            Card 1
          </Link>
        </ListItem>
        <ListItem>
          <Link as={LinkRouter} to='/2'>
            Card 2
          </Link>
        </ListItem>
        <ListItem>
          <Link as={LinkRouter} to='/3'>
            Card 3
          </Link>
        </ListItem>
        <ListItem>
          <Link as={LinkRouter} to='/4'>
            Card 4
          </Link>
        </ListItem>
      </UnorderedList>
      <Button onClick={() => goToPage('/new')} colorScheme='blue'>
        Add New Card
      </Button>
    </div>
  );
};
export default Board;
