import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { CardMedia, Container, CssBaseline, Typography } from '@material-ui/core';

// source: https://stackoverflow.com/questions/49007357/how-to-make-the-whole-card-component-clickable-in-material-ui-using-react-js/50444524#50444524 

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function CgCard(props) {
  const { course } = props;
  const classes = useStyles();
  const history = useHistory();

  const getView = (event) => {
    event.preventDefault();
    history.push({
      pathname: "/cgCardMore",
      state: { cname: event.target.value },
    });
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {
            <div >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}  >
                </CardMedia>
                <CardContent >
                  <Typography gutterBottom variant="h5" component="h2">Some text 
                  </Typography>
                  <Typography> Some othe text 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="medium" color="primary" onClick={getView} >
                    View
                  </Button>
                </CardActions>
              </Card>
            </div>
          }
        </Container>
      </main>
    </React.Fragment>
  )
}

export default CgCard;

