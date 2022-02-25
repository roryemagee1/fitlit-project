class Sleep {
  constructor(id, sleepRepo) {
    this.id = id;
    this.sleepRepo = sleepRepo.allData;
  }

  avgHoursSlept() {
    const output = this.sleepRepo.filter(data => data.userID === this.id).map(data => data.hoursSlept)
    return output.reduce((acc, curr) => acc + curr) / output.length;
  }

  avgSleepQuality() {
    const output = this.sleepRepo.filter(data => data.userID === this.id).map(data => data.sleepQuality)
    const result = output.reduce((acc, curr) => {
      if(!Number.isInteger(curr.sleepQuality) && !Number.isInteger(curr.id)) {
        return 'Does not compute'
      } else {
        acc + curr
      }
      return acc
    }, 0)
    return result / output.length
  }

  hoursSleptDay(date) {
    const output = this.sleepRepo.filter(data => data.userID === this.id).find(data => {
      if(!Number.isInteger(data.sleepQuality) && !Number.isInteger(data.id)) {
        return 'Does not compute'
      } else {
      return data.date === date ?? 'Error'
    }
    })
    return output.hoursSlept
  }

  sleepQualityDay(date) {
    const output = this.sleepRepo.filter(data => data.userID === this.id).find(data => {
      if(!Number.isInteger(data.sleepQuality) && !Number.isInteger(data.id)) {
        return 'Does not compute'
      } else {
      return data.date === date
      }
    })
    return output.sleepQuality
  }

  hoursSleptWeek(start) {
    const output = this.sleepRepo.filter(data => data.userID === this.id)
    const indexDate = output.findIndex(data => data.date === start);
      return output.map(data => data.hoursSlept).slice(indexDate, indexDate + 7);
    }

  qualitySleepWeek(start) {
    const output = this.sleepRepo.filter(data => data.userID === this.id)
    const indexDate = output.findIndex(data => data.date === start);
      return output.map(data => data.sleepQuality).slice(indexDate, indexDate + 7);
    }

  avgSleepQualityAll() {
    const output = this.sleepRepo.map(data => data.sleepQuality)
    return output.reduce((acc, curr) => acc + curr) / output.length
  }
}

export default Sleep;
