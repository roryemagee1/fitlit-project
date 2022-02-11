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
}

export default Sleep;
