// export default class Point {
//   constructor(X, Y, time) {
//     this.X = X;
//     this.Y = Y;
//     this.time = time || new Date().getTime();
//   }

//   velocityFrom(start) {
//     return (this.time !== start.time) ? this.distanceTo(start) / (this.time - start.time) : 1;
//   }

//   distanceTo(start) {
//     return Math.sqrt(Math.pow(this.X - start.X, 2) + Math.pow(this.Y - start.Y, 2));
//   }
  
//   equals(point) {
//     return this.X === point.X && this.Y === point.Y && this.time === point.time;
//   }
// }
export default class Point {
  constructor(X, Y, time) {
    this.X = X;
    this.Y = Y;
    this.time = time || new Date().getTime();
  }
}