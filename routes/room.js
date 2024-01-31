import express from "express";

import roomController from "../controllers/roomController.js";

const router = express.Router();

router.post("/createRoom", roomController.createRoom);
router.get("/getAllRooms", roomController.getAllRooms);
router.post("/bookRoom", roomController.bookRoom);
router.get("/getAllBookedRoom", roomController.getAllBookedRoom);
router.get("/getAllCustomerData", roomController.getAllCustomerData);
router.get("/bookedCount/:customerName", roomController.bookedCount);

export default router;