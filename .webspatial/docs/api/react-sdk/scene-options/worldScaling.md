# `worldScaling`

One of the [initialization properties](../../../concepts/spatial-scenes.md#scene-initialization) of a [Spatial Scene](../../../concepts/spatial-scenes.md), `worldScaling` affects how a Spatial Scene behaves when the user drags it horizontally after creation.

Only Spatial Scenes of type `volume` support `worldScaling`.

## Declared In

For [new Spatial Scenes](../../../concepts/spatial-scenes.md#new-scenes) created in a WebSpatial App, initialization properties must be set through the [`initScene`](../js-api/initScene.md) API.

For the [Start Scene](../../../concepts/spatial-scenes.md#start-scene), initialization properties must be [set through the Web App Manifest](../manifest-options/main-scene.md).

## Type

`"automatic" | "dynamic"`

Example of setting a new scene through `initScene`:

```js
import { initScene } from "@webspatial/react-sdk";

initScene("newSceneName", defaultConfig => {
  return {
    ...defaultConfig,
    type: "volume",
    worldScaling: "dynamic",
  };
});
window.open(newSceneUrl, "newSceneName");
```

Example of setting the initial scene through the Web App Manifest:

> Note: In a Web App Manifest, it is recommended to convert property names from camelCase, such as `worldScaling`, to lowercase snake_case, such as `world_scaling`.

```json
{
  "name": "example app",
  "start_url": "/",
  "xr_main_scene": {
    "type": "volume",
    "world_scaling": "dynamic"
  }
}
```

## Default Value

`"automatic"`

## Accepted Values

- `"automatic"`: shows a distance-based scaling effect during movement, like a real-world object
- `"dynamic"`: keeps a constant size relative to the user's field of view during movement, just like the default behavior of a `window` Spatial Scene
