// API & Database service wrapper

class DBService {
  /**
   * Read machine list from database.
   *
   * @return list of machine info objects
   */
  async getMachines() {
    try {
      var res = await fetch('api/getmachines');
      console.log(res)
      var data = await res.json();
      console.log(data)
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  }


}

var dbservice = new DBService();

export default dbservice;
