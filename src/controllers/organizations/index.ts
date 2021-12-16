import { rtdb } from "../../firebaseClient";
import { set, ref, get, child } from "firebase/database";
import { getUUID } from "../../common/utils";
import { adminAuth } from "../../firebaseAdmin";
import { adminFirestore } from "../../firebaseAdmin";
const createOrganizationUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await adminAuth.createUser({
      displayName: name,
      email,
      password,
      disabled: false,
    });
    console.log("User created Successfully");
    return true;
  } catch (error) {
    console.error(`Error while creatiung organization user ${error}`);
    return false;
  }
};

export const createOrganization = async (
  name: string,
  email: string,
  password: string,
  logo: string = "",
  mobile: string,
  admin: string,
  adminMobile: string,
  adminEmail: string
) => {
  try {
    const organizationId = getUUID();
    const docRef = await adminFirestore
      .collection("organizations")
      .add({ organizationId, name, email, password, logo });
    await set(ref(rtdb, `organizations/${organizationId}`), {
      organizationId,
      name,
      email,
      password,
      logo,
      mobile,
      admin,
      adminMobile,
      adminEmail,
    });
    console.log("Data saved successfully with the id: ", docRef.id);
    const userCreated = await createOrganizationUser(name, email, password);
    if (!userCreated) {
      console.log("User not created");
      return { status: false };
    }
    console.log("user created successfully");
    return { status: true };
  } catch (error) {
    console.error("Error in createOrganization function", error);
    return { status: false };
  }
};

export const getAllOrganizations = async () => {
  try {
    const dbRef = ref(rtdb);
    const response = await get(child(dbRef, "organizations"));
    console.log("Response of getAlloOrganiztaions", response);
    console.log("Respons val:", response.val());
    return { status: true, organizations: response.val() };
  } catch (error) {
    console.error(`Error in getAllOrganizationsFunction ${error}`);
    return { status: false };
  }
};
