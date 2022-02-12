class Sleep {
  constructor(id, sleepRepo) {
    this.id = id;
    this.sleepRepo = sleepRepo.allData.sleepData;
  }
  avgHoursSlept() {
    const output = this.sleepRepo.filter(data => data.userID === this.id).map(data => data.hoursSlept)
    return output.reduce((acc, curr) => acc + curr) / output.length;
  }

  avgSleepQuality() {
    const output = this.sleepRepo.filter(data => data.userID === this.id).map(data => data.sleepQuality)
    return output.reduce((acc, curr) => acc + curr) / output.length;
  }

  hoursSleptDay(date) {
    const output = this.sleepRepo.filter(data => data.userID === this.id).find(data => data.date === date)
    return output.hoursSlept
  }

  sleepQualityDay(date) {
    const output = this.sleepRepo.filter(data => data.userID === this.id).find(data => data.date === date)
    return output.sleepQuality
  }

  hoursSleptWeek(start) {
    const output = this.sleepRepo.filter(data => data.userID === this.id)
    const indexDate = output.findIndex(data => data.date === start);
    console.log(indexDate)
      return output.map(data => data.hoursSlept).slice(indexDate, indexDate + 7);
    }
  }



export default Sleep;
