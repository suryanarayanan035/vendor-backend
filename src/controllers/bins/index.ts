import { rtdb } from "../../firebaseClient";
import { update, ref } from "firebase/database";

export const saveBin = async (
  macId: string,
  binHeight: string,
  volume: string,
  organization: string,
  emptySpace: string,
  noOfRacks: string,
  var1: string,
  var2: string,
  var3: string,
  bin1: string,
  bin2: string,
  bin3: string,
  binname: string,
  location: string,
  model: string,
  batterylevel: string
) => {
  try {
    const fields = [
      "macId",
      "binHeight",
      "volume",
      "organization",
      "emptyspace",
      "noOfRacks",
      "var1",
      "var2",
      "var3",
      "bin1",
      "bin2",
      "bin3",
      "binname",
      "location",
      "model",
      "batterylevel",
    ];
    const values = {
      macId,
      binHeight,
      volume,
      orgid: organization.split("@")[0],
      emptyspace: emptySpace,
      noOfRacks,
      var1,
      var2,
      var3,
      bin1,
      bin2,
      bin3,
      binname,
      location,
      model,
      batterylevel,
    };
    const updates = {};
    const common_path = `/bin_data/${macId}/`;
    for (let i = 0; i < fields.length; i++) {
      updates[`${common_path}${fields[i]}`] = values[fields[i]];
    }

    await update(ref(rtdb), updates);
    return { status: true };
  } catch (error) {
    console.error("Error occured in saveBin function", error);
    return { status: false };
  }
};
