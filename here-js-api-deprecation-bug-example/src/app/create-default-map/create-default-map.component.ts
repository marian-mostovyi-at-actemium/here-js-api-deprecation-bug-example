import { Component, ElementRef, ViewChild } from '@angular/core';
import H from '@here/maps-api-for-javascript';
import { HERE_API_KEY } from '../app.component';

@Component({
  selector: 'app-create-default-map',
  templateUrl: './create-default-map.component.html',
  styleUrls: ['./create-default-map.component.css']
})
export class CreateDefaultMapComponent {
  private map?: H.Map;

  @ViewChild('map') mapDiv?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      // Instantiate a platform, default layers and a map as usual.
      const platform = new H.service.Platform({
        apikey: HERE_API_KEY
      });
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
      this.map = map;
    }
  }
}
