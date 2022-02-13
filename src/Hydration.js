class Hydration{
  constructor(id, hydrationRepo) {
    this.id = id;
    this.hydrationRepo = hydrationRepo.allData;
  }
  showAvgDailyOz() {
    const output = this.hydrationRepo.filter(data => data.userID === this.id).map(data => data.numOunces)

    return output.reduce((acc, curr) => acc + curr) / output.length
  }
  showTodaysOz() {
    const output = this.hydrationRepo.filter(data => data.userID === this.id).pop()
    return output.numOunces
  }
  showWeeklyOz() {
    const output = this.hydrationRepo.filter(data => data.userID === this.id)
    output.splice(0, output.length -7)

    return output.map(data => data.numOunces);
  }
}






export default Hydration;
