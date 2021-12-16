import express from "express";
import {
  createOrganization,
  getAllOrganizations,
} from "../../controllers/organizations";
import { createOrganizationValidation } from "./validation";
const router = express.Router();
router.post("/", async (req, res) => {
  const validationMsg = createOrganizationValidation(req);
  if (validationMsg != "") {
    return res.status(400).send({ errorMsg: validationMsg, status: false });
  }
  const {
    name,
    email,
    password,
    logo,
    mobile,
    admin,
    adminEmail,
    adminMobile,
  } = req.body;
  const { status } = await createOrganization(
    name,
    email,
    password,
    logo ? logo : "",
    mobile,
    admin,
    adminMobile,
    adminEmail
  );
  if (!status) {
    return res.status(500).send({ status: false });
  }
  return res.status(200).send({ status: true });
});

router.get("/", async (req, res) => {
  const { status, organizations } = await getAllOrganizations();
  if (!status) {
    return res.status(500).send({ status: false });
  }
  return res.status(200).send({ status: true, organizations });
});
module.exports = router;
