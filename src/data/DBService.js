// API & Database service wrapper

/**
 * Service object containing database operation methods.
 */
const DBService = {

  //#region Machines

  /**
   * Read machine list from database.
   *
   * @return {Promise<Array<Object>|undefined>} List of machine info objects
   */
  async getMachines() {
    let data;
    try {
      let res = await fetch('api/machines');
      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      data = await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  },


  /**
   * Get machine with cooresponding _id from database
   *
   * @param {String} id
   * @return {Promise<Object|undefined>} Machine with _id
   */
  async getMachineByID(id) {
    let data;
    try {
      let res = await fetch(`api/machines/${id}`);
      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      data = await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  },

  //#endregion


  //#region Appointments

  /**
   * Read appointments list from database.
   *
   * @return {Promise<Array<Object>|undefined>} List of appointment objects
   */
  async getAppointments() {
    let data;
    try {
      let res = await fetch('api/appointments');
      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      data = await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  },
  

  /**
   * Get appointment with cooresponding _id from database
   *
   * @param {String} id
   * @return {Promise<Object|undefined>} Appointment with _id
   */
  async getAppointmentByID(id) {
    let data;
    try {
      let res = await fetch(`api/appointments/${id}`);
      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      data = await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  },


  /**
   * Get list of appointments by query from database.
   * 
   * @param {Object} query Object describing query. All properties are optional.
   * @param {Number} query.startBefore
   * @param {Number} query.startAfter
   * @param {Number} query.endBefore
   * @param {Number} query.endAfter
   * @param {String} query.machine_id
   * @param {String} query.user_id
   * @param {Boolean} [checkOnly]
   * @return {Promise<Array<Object>|Boolean>} List of appointments matching query, or true/false if checkOnly
   */
  async getAppointmentsByQuery(query, checkOnly=false) {
    let data;

    let searchParams = new URLSearchParams(query);
    if (checkOnly) {
      searchParams.append('checkOnly', 'true');
    } else if (Object.keys(query).length === 0) {
      return await this.getAppointments()
    }

    try {
      let res = await fetch("api/appointments/query?" + searchParams.toString());
      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      
      data = res.headers.get("Content-Type").includes('application/json') 
        ? await res.json()
        : await res.text();

    } catch (e) {
      console.error(e);
      return undefined;
    }

    if (checkOnly) {
      return data === "true";
    }
    return data;
  },
  

  /**
   * Post appointment to database
   *
   * @param {Object} appointment
   * @param {String} appointment.user_id
   * @param {String} appointment.machine_id
   * @param {String} appointment.username
   * @param {Number} appointment.startTime
   * @param {Number} appointment.endTime
   * @return {Promise<String|undefined>} _id of posted object if successful; undefined on error.
   */
  async postAppointment(appointment) {
    let data;
    let getParams = ({ user_id, machine_id, username, startTime, endTime }) => 
                    ({ user_id, machine_id, username, startTime, endTime });
    let cleanAppt = getParams(appointment);

    for (let [key, value] of Object.entries(cleanAppt)) {
      if (value == null)
        throw new Error(`Appt key '${key}' is invalid (value: '${value}').`);
    }

    try {
      let res = await fetch('/api/appointments/add/post', {
        method: 'POST',
        headers: {
          'Accept': 'text/html',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cleanAppt)
      });

      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);

      data = await res.text();

    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  },


  /**
   * Delete appointment with cooresponding _id from database
   *
   * @param {String} id _id of appointment to be deleted
   * @return {Promise<Boolean|undefined>} True if deleted, False if not; undefined if error.
   */
  async deleteAppointmentByID(id) {
    let data;
    try {
      let res = await fetch(`api/appointments/${id}/delete`, {
        method: "DELETE"
      });
      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      data = await res.text();
      data = !data.includes("0");
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  },

  //#endregion


  //#region Users

  /**
   * Read users list from database.
   *
   * @return {Promise<Array<Object>|undefined>} list of user info objects
   */
  async getUsers() {
    let data;
    try {
      let res = await fetch('api/users');
      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      data = await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  },


  /**
   * Get user with cooresponding _id from database
   *
   * @param {String} id
   * @return {Promise<Object|undefined>} User with _id
   */
  async getUserByID(id) {
    let data;
    try {
      let res = await fetch(`api/users/${id}`);
      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      data = await res.json();
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  },


  /**
   * Post user to database
   *
   * @param {Object} user
   * @param {String} user.netid
   * @param {String} user.email
   * @param {Boolean} user.admin
   * @return {Promise<String|undefined>} _id of posted object if successful; undefined on error.
   */
  async postUser(user) {
    let data;
    let getParams = ({ netid, email, admin }) => ({ netid, email, admin });
    let cleanUser = getParams(user);

    for (let item of cleanUser) {
      if (cleanUser[item] === undefined)
        throw new Error(`${item} is undefined`);
    }

    try {
      let res = await fetch('/api/users/add', {
        method: 'POST',
        headers: {
          'Accept': 'text/html',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cleanUser)
      });

      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);

      data = await res.text();

    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  },


  /**
   * Delete user with cooresponding _id from database
   *
   * @param {String} id _id of user to be deleted
   * @return {Promise<Boolean|undefined>} True if deleted, False if not; undefined if error.
   */
  async deleteUserByID(id) {
    let data;
    try {
      let res = await fetch(`api/users/${id}/delete`, {
        method: "DELETE"
      });
      if (res.status >= 400)
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      data = await res.text();
      data = !data.includes("0")
    } catch (e) {
      console.error(e);
      return undefined;
    }
    return data;
  },

  //#endregion
}

export default DBService;
