export function Point (X, Y, time) {
    this.X = X;
    this.Y = Y;
    this.time = null;
}

export function FrechetHelpderData(meanPoints, deviation, symmetrical){
	this.meanPoints = meanPoints;
	this.deviation = deviation;
	this.symmetrical = symmetrical;
}