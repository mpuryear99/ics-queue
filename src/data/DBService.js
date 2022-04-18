// API & Database service wrapper

class DBService {
  /**
   * Read machine list from database.
   *
   * @return list of machine info objects
   */
  async getMachines() {
    try {
      var res = await fetch('api/machines');
      var data = await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  }


  /**
   * Get machine with cooresponding _id from database
   *
   * @return Machine with _id
   */
  async getMachineByID(id) {
    try {
      var res = await fetch(`api/machines/${id}`);
      var data = await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  }


  /**
   * Read appointments list from database.
   *
   * @return list of appointment objects
   */
  async getAppointments() {
    try {
      var res = await fetch('api/appointments');
      var data = await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  }
  

  /**
   * Get appointment with cooresponding _id from database
   *
   * @return Appointment with _id
   */
  async getAppointmentByID(id) {
    try {
      var res = await fetch(`api/appointments/${id}`);
      var data = await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  }
}

var dbservice = new DBService();

export default dbservice;
