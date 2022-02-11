class Hydration{
  constructor(id, hydrationRepo) {
    this.id = id;
    this.hydrationRepo = hydrationRepo.allData.hydrationData;
    // console.log(id)
  }
  showAvgDailyOz() {
    const output = this.hydrationRepo.filter(data => data.userID === this.id).map(data => data.numOunces)
    // console.log(this.hydrationRepo)
    // console.log(output, 'jlsdfl')
    // console.log(this.id)
    return output.reduce((acc, curr) => acc + curr) / output.length
  }
  showTodaysOz(date) {
    const output = this.hydrationRepo.find()
  }
  showWeeklyOz() {

  }
}






export default Hydration;
