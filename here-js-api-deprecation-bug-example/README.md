# Deprecation bug warning using createDefaultLayers

## Make it running
1. Change {your_api_key_here} in app.component.ts to your actual HERE Api Key
2. run `npm i`
3. run `npm start`

## Description
After running application you'll see 2 links - "Create default (with deprecation warning)" and "Create default (with deprecation warning)"

### Create default (with deprecation warning)
This page has a map component implemented according to this tutorial: https://www.here.com/docs/bundle/maps-api-for-javascript-developer-guide/page/topics/angular-practices.html#add-a-static-map-component

Only thing changed is base map layer (to raster.satellite.map).

```
const layers = platform.createDefaultLayers();
const map = new H.Map(
  this.mapDiv.nativeElement,
  // Add type assertion to the layers object...
  // ...to avoid any Type errors during compilation.
  (layers as any).raster.satellite.base,
  {
    pixelRatio: window.devicePixelRatio,
    center: {lat: 0, lng: 0},
    zoom: 2,
  },
);
```

On map load deprecation warning is shown in console:

> [!WARNING]  
> H.service.MapTileService is deprecated and will be removed soon. Use HERE Vector Tile API or Raster Tile API v3 instead.

### Custom layer (no deprecation warning)
This page has a map component with manualy created layer using raster tile service. No warning is shown in this case in console.

```
const rts = platform.getRasterTileService({
  queryParams: {
    'style': 'satellite.day'
  }
});
const rtp = new H.service.rasterTile.Provider(rts);
const rasterLayer = new H.map.layer.TileLayer(rtp);
const map = new H.Map(
  this.mapDiv.nativeElement,
  // Add type assertion to the layers object...
  // ...to avoid any Type errors during compilation.
  rasterLayer,
  {
    pixelRatio: window.devicePixelRatio,
    center: {lat: 0, lng: 0},
    zoom: 2,
  },
);
```
