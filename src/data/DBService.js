import machines_json from "./dev/machines.json";
import appointments_json from "./dev/appointments.json";

const sample_data = {
  machines: machines_json.machines,
  appointments: appointments_json.apps,
  
}

class DBService {
  /**
   * Read machine list from database.
   * (WIP-DEV: Currently reads from file)
   *
   * @return list of machine info objects
   */
  getMachines() {
    return sample_data.machines;
  }

  getAppointments() {
    return sample_data.appointments;
  }
}

var dbservice = new DBService();

export default dbservice;
