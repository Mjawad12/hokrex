import React, { useContext, useEffect, useRef, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { ContextTool } from "../Mainstate(tool)/Mainstatetool";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { fabric } from "fabric";

export function Shirt(props) {
  const { canvas, canvasOffset, texture, settexture, selectedObject } =
    useContext(ContextTool);
  const shirtRef = useRef(false);
  const { nodes, materials } = useGLTF("/test.glb");
  const { camera, scene } = useThree();

  useFrame(() => {
    if (selectedObject) {
      const url = document.querySelector("#can-text").toDataURL();
      const textu = new THREE.TextureLoader().load(url);
      textu.flipY = false;
      settexture(textu);
    }
  });

  useEffect(() => {
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    var onClickPosition = new THREE.Vector2();
    const container = document.querySelector("#cont");

    fabric.Canvas.prototype.getPointer = function (e, ignoreZoom) {
      if (this._absolutePointer && !ignoreZoom) {
        return this._absolutePointer;
      }
      if (this._pointer && ignoreZoom) {
        return this._pointer;
      }
      var pointer = fabric.util.getPointer(e),
        upperCanvasEl = this.upperCanvasEl,
        bounds = upperCanvasEl.getBoundingClientRect(),
        boundsWidth = bounds.width || 0,
        boundsHeight = bounds.height || 0,
        cssScale;

      if (!boundsWidth || !boundsHeight) {
        if ("top" in bounds && "bottom" in bounds) {
          boundsHeight = Math.abs(bounds.top - bounds.bottom);
        }
        if ("right" in bounds && "left" in bounds) {
          boundsWidth = Math.abs(bounds.right - bounds.left);
        }
      }
      this.calcOffset();
      pointer.x = pointer.x - this._offset.left;
      pointer.y = pointer.y - this._offset.top;
      /* BEGIN PATCH CODE */
      if (e.target !== this.upperCanvasEl) {
        var positionOnScene = getPositionOnScene(container, e);
        pointer.x = positionOnScene?.x;
        pointer.y = positionOnScene?.y;
      }
      /* END PATCH CODE */
      if (!ignoreZoom) {
        pointer = this.restorePointerVpt(pointer);
      }

      if (boundsWidth === 0 || boundsHeight === 0) {
        cssScale = { width: 1, height: 1 };
      } else {
        cssScale = {
          width: upperCanvasEl.width / boundsWidth,
          height: upperCanvasEl.height / boundsHeight,
        };
      }

      return {
        x: pointer.x - cssScale.width - 1,
        y: pointer.y - cssScale.height + 0.8,
      };
    };

    container.addEventListener("mousedown", onMouseEvt, false);

    function onMouseEvt(evt) {
      evt.preventDefault();
      const positionOnScene = getPositionOnScene(container, evt);
      if (positionOnScene) {
        const simEvt = new MouseEvent(evt.type, {
          clientX: canvasOffset.left + positionOnScene.x,
          clientY: canvasOffset.top + positionOnScene.y,
        });
        canvas.upperCanvasEl.dispatchEvent(simEvt);
      }
    }

    function getPositionOnScene(sceneContainer, evt) {
      var array = getMousePosition(container, evt.clientX, evt.clientY);
      onClickPosition.fromArray(array);
      var intersects = getIntersects(onClickPosition, scene.children);
      if (intersects.length > 0 && intersects[0].uv) {
        var uv = intersects[0].uv;
        intersects[0].object.material.map.transformUv(uv);
        return {
          x: getRealPosition("x", uv.x),
          y: getRealPosition("y", uv.y),
        };
      }
      return null;
    }

    function getRealPosition(axis, value) {
      let CORRECTION_VALUE = axis === "x" ? 4.5 : 5.5;

      return Math.round(value * 900);
    }

    var getMousePosition = function (dom, x, y) {
      var rect = dom.getBoundingClientRect();
      return [(x - rect.left) / rect.width, (y - rect.top) / rect.height];
    };

    var getIntersects = function (point, objects) {
      mouse.set(point.x * 2 - 1, -(point.y * 2) + 1);
      raycaster.setFromCamera(mouse, camera);
      return raycaster.intersectObjects(objects);
    };
  }, []);

  return (
    <motion.group {...props} dispose={null} ref={shirtRef}>
      <group name="Scene">
        {/* <mesh
          name="T_Shirt_male"
          castShadow
          receiveShadow
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
          userData={{ name: "T_Shirt_male" }}
          renderOrder={1}
        >
          {texture && (
            <meshStandardMaterial
              transparent
              polygonOffset
              polygonOffsetFactor={-1}
              map={texture}
              // map-flipY={false}
              // map-anisotropy={16}
              // iridescence={1}
              // iridescenceIOR={1}
              // iridescenceThicknessRange={[0, 1400]}
              // roughness={1}
              // clearcoat={0.5}
              // metalness={0.75}
              // toneMapped={false}
            ></meshStandardMaterial>
          )}
        </mesh> */}
        <group name="model1" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="model1_1"
            castShadow
            receiveShadow
            geometry={nodes.model1_1.geometry}
            material={materials.collar_FRONT_3447}
          >
            {texture && (
              <meshStandardMaterial
                transparent
                polygonOffset
                polygonOffsetFactor={-1}
                map={texture}
                map-flipY={false}
                map-anisotropy={16}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
                roughness={1}
                clearcoat={0.5}
              ></meshStandardMaterial>
            )}
          </mesh>
          <mesh
            name="model1_2"
            castShadow
            receiveShadow
            geometry={nodes.model1_2.geometry}
            material={materials.fab1_FRONT_19607}
          >
            {texture && (
              <meshStandardMaterial
                transparent
                polygonOffset
                polygonOffsetFactor={-1}
                map={texture}
                map-flipY={false}
                map-anisotropy={16}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
                roughness={1}
                clearcoat={0.5}
                toneMapped={false}
              ></meshStandardMaterial>
            )}
          </mesh>
          <mesh
            name="model1_3"
            castShadow
            receiveShadow
            geometry={nodes.model1_3.geometry}
            material={materials.fab1_BACK_19607}
          >
            {texture && (
              <meshStandardMaterial
                transparent
                polygonOffset
                polygonOffsetFactor={-1}
                map={texture}
                map-flipY={false}
                map-anisotropy={16}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
                roughness={1}
                clearcoat={0.5}
              ></meshStandardMaterial>
            )}
          </mesh>
        </group>
      </group>
    </motion.group>
  );
}

useGLTF.preload("/test.glb");

export default Shirt;
