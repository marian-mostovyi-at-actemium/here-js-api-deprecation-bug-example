import { Component, ElementRef, ViewChild } from '@angular/core';
import { HERE_API_KEY } from '../app.component';

import H from '@here/maps-api-for-javascript';

@Component({
  selector: 'app-custom-layer-map',
  templateUrl: './custom-layer-map.component.html',
  styleUrls: ['./custom-layer-map.component.css']
})
export class CustomLayerMapComponent {
  private map?: H.Map;

  @ViewChild('map') mapDiv?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      // Instantiate a platform, default layers and a map as usual.
      const platform = new H.service.Platform({
        apikey: HERE_API_KEY
      });
      // const layers = platform.createDefaultLayers();
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
      this.map = map;
    }
  }
}
