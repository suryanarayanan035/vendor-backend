export const saveBinValidation = (req) => {
  const { binHeight, macId, volume, organization, emptySpace, noOfRacks } =
    req.body;
  if (!binHeight || binHeight?.length < 1) {
    return "invalid_bin_height";
  }
  if (!macId || macId?.length < 1) {
    return "invalid_mac_id";
  }
  if (!volume) {
    return "invalid_volume";
  }
  if (!organization || organization?.length < 1) {
    return "invalid_organization";
  }
  if (!emptySpace) {
    return "invalid_empty_space";
  }
  if (!noOfRacks) {
    return "invalid_no_of_racks";
  }
  return "";
};
