import express from "express";
import { saveBin } from "../../controllers/bins";
import { saveBinValidation } from "./validation";
const router = express.Router();
router.post("/", async (req, res) => {
  const validationMsg = saveBinValidation(req);
  if (validationMsg != "") {
    return res.status(400).send({ errorMsg: validationMsg, status: false });
  }
  const {
    binHeight,
    macId,
    volume,
    emptySpace,
    noOfRacks,
    organization,
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
  } = req.body;
  const { status } = await saveBin(
    macId,
    binHeight,
    volume,
    organization,
    emptySpace,
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
    batterylevel
  );
  if (!status) {
    return res.status(500).send({ status: false });
  }
  return res.status(200).send({ status: true });
});
module.exports = router;
