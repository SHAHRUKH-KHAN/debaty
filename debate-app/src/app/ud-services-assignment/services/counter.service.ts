export class CounterService {
	
	activeToInActiveCounter:number = 0;
	inActiveToActiveCounter:number = 0;

	incrementActiveToInActive() {
		this.activeToInActiveCounter++;
	}

	incrementInActiveToActive() {
		this.inActiveToActiveCounter++;
	}
}