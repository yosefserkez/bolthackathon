declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera, EventDispatcher, MOUSE, Object3D, Vector3 } from 'three';

  export class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);
    
    autoRotate: boolean;
    autoRotateSpeed: number;
    dampingFactor: number;
    domElement: HTMLElement | Document;
    enabled: boolean;
    enableDamping: boolean;
    enablePan: boolean;
    enableRotate: boolean;
    enableZoom: boolean;
    keyPanSpeed: number;
    keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };
    maxAzimuthAngle: number;
    maxDistance: number;
    maxPolarAngle: number;
    maxZoom: number;
    minAzimuthAngle: number;
    minDistance: number;
    minPolarAngle: number;
    minZoom: number;
    mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
    object: Camera;
    panSpeed: number;
    position0: Vector3;
    rotateSpeed: number;
    touches: { ONE: MOUSE; TWO: MOUSE };
    target: Vector3;
    target0: Vector3;
    zoomSpeed: number;

    dispose(): void;
    getAzimuthalAngle(): number;
    getPolarAngle(): number;
    getDistance(): number;
    listenToKeyEvents(domElement: HTMLElement | Window): void;
    reset(): void;
    saveState(): void;
    update(): boolean;
  }
} 