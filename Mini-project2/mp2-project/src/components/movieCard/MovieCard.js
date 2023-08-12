import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import "./MovieCardCss.css";
import axios from "axios";
import "./MovieCardCss.css";
import Modal from "@mui/material/Modal";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import YouTube from 'react-youtube'

const myKey = "850c76a64839953d0d1631f4e46d66b8";
const API_URL = "https://api.themoviedb.org/3/movie";

export default function MovieCard({
  movieTitle,
  movieOverview,
  backgroundImg,
  posterImg,
  releaseDate,
  movieId,
}) {

  const fetchMovieVideos = async () => {
    const { data } = await axios.get(`${API_URL}/${movieId}`, {
      params: {
        api_key: myKey,
        append_to_response: "videos",
      },
    });
    return data;
  };

  const [open, setOpen] = React.useState(false);
  const [trailerKey, setTrailerKey] = React.useState();
  const [movieVideo, setMovieVideos] = React.useState(null);

  const handleOpen = () => {
    setOpen(true);
    const movieData = async () => {
      const data = await fetchMovieVideos();
      setMovieVideos(data);
    };
    movieData();
  };

  React.useEffect(() => {
    if (movieVideo !== null) {
      let trailer = movieVideo.videos.results.find((vid) => {
        if (
          vid.official &&
          (vid.type === "Trailer" ||
            vid.type === "Teaser" ||
            vid.type === "Teaser Trailer") &&
          (vid.name === "Official Trailer" ||
            vid.name === "Official Teaser" ||
            vid.name === "Official Teaser Trailer")
        ) {
          return vid;
        } else {
          return "";
        }
      });

      trailer =
        trailer !== undefined
          ? trailer
          : movieVideo.videos.results.length !== 0
          ? movieVideo.videos.results[movieVideo.videos.results.length - 1]
          : "";
      setTrailerKey(trailer === undefined ? "" : trailer.key);
    }
  }, [movieVideo]);

  React.useEffect(() => {
  }, [trailerKey])

  const handleClose = () => {
    setOpen(false);
    setTrailerKey('')
  };

  const handleClickAway = () => {
    if (open) {
      setOpen(false);
    setTrailerKey('')
    }
  };

  return (
    <Grid item xs={5}>
      <Typography variant="h9" sx={{ marginTop: "5px", paddingTop: "5px" }}>
        {/* {movieTitle} */}
      </Typography>

      <Card
        className="card-container"
        style={{ cursor: "pointer" }}
        onClick={handleOpen}
      >
        <CardMedia
          sx={{ height: 250, padding: "10px", margin: "10px" }}
          image={backgroundImg}
          title=""
        />
        <CardContent className="CardInput">
            <Button size="small"></Button>
          
          <Modal
            open={open}
            onClose={() => handleClose()}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            
            >

            <ClickAwayListener onClickAway={() => handleClickAway()}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  outline: "none",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 710,
                    bgcolor: "black",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <YouTube
                    videoId={trailerKey}
                    opts={{ playerVars: { autoplay: 1 } }}
                  ></YouTube>
                  <Container sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      mt: 2,
                    }}>
                      
                   <Typography gutterBottom variant="h6" component="div">
                      {movieTitle}
                   </Typography>
                   <Typography variant="p" color="text.secondary">
                      <span>Release Date:</span> {""}{releaseDate}
                   </Typography>
                   <Typography
                      variant="body2"
                      color="text.secondary"
                      >
                       {movieOverview}
                   </Typography>
                  </Container>
                 </Box>
              </Box>
            </ClickAwayListener>
           </Modal>
          
          
          <Typography gutterBottom variant="h6" component="div">
            {movieTitle}
          </Typography>
          <Typography variant="p" color="text.secondary">
            <span>Release Date:</span> {""}
            {releaseDate}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="overview"
          >
              {movieOverview}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
