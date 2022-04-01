import machines_json from "./dev/machines.json";

const sample_data = {
  machines: machines_json.machines,
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
}

var dbservice = new DBService();

export default dbservice;
