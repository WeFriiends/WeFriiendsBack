import { Router } from "express";
const router = Router();

/**
 * @swagger
 * /api/auth:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;
