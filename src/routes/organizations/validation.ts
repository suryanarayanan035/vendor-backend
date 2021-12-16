export const createOrganizationValidation = (req) => {
  const { name, email, password, logo } = req.body;
  if (!name || name?.length < 3) {
    return "invalid_organization_name";
  }
  if (!email || email?.length < 8) {
    return "invalid_organization_email";
  }
  if (!password || password?.length < 8) {
    return "invalid_organization_password";
  }
  if (!logo || logo?.length < 8) {
    return "invalid_logo_url";
  }

  return "";
};
