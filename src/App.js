import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import { Room } from '@material-ui/icons';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  mapContainer: {
    width: '80%',
    height: '60vh',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
  },
  title: {
    marginBottom: theme.spacing(3),
  },
}));

const MapComponent = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 37.7749, lng: -122.4194 }}>
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  ))
);

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" component="h1" className={classes.title}>
          Welcome to our Landing Page
        </Typography>
        <div className={classes.mapContainer}>
          <MapComponent
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;

