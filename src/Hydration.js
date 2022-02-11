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
  showTodaysOz(waterDate) {
    const output = this.hydrationRepo.filter(data => data.userID === this.id).find(data => data.date === waterDate)

    return output.numOunces
  }
  showWeeklyOz() {
    const output = this.hydrationRepo.filter(data => data.userID === this.id)
    output.splice(0, output.length -7)
    // .sort((a,b) => b.numOunces-a.numOunces)
    // console.log(output, 'yesss')
    return output.map(data => data.numOunces);
  }
}






export default Hydration;
