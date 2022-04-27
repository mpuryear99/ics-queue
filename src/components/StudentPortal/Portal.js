import React from "react";
import ScheduledApps from "./ScheduledApps";

export default function Portal({user}) {

  const apptQuery = React.useMemo(() => {
    return user == null ? null : { user_id: user._id };
  }, [user]);

  // React.useEffect(() => {
  //   if (user == null) {
  //     alert("Select a user to see appointments");
  //   }
  // }, [user])

	return (
    <>
		  <h1 style = {{padding: "0px 25px"}}>Student Portal</h1>
			<ScheduledApps
        apptQuery={apptQuery}
        subheader={`${user?.netid ?? "Unknown Users"}'s Appointments`}
      />
    </>
	);
}