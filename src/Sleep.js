class Sleep {
  constructor(id, sleepRepo) {
    this.id = id;
    this.sleepRepo = sleepRepo.allData.sleepData;
  }
  avgHoursSlept() {
    const output = this.sleepRepo.filter(data => data.userID === this.id).map(data => data.hoursSlept)
    return output.reduce((acc, curr) => acc + curr) / output.length;
  }

  

}

export default Sleep;
