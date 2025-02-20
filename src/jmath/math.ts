import { matrixToReadable } from '../LiquidPools';
import { oneDimentionIndexToVec2, vec2ToOneDimentionIndex } from './ArrayUtil';
import { Vec2 } from './Vec';
// https://webdva.github.io/how-i-implemented-client-side-linear-interpolation/
export function lerp(start: number, end: number, time: number, goBeyondEnd?: boolean) {
  if (!goBeyondEnd && time >= 1) {
    return end;
  }
  if (time <= 0) {
    return start;
  }
  return start * (1 - time) + end * time;
}

// Returns 0-1 split into segments based on i and length.  For example:
// If length is 4;
// t=0; i=0:0, i=1:0, i=2:0, i3:0
// t=.25; i=0:1, i=1:0, i=2:0, i3:0
// t=.5; i=0:1, i=1:1, i=2:0, i3:0
// t=.75; i=0:1, i=1:1, i=2:1, i3:0
// t=1; i=0:1, i=1:1, i=2:1, i3:1
export function lerpSegmented(start: number, end: number, time: number, i: number, length: number): number {
  if (time >= 1) {
    return end;
  }
  if (time <= 0) {
    return start;
  }
  const zeroToOne = start * (1 - time) + end * time;
  const zeroToSegment = zeroToOne - i / length;
  return Math.min(1, Math.max(0, zeroToSegment * length));

}

// For a triangle with sides x,y, and d (desired distance / hypotenuse), find the value
// of x and y given a known h and a known similar triangle of X,Y, and D (distance / hypotenuse)
export function similarTriangles(X: number, Y: number, D: number, d: number): Vec2 {
  if (D === 0 || d === 0) {
    return { x: 0, y: 0 };
  }
  const hypotenuseRatio = d / D;
  return {
    x: hypotenuseRatio * X,
    y: hypotenuseRatio * Y
  }
}

// getCoordsAtDistanceTowardsTarget is used, for example, to move 'travelDist' distance across
// the vector 'start' to 'end'
// --
// hint: Use a negative length to move away from target
export function getCoordsAtDistanceTowardsTarget(start: Vec2, target: Vec2, travelDist: number, allowMoveBeyondTarget: boolean = false): Vec2 {
  const distanceBetweenPoints = distance(start, target);
  // Travel at most length, however, don't move beyond target
  if (!allowMoveBeyondTarget && travelDist >= distanceBetweenPoints) {
    return target;
  }
  const result = similarTriangles(target.x - start.x, target.y - start.y, distanceBetweenPoints, travelDist)
  return {
    x: start.x + result.x,
    y: start.y + result.y
  }
}
export function distance(coords1: Vec2, coords2: Vec2): number {
  const dx = coords1.x - coords2.x;
  const dy = coords1.y - coords2.y;
  return Math.sqrt(dx * dx + dy * dy);
}
// returns a function to be passed into a .sort() callback
export function sortCosestTo(point: Vec2): (a: Vec2, b: Vec2) => number {
  return (a: Vec2, b: Vec2) => distance(a, point) - distance(b, point);
}

// Returns a point distance away from origin in the direction of the angle radians
// Currently used for finding best path to LOS for an archer
export function getPosAtAngleAndDistance(origin: Vec2, radians: number, distance: number): Vec2 {
  return {
    x: origin.x + distance * Math.cos(radians),
    y: origin.y + distance * Math.sin(radians)
  }
}


// Generates a honeycomb of circles of radius, never intersecting.
// Used for finding points to test for valid spawn
// Note, Y is inverted so that +y is "down" because of how pixi draws
export function* honeycombGenerator(radius: number, start: Vec2, loopLimit: number): Generator<Vec2> {
  // Starting point for a loop is always down right * 2radius * loop

  // Skip the start point
  for (let i = 1; i < loopLimit; i++) {
    let lastPoint = { x: start.x + i * 2 * radius, y: start.y + i * radius }
    yield lastPoint;
    // From last point:
    // Left Down x loop
    for (let j = 0; j < i; j++) {
      lastPoint = { x: lastPoint.x - 2 * radius, y: lastPoint.y + radius };
      yield lastPoint;
    }
    // Left Up x loop
    for (let j = 0; j < i; j++) {
      lastPoint = { x: lastPoint.x - 2 * radius, y: lastPoint.y - radius };
      yield lastPoint;
    }
    // Up * loop
    for (let j = 0; j < i; j++) {
      lastPoint = { x: lastPoint.x, y: lastPoint.y - 2 * radius };
      yield lastPoint;
    }
    // Right Up * loop
    for (let j = 0; j < i; j++) {
      lastPoint = { x: lastPoint.x + 2 * radius, y: lastPoint.y - radius };
      yield lastPoint;
    }
    // Right down * loop
    for (let j = 0; j < i; j++) {
      lastPoint = { x: lastPoint.x + 2 * radius, y: lastPoint.y + radius };
      yield lastPoint;
    }
    // Down * (loop -1)
    for (let j = 0; j < i - 1; j++) {
      lastPoint = { x: lastPoint.x, y: lastPoint.y + 2 * radius };
      yield lastPoint;
    }
  }

}

// Rotates a matrix clockwise once
export function rotateMatrix(array: any[], width: number): { contents: any[], width: number } {
  const height = oneDimentionIndexToVec2(array.length - 1, width).y + 1;
  const rotated: typeof array = [];
  for (let i = 0; i < width; i++) {
    for (let j = height - 1; j >= 0; j--) {
      const value = array[vec2ToOneDimentionIndex({ x: i, y: j }, width)];
      rotated.push(value);
    }
  }
  return { contents: rotated, width: height };
}