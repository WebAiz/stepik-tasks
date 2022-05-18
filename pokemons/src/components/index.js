import { useCallback, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import style from "./index.module.css";
import { TablePagination } from "@mui/material";

const LIMIT = 10;

async function makePokemonReqeust(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Smth wrong");
  }
  return await res.json();
}

async function fetchPokemons(offset = 0, limit = LIMIT) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!res.ok) {
    throw new Error("Smth wrong");
  }

  const { results: pokemonsData } = await res.json();

  const attrs = await Promise.all(
    pokemonsData.map(({ url }) => makePokemonReqeust(url))
  );

  return pokemonsData.map((p, i) => ({
    name: p.name,
    image: attrs[i]?.sprites?.front_default,
  }));
}

const App = () => {
  const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(LIMIT);
  const [pokemons, setPokemons] = useState([]);

  const makeRequest = useCallback(async () => {
    try {
      const pokemonsWithImage = await fetchPokemons();

      setPokemons(pokemonsWithImage);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const changePageHandler = useCallback(async (_, page) => {
    const offset = (page * limit);		
		const data = await fetchPokemons(offset, limit);
		setPage(page + 1)
		setPokemons(data);
  }, [limit]);

	const handleChangeRowsPerPage = async (event) => {
		const offset = (page - 1)*event.target.value;
		const data = await fetchPokemons(offset, event.target.value);
		setLimit(event.target.value)
		setPokemons(data)
  };

  useEffect(() => {
    makeRequest();
  }, [makeRequest]);

  return (
    <>
      <div className={style.list}>
        {pokemons.map((p) => (
          <Card key={p.name} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={p.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {p.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
			<TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={100}
          rowsPerPage={limit}
          page={page - 1}
          onPageChange={changePageHandler}
          onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </>
  );
};

export default App;
