// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

var panels = [
    [-Math.PI / 4, -Math.PI / 6],
    [0, -Math.PI / 6],
    [Math.PI / 4, -Math.PI / 6]
].map((coords) => {
    let panel = new Surface(300, 600, Surface.SurfaceShape.Flat);
    panel.setAngle(coords[0], coords[1]);
    return panel;
});

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Hello360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  panels.forEach((panel, ind) =>
      r360.renderToSurface(
        r360.createRoot('Hello360', { name: ind }),
        panel
      )
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
